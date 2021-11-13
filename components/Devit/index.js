import Avatar from "@components/Avatar";
import styles from "./styles";

export default function Devit({ uid, avatar, username, content, createdAt }) {
  console.log(createdAt);
  return (
    <>
      <article>
        <div>
          <Avatar src={avatar} alt={username} />
        </div>

        <section>
          <strong>{username}</strong>
          <span> &bull; </span>
          <span>{createdAt}</span>
          <p>{content}</p>
        </section>
      </article>

      <style jsx>{styles}</style>
    </>
  );
}
