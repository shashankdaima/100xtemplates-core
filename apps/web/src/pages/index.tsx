import * as React from "react";
import type { HeadProps, PageProps } from "gatsby";
// import { Button } from "@repo/ui/button";

function IndexPage(_: PageProps): JSX.Element {
  return (
    <main>
      <h1 className="text-3xl text-red-500 font-bold underline">
        Hello world!
      </h1>
    </main>
  );
}

export default IndexPage;

export function Head(_: HeadProps): JSX.Element {
  return <title>Home Page</title>;
}
