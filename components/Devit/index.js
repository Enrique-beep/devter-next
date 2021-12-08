import Link from "next/link";
import { useRouter } from "next/router";
import useTimeAgo from "@hooks/useTimeAgo";
import Avatar from "@components/Avatar";
import styles from "./styles";
import useDateTimeFormat from "@hooks/useDateTimeFormat";

export default function Devit({
  id,
  uid,
  avatar,
  username,
  content,
  createdAt,
  img,
}) {
  const router = useRouter();
  const timeAgo = useTimeAgo(createdAt);
  const createdAtFormated = useDateTimeFormat(createdAt);

  const handleArticleClick = (e) => {
    e.preventDefault();
    router.push(`/status/${id}`);
  };

  return (
    <>
      <article onClick={handleArticleClick}>
        <div>
          <Avatar src={avatar} alt={username} />
        </div>

        <section>
          <header>
            <strong>{username}</strong>
            <span> &bull; </span>
            <Link href={`/status/${id}`}>
              <a>
                <time title={createdAtFormated}>{timeAgo}</time>
              </a>
            </Link>
          </header>
          <p>{content}</p>
          {img && <img src={img} />}
        </section>
      </article>

      <style jsx>{styles}</style>
    </>
  );
}
