import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/SEO"

export default function IndexPage() {
  return (
    <>
      <SEO 
        title="ЭлектроМобиль"
        pathname="/"  
      />
      <Header />
      <main className="main">
        HEY
      </main>
      <Footer />
    </>
  )
}