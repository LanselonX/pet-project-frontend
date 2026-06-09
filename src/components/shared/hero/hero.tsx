import Link from "next/link";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { Badge } from "../../ui/badge";
import { Card } from "../../ui/card";
import { FEATURES, HeroLinks, STACK } from "./hero-constants";
import { ArrowRight } from "lucide-react";
import { GithubIcon } from "./github-icon";

export default function Hero() {
  return (
    <div className="min-h-screen bg-background">
      <header className="flex items-center justify-between px-8 py-5">
        <span>Pet Project</span>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/LanselonX"
            target="_blank"
            className="text-sm text-muted-foreground hover:text-foreground transation-colors"
          >
            Github
          </Link>
          <Button size="sm" variant="outline" asChild>
            <Link href="/meals">Browse Meals</Link>
          </Button>
        </div>
      </header>
      <section className="flex flex-col items-center text-center px-8 pt-20 pb-16">
        <Badge
          variant="outline"
          className="mb-7 rounded-full px-4 py-1 text-muted-foreground gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
          pet project · open source
        </Badge>
        <h1 className="text-4xl font-medium tracking-tight max-w-lg mb-4">
          Order food. Simple as that
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed max-w-md mb-9">
          A full-stack food ordering app built with NestJS and Next.js. Browse
          meals, manage your cart, and place orders.
        </p>
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="outline">
                  <GithubIcon className="w-3 h-3" />
                  Source Code
                </Button>
              }
            />
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuLabel>Repositories</DropdownMenuLabel>
                {HeroLinks.map(({ title, href }) => (
                  <DropdownMenuItem key={title}>
                    <Link href={href} target="_blank">
                      {title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button asChild>
            <Link href="/meals">
              <ArrowRight className="w-4 h-4" />
              View Demo
            </Link>
          </Button>
        </div>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-3 px-8 pb-12 max-w-2xl mx-auto w-full">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <Card key={title} className="p-5 bg-muted/40 border-border/60">
            <Icon
              className="w-5 h-5 text-muted-foreground mb-3"
              strokeWidth={1.5}
            />
            <p className="text-sm font-medium mb-1">{title}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {description}
            </p>
          </Card>
        ))}
      </section>
      <div className="flex justify-center flex-wrap gap-2 px-8 pb-16">
        {STACK.map((tech) => (
          <span
            key={tech}
            className="text-xs text-muted-foreground border border-border/60 rounded-full px-3 py-1"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
