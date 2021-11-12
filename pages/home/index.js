import { useState, useEffect } from "react";
import useUser from "@hooks/useUser";

import AppLayout from "@components/Applayout";
import Devit from "@components/Devit";

import styles from "./styles";

export default function HomePage() {
  const [timeline, setTimeline] = useState([]);
  const user = useUser();

  useEffect(() => {
    user &&
      fetch("http://localhost:3000/api/statuses/home_timeline")
        .then((res) => res.json())
        .then(setTimeline);
  }, [user]);

  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>

        <section>
          {timeline.map(({ id, avatar, username, message }) => (
            <Devit
              id={id}
              avatar={avatar}
              username={username}
              message={message}
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
