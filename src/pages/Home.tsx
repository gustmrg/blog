import { getAllPosts } from "../lib/posts";
import PostCard from "../components/PostCard";

const posts = getAllPosts();

export default function Home() {
  return (
    <section className="post-list">
      {posts.map((post) => (
        <PostCard key={post.slug} {...post} />
      ))}
    </section>
  );
}
