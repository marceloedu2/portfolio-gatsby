import React from "react"
import GlobalStyle from "../styles/global"
import loadable from "@loadable/component"

export default function Home() {
  const Preview = loadable(() => import("../components/Preview"))
  const Introduction = loadable(() => import("../components/Introduction"))
  const NavBar = loadable(() => import("../components/NavBar"))
  const Skills = loadable(() => import("../components/Skills"))
  const Works = loadable(() => import("../components/Works"))
  const Footer = loadable(() => import("../components/Footer"))

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Preview />
      <Introduction />
      {/*<Skills />*/}
      <Works />
      <Footer />
    </>
  )
}
