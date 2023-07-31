import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getAuthSession } from "@/lib/auth";
import SignInBtn from "./sign-in-btn";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SignOutBtn from "./sign-out-btn";
import Link from "next/link";

export default async function Navbar() {
  const session = await getAuthSession();

  return (
    <nav className="flex justify-between items-center py-2 px-4 sm:px-16 border-b">
      <h3 className="font-semibold text-lg tracking-tight">LiveCode247</h3>
      {session ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage
                src={session.user.image || ""}
                alt={session.user.name || ""}
              />
              <AvatarFallback>
                {session.user.name
                  ?.split(" ")
                  .map((word) => word[0].toUpperCase())
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <span className="font-semibold">{session.user.name}</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href="/billing">
              <DropdownMenuItem className="cursor-pointer">
                Billing
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem>
              <SignOutBtn className="w-full" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <SignInBtn />
      )}
    </nav>
  );
}
