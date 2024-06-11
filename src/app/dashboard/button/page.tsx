"use client";

import { ChevronRight, Loader2, Mail } from "lucide-react";
import { Button } from "../../../components/ui/button";

export default function ButtonPage() {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button>Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button disabled>disabled</Button>
      <Button onClick={() => console.log("Hola mundo")}>Click Me</Button>
      <Button variant="success">Success</Button>
      <Button capitalize={false}>capitalize false</Button>

      <Button variant="outline" size="icon">
        <ChevronRight className="h-4 w-4" />
      </Button>

      <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>

      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    </div>
  );
}
