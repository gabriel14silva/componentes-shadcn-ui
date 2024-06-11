"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../../../components/ui/button";
import { useState } from "react";

export default function AlertPage() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="grid grid-cols-2 ga-4">
      <AlertDialog
        open={dialogOpen}
        // onOpenChange={(open) => console.log({ open })}
        onOpenChange={setDialogOpen}
      >
        <AlertDialogTrigger>Show Dialog</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => console.log("cancel")}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => console.log("continue")}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Button onClick={() => setDialogOpen(true)}>Open Dialog Manually</Button>
    </div>
  );
}
