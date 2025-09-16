import React from "react";
import Header from "@/components/layout/Header";

export default function PostsPage() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold">Posts Page</h1>
        <p>Here you can find all posts.</p>
      </main>
    </div>
  );
}
