import { NavLink } from "@/components/NavLink";
import { Toggle } from "@/components/ui/toggle";
import { UserButton } from "@clerk/nextjs";
import { CalendarRange, Lightbulb } from "lucide-react";
import { ReactNode } from "react";

export default function PrivateLayout({ children }: { children: ReactNode}){
  return(
    <>
      <header className="flex py-2 border-b bg-card ">
        <nav className="font-medium flex items-center justify-between text-sm gap-6 container">
          <div className="flex items-center gap-2 font-semibold">
            <CalendarRange className="size-6" />
            <span className="sr-only md:not-sr-only">Calendar</span>
          </div>
          <div className="flex flex-row gap-4">
          <NavLink href="/events">Events</NavLink>
          <NavLink href="/schedule">Schedule</NavLink>
          </div>
          <div className="h-10 flex items-center gap-2">
            <Toggle ><Lightbulb/></Toggle>
            <UserButton/>
          </div>
        </nav>
      </header>
      <main className="container mx-auto my-6">{ children }</main>
    </>
  )
}