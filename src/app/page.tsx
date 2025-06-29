import { useTRPC } from "@/trpc/client"

export default function Page() {
  const trpc = useTRPC();
  trpc.hello.queryKey({ text: 123 })
  return (
    <div>
      Hello world
    </div>
  )
}