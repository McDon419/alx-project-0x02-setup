import React from "react";
import Card from "../components/common/Card";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Card
        title="First Card"
        content="This is the content of the first reusable card."
      />
      <Card
        title="Second Card"
        content="Here’s another card with different content."
      />
      <Card
        title="Third Card"
        content="You can add as many cards as you like, just pass different props."
      />
    </div>
  );
}
