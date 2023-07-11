import { Link } from "@remix-run/react";
import { Button, Stack } from "react-bootstrap";

export const meta = () => {
  return [
    { title: "Task Project" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
      <div>desde index</div>
  );
}
