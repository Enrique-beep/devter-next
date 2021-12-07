import useTimeAgo from "@hooks/useTimeAgo";
import Avatar from "@components/Avatar";
import styles from "./styles";
import useDateTimeFormat from "@hooks/useDateTimeFormat";

export default function Devit({ uid, avatar, username, content, createdAt, img }) {
  const timeAgo = useTimeAgo(createdAt);
  const createdAtFormated = useDateTimeFormat(createdAt)

  return (
    <>
      <article>
        <div>
          <Avatar src={avatar} alt={username} />
        </div>

        <section>
          <strong>{username}</strong>
          <span> &bull; </span>
          <time title={createdAtFormated}>{timeAgo}</time>
          <p>{content}</p>
          { img && <img src={img} /> }
        </section>
      </article>

      <style jsx>{styles}</style>
    </>
  );
}
