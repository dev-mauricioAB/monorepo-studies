import { Button } from "@repo/ui/button";

import "@repo/ui/styles";

export default function Page(): JSX.Element {
  return (
    <main className="flex p-4">
      <h1>Hello CONFIGS</h1>

      <Button appName="docs" className="ml-5">
        Opa
      </Button>
    </main>
  );
}
