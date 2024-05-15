import React from "react";
import Link from "next/link";
import { ModeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";

export const Navigation = () => {
  return (
    <div>
      <nav className="container flex items-center justify-between p-2 py-4 border-b">
        <Link href="/" className="font-black underline">
          TASKnote
        </Link>
        <ul className="container flex items-center justify-end">
          <li>
            <Button variant="link">
              <Link href="/">Tasks</Link>
            </Button>
          </li>
          <li>
            <Button variant="link">
              <Link href="/task-create">Create Task</Link>
            </Button>
          </li>
        </ul>
      </nav>
      <div className="container flex items-center justify-end py-8">
        <ul>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </div>
    </div>
  );
};
