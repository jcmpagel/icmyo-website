import { Calendar, Users, Globe, Activity } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const updates = [
  {
    title: "UN Youth Strategy - Youth2030: Global Briefing for Youth Networks",
    date: "June 17, 2025",
    excerpt:
      "Join the UN Youth Office and youth partners for an online briefing on Youth2030 Phase 2 (2025-2030). Learn about the strategy, share perspectives, and explore how to engage and amplify youth action.",
    category: "Current Event",
    icon: Users,
    link: "https://tinyurl.com/youth2030-phase2"
  },
  {
    title: "80th Session of the UN General Assembly (UNGA 80)",
    date: "September 9-23, 2025",
    excerpt:
      "ICMYO will participate in the 80th session of the UN General Assembly to present youth perspectives. The high-level General Debate begins on September 23, providing a platform for youth representation at the UN.",
    category: "Upcoming Event",
    icon: Globe,
    link: "https://documents-dds-ny.un.org/doc/UNDOC/GEN/N22/236/53/PDF/N2223653.pdf?OpenElement"
  },
  {
    title: "ECOSOC Youth Forum 2025",
    date: "April 15-17, 2025",
    excerpt:
      "ICMYO is co-convening the ECOSOC Youth Forum at UN Headquarters in New York, focusing on sustainable, inclusive, science- and evidence-based solutions for the 2030 Agenda.",
    category: "Past Event",
    icon: Activity,
    link: "https://ecosoc.un.org/en/what-we-do/ecosoc-youth-forum/about-youth-forum/ecosoc-youth-forum-2025"
  },
  {
    title: "High-Level Political Forum 2025",
    date: "July 14-23, 2025",
    excerpt:
      "ICMYO will participate in the HLPF under the ECOSOC, reviewing SDGs 3, 5, 8, 14, and 17, with 37 countries presenting voluntary national reviews.",
    category: "Upcoming Event",
    icon: Globe,
    link: "https://hlpf.un.org/2025"
  },
  {
    title: "Annual Meeting 2025",
    date: "November 2025",
    excerpt:
      "The next ICMYO Annual Meeting is scheduled for November 2025. Exact dates and location will be announced soon. Stay tuned for registration details.",
    category: "Upcoming Event",
    icon: Calendar,
  },
]

export default function Updates() {
  return (
    <section id="updates" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          What's <span className="text-orange-500">Happening Now</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Stay updated with the latest news, events, and initiatives from ICMYO and our member organizations.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {updates.map((update, index) => {
            const Icon = update.icon

            return (
              <Card key={index} className="overflow-hidden h-full flex flex-col">
                <div className="h-3 bg-orange-500"></div>
                <CardContent className="p-6 flex-grow">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                      <Icon className="h-5 w-5 text-orange-500" />
                    </div>
                    <span className="text-sm font-medium px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                      {update.category}
                    </span>
                  </div>

                  <h3 className="font-semibold text-xl mb-3 text-gray-800">{update.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{update.date}</p>
                  <p className="text-gray-700">{update.excerpt}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-orange-500 hover:text-orange-600"
                    asChild={!!update.link}
                  >
                    {update.link ? (
                      <a href={update.link} target="_blank" rel="noopener noreferrer">
                        Read more →
                      </a>
                    ) : (
                      <>Read more →</>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>


      </div>
    </section>
  )
}