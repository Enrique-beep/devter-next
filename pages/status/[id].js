import Devit from "@components/Devit";
import { firestore } from "@firebase/admin"
import { useRouter } from "next/router";


export default function DevitPage(props) {
  const router = useRouter();

  if (router.isFallback) return <h1>Loading...</h1>

  return (
    <>
      <Devit {...props} />
      <style jsx>{``}</style>
    </>
  );
}

// ? getStaticProps Functions
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '343WqbHrKUycZxIzGFIA' } }],
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const { params } = context;
  const { id } = params;

  return firestore
    .collection("devits")
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data()
      const id = doc.id
      const { createdAt } = data

      const props = {
        ...data,
        id,
        createdAt: +createdAt.toDate(),
      }
      return { props }
    })
    .catch(() => {
      return { props: {} }
    })
}


// ? getServerSideProps Function
// export async function getServerSideProps(context) {
//   const { params, res } = context;
//   const { id } = params;

//   const apiResponse = await fetch(`http://localhost:3000/api/devits/${id}`);
//   if (apiResponse.ok) {
//     const props = await apiResponse.json();
//     return { props };
//   }
//   if (res) {
//     res.writeHead(301, { Location: "/home" }).end();
//   }
// }


// ? getInitialProps Function
// DevitPage.getInitialProps = (context) => {
//   const { query, res } = context;
//   const { id } = query;

//   return fetch(`http://localhost:3000/api/devits/${id}`).then((apiResponse) => {
//     if (apiResponse.ok) return apiResponse.json();
//     if (res) {
//       res.writeHead(301, { Location: "/home" }).end();
//     }
//   });
// };
