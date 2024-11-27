import { ReactNode } from "react";

export default function PrivateLayout({ children }: { children: ReactNode}){
  return(
    <>
      <header></header>
      <main>{ children }</main>
    </>
  )
}