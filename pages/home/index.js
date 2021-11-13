import { useState, useEffect } from "react";
import useUser from "@hooks/useUser";

import AppLayout from "@components/Applayout";
import Devit from "@components/Devit";

import { fetchLatestDevits } from "@firebase/client";

import styles from "./styles";

export default function HomePage() {
  const [timeline, setTimeline] = useState([]);
  const user = useUser();

  useEffect(() => {
    user &&
      fetchLatestDevits()
        .then(setTimeline)
        .catch((err) => console.log(err));
  }, [user]);

  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>

        <section>
          {timeline.map(({ uid, avatar, username, content, createdAt, id }) => (
            <Devit
              uid={uid}
              avatar={avatar}
              username={username}
              content={content}
              createdAt={createdAt}
              key={id}
            />
          ))}
        </section>

        <nav></nav>
      </AppLayout>

      <style jsx>{styles}</style>
    </>
  );
}
