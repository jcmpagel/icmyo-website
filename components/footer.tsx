"use client"

import { ArrowUp } from "lucide-react"

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">ICMYO</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              International Coordination Meeting of Youth Organizations - uniting and representing the diverse voices of
              youth-led organizations globally since 2004.
            </p>
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} ICMYO. All rights reserved.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Members", "Guidelines", "Task Force", "Updates", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex justify-between items-center">
          <p className="text-sm text-gray-400">Website designed with accessibility and inclusivity in mind.</p>
          <button
            onClick={handleScrollToTop}
            className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}

