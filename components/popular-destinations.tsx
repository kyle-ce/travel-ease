import Image from "next/image"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"

export function PopularDestinations() {
  const destinations = [
    {
      name: "Paris, France",
      image: "/placeholder.svg?height=400&width=600",
      description: "The City of Light awaits with its iconic landmarks and charming streets.",
      price: "$599",
    },
    {
      name: "Bali, Indonesia",
      image: "/placeholder.svg?height=400&width=600",
      description: "Experience paradise on earth with stunning beaches and lush landscapes.",
      price: "$799",
    },
    {
      name: "Tokyo, Japan",
      image: "/placeholder.svg?height=400&width=600",
      description: "Immerse yourself in the perfect blend of tradition and innovation.",
      price: "$899",
    },
    {
      name: "Santorini, Greece",
      image: "/placeholder.svg?height=400&width=600",
      description: "Discover whitewashed buildings and breathtaking sunsets over the Aegean Sea.",
      price: "$749",
    },
  ]

  return (
    <section className="container py-12 md:py-16">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-3xl font-bold tracking-tight">Popular Destinations</h2>
        <p className="text-muted-foreground">Discover our most sought-after vacation spots</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {destinations.map((destination) => (
          <Link href="#" key={destination.name} className="group">
            <Card className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="mb-1 text-lg font-semibold">{destination.name}</h3>
                <p className="mb-3 text-sm text-muted-foreground line-clamp-2">{destination.description}</p>
                <p className="font-medium text-primary">From {destination.price}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

