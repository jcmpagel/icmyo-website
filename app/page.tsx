import Hero from "@/components/hero"
import About from "@/components/about"
import Members from "@/components/members"
import Guidelines from "@/components/guidelines"
import TaskForce from "@/components/task-force"
import Updates from "@/components/updates"
import Contact from "@/components/contact"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Members />
      <Guidelines />
      <TaskForce />
      <Updates />
      <Contact />
      <Footer />
    </main>
  )
}

