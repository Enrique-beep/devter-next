import Head from "next/head";
import { useRouter } from "next/router";

import { useEffect } from "react";
import useUser, { USER_STATES } from "@hooks/useUser";

import Button from "@components/Button";
import GitHub from "@components/Icons/GitHub";
import Logo from "@components/Icons/Logo";

import { colors } from "@styles/theme";

import { loginWithGitHub } from "@firebase/client";

export default function Home() {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    user && router.replace("/home");
  }, [user, router]);

  const handleClick = () => {
    loginWithGitHub().catch((err) => {
      console.log(err);
    });
  };

  return (
    <>
      <Head>
        <title>Devter 🐤</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <Logo width="100" />
        <h1>Devter</h1>
        <h2>
          Talk about developmet <br /> with developers 👩‍💻👨‍💻
        </h2>
        <div>
          {user === USER_STATES.NOT_LOGGED && (
            <Button onClick={handleClick}>
              <GitHub width={24} height={24} fill={"#fff"} />
              Login with GitHub
            </Button>
          )}
          {user === USER_STATES.NOT_KNOWN && <span>Loading...</span>}
        </div>
      </section>

      <style jsx>{`
        img {
          width: 120px;
        }

        div {
          margin-top: 16px;
        }

        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }

        h1 {
          color: ${colors.primary};
          font-weight: 800;
          font-size: 32px;
          margin-botoom: 16px;
        }

        h2 {
          color: ${colors.secondary};
          font-size: 21px;
          margin: 0;
        }
      `}</style>
    </>
  );
}
