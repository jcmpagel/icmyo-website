"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to homepage after 3 seconds
    const timer = setTimeout(() => {
      router.push("/")
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className="space-y-6 max-w-lg">
        <h1 className="text-6xl font-bold tracking-tighter">404</h1>
        <h2 className="text-3xl font-semibold">Page not found</h2>
        <p className="text-muted-foreground">
          The page you're looking for doesn't exist or has been moved to a different location.
        </p>
        <p className="text-sm text-muted-foreground">
          Redirecting to homepage in 3 seconds...
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild variant="default">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go to Home Now
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}