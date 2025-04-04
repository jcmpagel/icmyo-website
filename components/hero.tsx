"use client"

import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const handleScrollDown = () => {
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-90"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            International Coordination Meeting of Youth Organizations
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10">
            Uniting and representing the diverse voices of youth-led organizations globally
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={handleScrollDown}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-md text-lg"
            >
              Get Involved
            </Button>

            <Button
              variant="outline"
              onClick={handleScrollDown}
              className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-6 rounded-md text-lg"
            >
              Learn More <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}