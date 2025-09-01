"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4 shadow">
      <ul className="flex space-x-8 max-w-4xl mx-auto">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/research" className="hover:underline">
            Research
          </Link>
        </li>
        <li>
          <Link href="/publications" className="hover:underline">
            Publications
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
