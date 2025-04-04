import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            About <span className="text-orange-500">ICMYO</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                The International Coordination Meeting of Youth Organizations (ICMYO) is an international network for
                the world's largest youth movements and regional youth platforms. Founded officially in 2004, and
                further strengthened in 2013, ICMYO serves as a global coordination platform for international youth-led
                and youth-serving organizations.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                ICMYO works in close cooperation with United Nations entities and represents a collective youth voice at
                the global level, providing a platform for coordination and cooperation to have a stronger influence on
                global youth policy processes.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Main Objectives:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>To represent the diverse voices of youth-led organizations globally</li>
                  <li>Cooperation among youth-led organizations at regional and global levels</li>
                  <li>Coordination of political inputs to global youth policy</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Our Mission</h3>
              <p className="text-lg text-gray-700 mb-6 italic">
                "To unite and represent the diverse voices of youth-led organizations globally, by providing a platform
                for coordination and cooperation in order to have a stronger influence on global youth policy processes
                and to achieve full partnerships between youth organizations and relevant stakeholders."
              </p>
              <p className="text-gray-700">
                Currently, the network meets once a year in an annual meeting which is organized by a task force elected
                the year before by the members.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

