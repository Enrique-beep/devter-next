import Head from "next/head";
import Link from "next/link";

import { useState, useEffect } from "react";
import useUser from "@hooks/useUser";

import Devit from "@components/Devit";
import Home from "@components/Icons/Home";
import Search from "@components/Icons/Search";
import Create from "@components/Icons/Create";

import { listenLastestDevits } from "@firebase/client";

import styles from "./styles";

export default function HomePage() {
  const [timeline, setTimeline] = useState([]);
  const user = useUser();

  useEffect(() => {
    let unsubscribe;
    if (user) {
      listenLastestDevits(setTimeline);
    }
    return () => unsubscribe && unsubscribe();
  }, [user]);

  return (
    <>
      <Head>
        <title>Home / Devter 🐤</title>
      </Head>

      <header>
        <h2>Inicio</h2>
      </header>

      <section>
        {timeline.map(
          ({ uid, avatar, username, img, content, createdAt, id }) => (
            <Devit
              id={id}
              uid={uid}
              avatar={avatar}
              username={username}
              content={content}
              createdAt={createdAt}
              img={img}
              key={id}
            />
          )
        )}
      </section>

      <nav>
        <Link href="/home">
          <a>
            <Home width={32} height={32} stroke="#09f" />
          </a>
        </Link>
        <Link href="/search">
          <a>
            <Search width={32} height={32} stroke="#09f" />
          </a>
        </Link>
        <Link href="/compose/devit">
          <a>
            <Create width={32} height={32} stroke="#09f" />
          </a>
        </Link>
      </nav>

      <style jsx>{styles}</style>
    </>
  );
}
