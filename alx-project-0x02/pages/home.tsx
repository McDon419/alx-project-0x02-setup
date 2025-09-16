import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header style={{ padding: "1rem", background: "#f4f4f4" }}>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link href="/home">Home</Link>
        <Link href="/home">About</Link>
      </nav>
    </header>
  );
}
