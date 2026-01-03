"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="mb-8 border-b border-gray-200 dark:border-gray-700">
      <div className="flex gap-8">
        <Link
          href="/"
          className={`pb-4 px-1 font-medium transition-colors ${
            pathname === "/"
              ? "border-b-2 border-black dark:border-white text-black dark:text-white"
              : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
          }`}
        >
          About Me
        </Link>
        <Link
          href="/blog"
          className={`pb-4 px-1 font-medium transition-colors ${
            pathname === "/blog"
              ? "border-b-2 border-black dark:border-white text-black dark:text-white"
              : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
          }`}
        >
          Sports Analytics
        </Link>
      </div>
    </nav>
  );
}
