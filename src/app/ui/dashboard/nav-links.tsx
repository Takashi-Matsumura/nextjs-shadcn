"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  CalendarDaysIcon,
  UsersIcon,
  QrCodeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Schedules",
    href: "/dashboard/schedule",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "Calendar",
    href: "/dashboard/calendar",
    icon: CalendarDaysIcon,
  },
  { name: "Customers", href: "/dashboard/customer", icon: UserGroupIcon },
  { name: "Helpers", href: "/dashboard/employee", icon: UserGroupIcon },
  {
    name: "Users",
    href: "/dashboard/user",
    icon: UsersIcon,
  },
  {
    name: "Roles",
    href: "/dashboard/role",
    icon: UsersIcon,
  },
  { name: "QR Code", href: "/dashboard/qr-code", icon: QrCodeIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
