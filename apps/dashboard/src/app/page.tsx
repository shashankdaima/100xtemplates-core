import { Copy } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/components/ui/dialog";
import { Button } from "@repo/ui/components/ui/button";
import Image from "next/image";
import TemplateLanding from "@repo/ui/components/template-landing";

export default function Home() {
  return (
    <>
      <TemplateLanding subtitle="This is Nextjs(App Router) template with Shadcn/UI and Tailwind CSS" />
    </>
  );
}
