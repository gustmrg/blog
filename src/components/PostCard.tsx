import { Link } from "react-router-dom";
import type { PostMeta } from "../types/post";

export default function PostCard({ slug, title, date, description }: PostMeta) {
  return (
    <article className="post-card">
      <Link to={`/posts/${slug}`}>
        <h2>{title}</h2>
      </Link>
      <time dateTime={date}>
        {new Date(date + "T00:00:00").toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <p>{description}</p>
    </article>
  );
}
