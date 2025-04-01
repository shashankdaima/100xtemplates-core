import { Button } from "@repo/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button appName="Dashboard">Click me</Button>
    </div>
  );
}
