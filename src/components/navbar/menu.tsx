'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'

import { cn } from "@/lib/utils"
import { menuItems } from "@/lib/menu-items"

export function Menu({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const initPath = "/" + pathname?.split("/")[1];
  return (
    <nav
      className={cn("flex items-center space-x-2 lg:space-x-4", className)}
      {...props}
    >
      {menuItems.map((item) => (
        <Link
          key={item.link}
          href={item.link}
          className={`${initPath !== item.link ? "text-muted-foreground" : "text-primary"} py-1 px-2 rounded text-sm font-medium transition-colors hover:text-primary`}
        >
          {item.nome}
        </Link>
      ))}
    </nav>
  )
}
// text-muted-foreground 
