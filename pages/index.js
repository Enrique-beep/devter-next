import Head from "next/head";

import { useEffect, useState } from "react";

import AppLayout from "@components/Applayout";
import Avatar from "@components/Avatar";
import Button from "@components/Button";
import GitHub from "@components/Icons/GitHub";
import Logo from "@components/Icons/Logo";

import { colors } from "@styles/theme";

import { loginWithGitHub, onAuthStateChanged } from "@firebase/client";

export default function Home() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged((user) => setUser(user));
  }, []);

  const handleClick = () => {
    loginWithGitHub()
      .then(setUser)
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Head>
        <title>Devter 🐤</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <Logo width="100" />
          <h1>Devter</h1>
          <h2>
            Talk about developmet <br /> with developers 👩‍💻👨‍💻
          </h2>
          <div>
            {user === null && (
              <Button onClick={handleClick}>
                <GitHub width={24} height={24} fill={"#fff"} />
                Login with GitHub
              </Button>
            )}
            {user && user.avatar && (
              <div>
                <Avatar
                  src={user.avatar}
                  alt={user.username}
                  text={user.username}
                />
              </div>
            )}
          </div>
        </section>
      </AppLayout>

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
