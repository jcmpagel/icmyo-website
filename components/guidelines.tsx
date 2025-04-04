import { FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function Guidelines() {
  return (
    <section id="guidelines" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            ICMYO <span className="text-orange-500">Guidelines</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Core Principles</h3>
              <ul className="space-y-4">
                {[
                  "Representing diverse voices of youth-led organizations globally",
                  "Promoting cooperation among youth-led organizations at regional and global levels",
                  "Coordinating political inputs to global youth policy processes",
                  "Achieving full partnerships between youth organizations and relevant stakeholders",
                  "Maintaining an inclusive and accessible platform for all youth organizations",
                ].map((principle, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center mr-3 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{principle}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link href="/ICMYO guidelines (2013)_updated.pdf" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Download className="mr-2 h-4 w-4" /> Download Full Guidelines
                  </Button>
                </Link>
              </div>
            </div>

            <div>
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <FileText className="h-8 w-8 text-orange-500 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-800">Charter Highlights</h3>
                  </div>

                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>Membership Structure:</strong> ICMYO consists of Regional Youth Platforms and
                      International Non-Governmental Youth Organizations.
                    </p>
                    <p>
                      <strong>Governance:</strong> The network meets annually, organized by a task force elected by
                      members the previous year.
                    </p>
                    <p>
                      <strong>Decision Making:</strong> ICMYO operates on consensus-based decision making, ensuring all
                      member voices are heard and respected.
                    </p>
                    <p>
                      <strong>Representation:</strong> ICMYO represents youth organizations in global forums,
                      particularly in UN processes and international policy discussions.
                    </p>
                    <p>
                      <strong>Coordination:</strong> The network facilitates coordination among youth organizations to
                      strengthen collective advocacy efforts.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}