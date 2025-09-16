import React, { useState } from "react";
import Card from "../components/common/Card";
import PostModal from "../components/common/PostModal";

interface Post {
  title: string;
  content: string;
}

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (post: Post) => {
    setPosts((prev) => [...prev, post]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        + Add New Post
      </button>

      <div className="mt-6 space-y-4">
        {posts.length === 0 ? (
          <p>No posts yet. Click the button above to add one.</p>
        ) : (
          posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))
        )}
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
}
