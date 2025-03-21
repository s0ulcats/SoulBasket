'use client'

import { useSidebar } from "@/hooks/useSidebar"
import { cn } from "@/utils/tw-merge"
import SidebarHeader from "./SidebarHeader"
import { usePathname } from "next/navigation"
import UserNav from "./UserNav"

export default function Sidebar() {
  const { isCollapsed } = useSidebar()

  const pathname = usePathname()

  return (
    <aside className={cn('fixed left-0 z-50 mt-[75px] flex h-full flex-col border-r border-border bg-card transition-all duration-100 ease-in-out', isCollapsed ? 'w-16' : 'w-64')}>
      <SidebarHeader />
      {<UserNav />}
    </aside>
  )
}
