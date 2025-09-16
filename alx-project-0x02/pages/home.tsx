import React from "react";
import Header from "@/components/layout/Header";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold">Welcome to Home Page</h1>
        <p>This is the home page content.</p>
      </main>
    </div>
  );
}
