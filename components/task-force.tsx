import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Linkedin } from "lucide-react"

const taskForceMembers = [
  {
    name: "Gava",
    role: "Task Force Member",
    organization: "The International Pharmaceutical Students' Federation (IPSF)",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      instagram: "https://instagram.com/ipsf_official",
      linkedin: "https://linkedin.com/company/ipsf"
    }
  },
  {
    name: "Jonathan Pagel",
    role: "Task Force Member",
    organization: "International Young Catholic Students (IYCS-JECI)",
    image: "/Molina.jpg?height=300&width=300",
    social: {
      instagram: "https://instagram.com/iycs_jeci",
      linkedin: "https://linkedin.com/company/iycs-jeci"
    }
  },
  {
    name: "Kinga",
    role: "Task Force Member",
    organization: "World Organization of the Scout Movement (WOSM)",
    image: "/Kinga.jpg?height=300&width=300",
    social: {
      instagram: "https://instagram.com/worldscouting",
      linkedin: "https://linkedin.com/company/world-organization-of-the-scout-movement"
    }
  },
  {
    name: "Lucia",
    role: "Task Force Member",
    organization: "International Federation of Medical Students' Associations (IFMSA)",
    image: "/placeholder.svg?height=300&width=300",
    social: {
      instagram: "https://instagram.com/ifmsa",
      linkedin: "https://linkedin.com/company/ifmsa"
    }
  },
  {
    name: "Suman Ghale",
    role: "Task Force Member",
    organization: "International Movement of Catholic Students (IMCS-MIEC)",
    image: "/Suman.jpg?height=300&width=300",
    social: {
      instagram: "https://instagram.com/imcs_miec",
      linkedin: "https://linkedin.com/company/imcs-miec"
    }
  },
]

export default function TaskForce() {
  return (
    <section id="task-force" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          ICMYO <span className="text-orange-500">Task Force</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Our Task Force is elected annually and is responsible for coordinating ICMYO activities, representing the
          network, and organizing the annual meeting.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {taskForceMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden h-full">
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg text-gray-800">{member.name}</h3>
                <p className="text-orange-500 font-medium text-sm mb-1">{member.role}</p>
                <p className="text-gray-600 text-sm mb-3">{member.organization}</p>
                <div className="flex space-x-3 mt-2">
                  <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}