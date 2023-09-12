"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ACTIVE_ROUTE = "py-1 px-2 text-gray-300 bg-gray-700";
const INACTIVE_ROUTE =
  "py-1 px-2 text-gray-500 hover:text-gray-300 hover:bg-gray-700";
function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {session?.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign In</button>
    </>
  );
}

export default function NavMenu() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col">
      <AuthButton />
      <hr className="my-4" />
      <Link
        className={pathname === "/" ? ACTIVE_ROUTE : INACTIVE_ROUTE}
        href={"/"}
      >
        Home
      </Link>
      <Link
        className={pathname === "/protected" ? ACTIVE_ROUTE : INACTIVE_ROUTE}
        href={"/protected"}
      >
        Protected
      </Link>
      <Link
        className={pathname === "/serveraction" ? ACTIVE_ROUTE : INACTIVE_ROUTE}
        href={"/serveraction"}
      >
        Server Action
      </Link>
      <Link
        className={
          pathname === "/apiFromClient" ? ACTIVE_ROUTE : INACTIVE_ROUTE
        }
        href={"/apiFromClient"}
      >
        Client API
      </Link>
    </div>
  );
}
