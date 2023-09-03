import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function RootPage() {
  return (
    <div>
      This is a protected route. <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
}
