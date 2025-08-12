import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
export default function Home(){
  return(
    <div className="min-h-screen bg-background">
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}