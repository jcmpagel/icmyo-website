import { Card, CardContent } from "@/components/ui/card"

const allMembers = [
  // Regional Youth Platforms
  { name: "Pan African Youth Union", abbreviation: "PYU", type: "Regional Platform", region: "Africa", logo: "/Pan_african_youth.jpg" },
  { name: "European Youth Forum", abbreviation: "YFJ", type: "Regional Platform", region: "Europe", logo: "/europeanyouthforum.png" },
  {
    name: "Asian-Pacific Students and Youth Association",
    abbreviation: "ASA",
    type: "Regional Platform",
    region: "Asia",
    logo: "/asianpacificyouthcouncil.jpeg"
  },
  { name: "Asian Youth Council", abbreviation: "AYC", type: "Regional Platform", region: "Asia", logo: "/asianyouthcouncil.png" },
  { name: "Latin American Youth Forum", abbreviation: "FLAJ", type: "Regional Platform", region: "Latin America", logo: "/placeholder.svg" },
  { name: "Pacific Youth Council", abbreviation: "PYC", type: "Regional Platform", region: "Pacific", logo: "/pacifiyyouthcouncil.jpg" },
  { name: "Caribbean Federation of Youth", abbreviation: "CFY", type: "Regional Platform", region: "Caribbean", logo: "/placeholder.svg" },

  // International NGOs
  { name: "AIESEC", abbreviation: "AIESEC", type: "International NGO", logo: "/AIESEC-New-Logo1.png" },
  { name: "Community of Portuguese Speaking Peoples Youth Forum", abbreviation: "CPLPYF", type: "International NGO", logo: "/Flag_CPLP.svg.png" },
  { name: "Espacio Iberoamericano de Juventud", abbreviation: "EIJ", type: "International NGO", logo: "/placeholder.svg" },
  {
    name: "International Federation of Catholic Parochial Youth Movements",
    abbreviation: "FIMCAP",
    type: "International NGO",
    logo: "/fimcamp.jpeg"
  },
  { name: "Global Young Greens", abbreviation: "GYG", type: "International NGO", logo: "/GYG-solo-green-png.png" },
  { name: "International Trade Union Confederation", abbreviation: "ITUC", type: "International NGO", logo: "/International_Trade_Union_Confederation_(logo).svg.png" },
  { name: "International Federation of Liberal Youth", abbreviation: "IFLRY", type: "International NGO", logo: "/62_IFLRY.png" },
  {
    name: "International Falcon Movement – Socialist Educational International",
    abbreviation: "IFM-SEI",
    type: "International NGO",
    logo: "/ifm-sei.jpeg"
  },
  {
    name: "International Federation of Medical Students' Associations",
    abbreviation: "IFMSA",
    type: "International NGO",
    logo: "/ifmsa_logo.jpeg"
  },
  {
    name: "International Federation of the Red Cross and Red Crescent Societies",
    abbreviation: "IFRC",
    type: "International NGO",
    logo: "/IFRC_logo_2020.svg.png"
  },
  { name: "International Movement of Catholic Students (Pax Romana)", abbreviation: "IMCS", type: "International NGO", logo: "/IMCS.png" },
  { name: "International Pharmaceutical Students' Federation", abbreviation: "IPSF", type: "International NGO", logo: "/ipfs.jpeg" },
  { name: "International Union of Socialist Youth", abbreviation: "IUSY", type: "International NGO", logo: "/66_IUSY.png" },
  { name: "International Young Catholic Students", abbreviation: "IYCS", type: "International NGO", logo: "/IYCS.jpg" },
  { name: "International Young Democrat Union", abbreviation: "IYDU", type: "International NGO", logo: "/IYDU_Logo.png" },
  {
    name: "International Movement of Catholic Rural and Agricultural Youth",
    abbreviation: "MIJARC",
    type: "International NGO",
    logo: "/MIJARC 1 NAME.jpg"
  },
  { name: "World Student Christian Federation", abbreviation: "WSCF", type: "International NGO", logo: "/WSCF.png" },
  { name: "World Federation of Democratic Youth", abbreviation: "WFDY", type: "International NGO", logo: "/World_Federation_of_Democratic_Youth_Logo.png" },
  { name: "World Federation of the Deaf - Youth Section", abbreviation: "WFDYS", type: "International NGO", logo: "/WFDYS.jpeg" },
  { name: "World Esperanto Youth Organization", abbreviation: "TEJO", type: "International NGO", logo: "/TEJO.png" },
  { name: "World Association of Girl Guides and Girl Scouts", abbreviation: "WAGGGS", type: "International NGO", logo: "/WAGGGS.png" },
  { name: "World Organization of the Scout Movement", abbreviation: "WOSM", type: "International NGO", logo: "/WOSM_2024.svg.png" },
  { name: "World Alliance of Young Men's Christian Associations", abbreviation: "YMCA", type: "International NGO", logo: "/YMCA-logo.png" },
  { name: "World Alliance of Young Women's Christian Association", abbreviation: "YWCA", type: "International NGO", logo: "/YWCA_Logo.svg.png" },
  { name: "World Union of Jewish Students", abbreviation: "WUJS", type: "International NGO", logo: "/WUJS.png" },
]

export default function Members() {
  // Sort members alphabetically by name
  const sortedMembers = [...allMembers].sort((a, b) => a.name.localeCompare(b.name));
  
  return (
    <section id="members" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Our <span className="text-orange-500">Member Organizations</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          ICMYO brings together regional youth platforms and international youth-led organizations to coordinate global
          youth advocacy efforts.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedMembers.map((org) => (
            <Card key={org.abbreviation} className="overflow-hidden transition-all duration-300 hover:shadow-md h-full">
              <CardContent className="p-0">
                <div className="p-4 bg-gray-50 border-b flex justify-center">
                  <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center shadow-sm p-2">
                    <img
                      src={org.logo || `/placeholder.svg?text=${org.abbreviation}`}
                      alt={`${org.name} logo`}
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-gray-800">{org.name}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs font-medium px-2 py-1 bg-orange-100 text-orange-800 rounded-full">
                      {org.abbreviation}
                    </span>
                    <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                      {org.type}
                    </span>
                    {org.region && (
                      <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-800 rounded-full">
                        {org.region}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}