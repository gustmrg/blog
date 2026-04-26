import { useParams, Link } from "react-router-dom";
import { getPostBySlug } from "../lib/posts";
import PostContent from "../components/PostContent";
import NotFound from "./NotFound";

export default function Post() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <NotFound />;

  return (
    <article className="post-page">
      <header className="post-header">
        <Link to="/" className="back-link">
          &larr; Back
        </Link>
        <h1>{post.title}</h1>
        <time dateTime={post.date}>
          {new Date(post.date + "T00:00:00").toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        {post.tags.length > 0 && (
          <div className="tags">
            {post.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      <PostContent content={post.content} />
    </article>
  );
}
