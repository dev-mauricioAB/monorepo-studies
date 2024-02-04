import Link from "next/link";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col p-4">
      <h1>Hello CONFIGS</h1>

      <Link href="/user-form">Go To User Form</Link>
      <Link href="/user-form/SLUG">Go To User Form With SLUG</Link>
    </main>
  );
}
