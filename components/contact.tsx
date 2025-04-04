"use client"

import { Mail, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
          Get in <span className="text-orange-500">Touch</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Have questions or want to connect with ICMYO? Reach out to us through our email or social media channels.
        </p>

        <div className="max-w-3xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex items-center">
                  <Mail className="h-8 w-8 text-orange-500 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 text-lg">Email Us</h3>
                    <a
                      href="mailto:taskforce@icmyo.org"
                      className="text-orange-500 hover:text-orange-600 text-lg font-medium"
                    >
                      taskforce@icmyo.org
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Globe className="h-8 w-8 text-orange-500 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 text-lg">Website</h3>
                    <a
                      href="https://www.icmyo.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:text-orange-600 text-lg font-medium"
                    >
                      www.icmyo.org
                    </a>
                  </div>
                </div>
              </div>


            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

