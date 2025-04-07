import * as React from "react";
import type { HeadProps, PageProps } from "gatsby";
import { ExternalLink } from "lucide-react";
import { cn } from "../utils/cn";

function IndexPage(_: PageProps): JSX.Element {
  return (
    <main className="size-full">
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
          <img
            alt="background"
            src="https://shadcnblocks.com/images/block/patterns/square-alt-grid.svg"
            className="opacity-90 [mask-image:radial-gradient(75%_75%_at_center,white,transparent)]"
          />
        </div>
        <div className="mx-auto relative z-10 container">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="rounded-xl bg-background/30 p-4 shadow-sm backdrop-blur-sm">
                <img
                  src="https://shadcnblocks.com/images/block/block-1.svg"
                  alt="logo"
                  className="h-16"
                />
              </div>
              <div>
                <h1 className="mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl">
                  Build your next project with{" "}
                  <span className="text-primary underline">100x Templates</span>
                </h1>
                <p className="mx-auto max-w-3xl text-muted-foreground lg:text-xl">
                  Modern templates for rapid development
                </p>
              </div>
              <div className="mt-6 flex justify-center gap-3">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 shadow-sm transition-shadow hover:shadow">
                  Get Started
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 group">
                  Learn more{" "}
                  {/* <ExternalLink className="ml-2 h-4 transition-transform group-hover:translate-x-0.5" /> */}
                </button>
              </div>
              <div className="mt-20 flex flex-col items-center gap-5">
                <p className="font-medium text-muted-foreground lg:text-left">
                  Built with open-source technologies
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="#"
                    className={cn(
                      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2",
                      "group flex aspect-square h-12 items-center justify-center p-0",
                    )}
                  >
                    <img
                      src="https://shadcnblocks.com/images/block/logos/shadcn-ui-icon.svg"
                      alt="shadcn/ui logo"
                      className="h-6 saturate-0 transition-all group-hover:saturate-100"
                    />
                  </a>
                  <a
                    href="#"
                    className={cn(
                      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2",
                      "group flex aspect-square h-12 items-center justify-center p-0",
                    )}
                  >
                    <img
                      src="https://shadcnblocks.com/images/block/logos/typescript-icon.svg"
                      alt="TypeScript logo"
                      className="h-6 saturate-0 transition-all group-hover:saturate-100"
                    />
                  </a>
                  <a
                    href="#"
                    className={cn(
                      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2",
                      "group flex aspect-square h-12 items-center justify-center p-0",
                    )}
                  >
                    <img
                      src="https://shadcnblocks.com/images/block/logos/react-icon.svg"
                      alt="React logo"
                      className="h-6 saturate-0 transition-all group-hover:saturate-100"
                    />
                  </a>
                  <a
                    href="#"
                    className={cn(
                      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2",
                      "group flex aspect-square h-12 items-center justify-center p-0",
                    )}
                  >
                    <img
                      src="https://shadcnblocks.com/images/block/logos/tailwind-icon.svg"
                      alt="Tailwind CSS logo"
                      className="h-6 saturate-0 transition-all group-hover:saturate-100"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default IndexPage;

export function Head(_: HeadProps): JSX.Element {
  return <title>Home Page</title>;
}
