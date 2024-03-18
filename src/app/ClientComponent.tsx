"use client";

import { explodeMe } from "@/explode-me";

export function ClientComponent() {
  const onClick = () => {
    void explodeMe()
      .then(
        () => {
          console.log("success");
        },
        () => {
          console.log("failure");
        }
      )
      .finally(() => {
        console.log("finished");
      });
  };
  return <h1 onClick={onClick}>ClientComponent</h1>;
}
