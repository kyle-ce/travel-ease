import { CalendarDays, MapPin, Star, Users } from "lucide-react"
import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function TravelDeals() {
  const deals = [
    {
      title: "All-Inclusive Resort in Cancun",
      location: "Cancun, Mexico",
      image: "/placeholder.svg?height=400&width=600",
      duration: "7 nights",
      people: "2 adults",
      rating: 4.8,
      reviews: 246,
      originalPrice: "$1,899",
      currentPrice: "$1,299",
      discount: "30% OFF",
    },
    {
      title: "European Adventure Package",
      location: "Multiple Cities, Europe",
      image: "/placeholder.svg?height=400&width=600",
      duration: "10 nights",
      people: "2 adults",
      rating: 4.7,
      reviews: 189,
      originalPrice: "$2,499",
      currentPrice: "$1,899",
      discount: "25% OFF",
    },
    {
      title: "Luxury Safari Experience",
      location: "Serengeti, Tanzania",
      image: "/placeholder.svg?height=400&width=600",
      duration: "5 nights",
      people: "2 adults",
      rating: 4.9,
      reviews: 112,
      originalPrice: "$3,299",
      currentPrice: "$2,799",
      discount: "15% OFF",
    },
  ]

  return (
    <section className="bg-muted/50 py-12 md:py-16">
      <div className="container">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight">Hot Deals</h2>
          <p className="text-muted-foreground">Limited-time offers on amazing vacations</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {deals.map((deal) => (
            <Card key={deal.title} className="overflow-hidden">
              <div className="relative">
                <Badge className="absolute right-2 top-2 z-10">{deal.discount}</Badge>
                <Image
                  src={deal.image || "/placeholder.svg"}
                  alt={deal.title}
                  width={600}
                  height={400}
                  className="h-48 w-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="mb-1 text-lg font-semibold">{deal.title}</h3>
                <div className="mb-3 flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-1 h-4 w-4" />
                  {deal.location}
                </div>
                <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center">
                    <CalendarDays className="mr-1 h-4 w-4 text-muted-foreground" />
                    {deal.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-1 h-4 w-4 text-muted-foreground" />
                    {deal.people}
                  </div>
                  <div className="flex items-center">
                    <Star className="mr-1 h-4 w-4 text-amber-500 fill-amber-500" />
                    <span>{deal.rating}</span>
                    <span className="ml-1 text-muted-foreground">({deal.reviews})</span>
                  </div>
                </div>
                <div className="mb-4 flex items-center">
                  <span className="text-lg font-bold text-primary">{deal.currentPrice}</span>
                  <span className="ml-2 text-sm text-muted-foreground line-through">{deal.originalPrice}</span>
                  <span className="ml-2 text-xs text-muted-foreground">per person</span>
                </div>
                <Button className="w-full">View Deal</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" size="lg">
            View All Deals
          </Button>
        </div>
      </div>
    </section>
  )
}

