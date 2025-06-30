"use client";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client"
import { useMutation } from "@tanstack/react-query";

export default function Page() {
  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions({}));
  return (
    <div className="p-6 max-w-4xl">
      <Button disabled={invoke.isPending} onClick={() => invoke.mutate({msg: "Sid"})}>
        Invoke Background job
      </Button>
    </div>
  )
}