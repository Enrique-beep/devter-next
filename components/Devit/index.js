import useTimeAgo from "@hooks/useTimeAgo";
import Avatar from "@components/Avatar";
import styles from "./styles";

export default function Devit({ uid, avatar, username, content, createdAt }) {
  const timeAgo = useTimeAgo(createdAt);

  return (
    <>
      <article>
        <div>
          <Avatar src={avatar} alt={username} />
        </div>

        <section>
          <strong>{username}</strong>
          <span> &bull; </span>
          <span>{timeAgo}</span>
          <p>{content}</p>
        </section>
      </article>

      <style jsx>{styles}</style>
    </>
  );
}
