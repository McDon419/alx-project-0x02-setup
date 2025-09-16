import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-6">Posts</h1>
        <div className="grid gap-4">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

// ✅ Use Next.js getStaticProps to fetch posts at build time
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: PostProps[] = await res.json();

  return {
    props: {
      posts: data.slice(0, 10), // pass first 10 posts
    },
  };
}
