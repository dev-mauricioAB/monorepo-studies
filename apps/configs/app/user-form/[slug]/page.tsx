import { Button } from "@repo/ui/button";

export default function Configs({
  params,
}: {
  params: { slug: string };
}): JSX.Element {
  return (
    <main className="flex p-4">
      <h1>Hello User Form</h1>

      <Button className="ml-5">{params.slug}</Button>
    </main>
  );
}
