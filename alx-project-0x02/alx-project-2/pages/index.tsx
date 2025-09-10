import React from "react";
import Header from "../components/layout/Header";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <section className="flex items-center justify-center h-[80vh]">
        <h2 className="text-3xl font-semibold text-gray-800">
          🎉 Welcome to your Next.js + TypeScript + Tailwind project!
        </h2>
      </section>
    </main>
  );
};

export default Home;
