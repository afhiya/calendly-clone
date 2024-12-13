"use client"
import { Moon } from "lucide-react";
import { Toggle } from "./ui/toggle";

export function ToggleDarkMode() {
  return (
    <Toggle onClick={() => document.documentElement.classList.toggle("dark")} >
      <Moon  />
    </Toggle>
  )
}