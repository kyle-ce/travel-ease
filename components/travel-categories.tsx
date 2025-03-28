import { Compass, Palmtree, Mountain, Building, Utensils, Tent } from "lucide-react"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"

export function TravelCategories() {
  const categories = [
    {
      title: "Beach Vacations",
      icon: <Palmtree className="h-8 w-8" />,
      description: "Relax on pristine beaches with crystal clear waters",
    },
    {
      title: "Adventure Travel",
      icon: <Mountain className="h-8 w-8" />,
      description: "Thrilling experiences for the adventurous traveler",
    },
    {
      title: "City Breaks",
      icon: <Building className="h-8 w-8" />,
      description: "Explore vibrant cities and cultural hotspots",
    },
    {
      title: "Food & Culinary",
      icon: <Utensils className="h-8 w-8" />,
      description: "Savor local cuisines and gastronomic delights",
    },
    {
      title: "Eco Tourism",
      icon: <Tent className="h-8 w-8" />,
      description: "Sustainable travel experiences in nature",
    },
    {
      title: "Cruises",
      icon: <Compass className="h-8 w-8" />,
      description: "Set sail on unforgettable ocean adventures",
    },
  ]

  return (
    <section className="container py-12 md:py-16">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-3xl font-bold tracking-tight">Explore by Category</h2>
        <p className="text-muted-foreground">Find the perfect vacation style for you</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link href="#" key={category.title}>
            <Card className="h-full transition-all hover:shadow-md">
              <CardContent className="flex h-full flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">{category.icon}</div>
                <h3 className="mb-2 text-lg font-semibold">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

