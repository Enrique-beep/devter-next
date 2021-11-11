import Head from "next/head";
import AppLayout from "@components/Applayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Devter 🐤</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <h1>
          <a href="https://nextjs.org">Devter</a>
        </h1>
      </AppLayout>

      <style jsx>{`
        .title {
          text-align: center;
          font-size: 48px;
        }

        .title a,
        .link {
          color: #09f;
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
