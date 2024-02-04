"use client";

import "@repo/ui/styles";

import Link from "next/link";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col  p-4">
      <h1>Hello Shell</h1>

      <nav>
        <Link href="/" className="mr-4">
          Home
        </Link>
        <Link href="/configs">Configs</Link>
      </nav>
    </main>
  );
}
