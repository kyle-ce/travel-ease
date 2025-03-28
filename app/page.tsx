import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DatePickerWithRange } from "@/components/date-range-picker"
import { PopularDestinations } from "@/components/popular-destinations"
import { TravelDeals } from "@/components/travel-deals"
import { TravelCategories } from "@/components/travel-categories"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">TravelEase</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                Flights
              </Link>
              <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                Hotels
              </Link>
              <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                Car Rentals
              </Link>
              <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
                Packages
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm">Register</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Travel destination"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 text-white">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Discover Your Perfect Getaway
              </h1>
              <p className="mb-8 text-lg">Find and book your dream vacation with ease</p>
              <Card className="bg-white/95 backdrop-blur">
                <CardContent className="p-4 md:p-6">
                  <Tabs defaultValue="flights" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="flights">Flights</TabsTrigger>
                      <TabsTrigger value="hotels">Hotels</TabsTrigger>
                      <TabsTrigger value="cars">Car Rentals</TabsTrigger>
                      <TabsTrigger value="packages">Packages</TabsTrigger>
                    </TabsList>
                    <TabsContent value="flights" className="mt-4">
                      <div className="grid gap-4 md:grid-cols-4">
                        <div className="md:col-span-2">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="mb-2 block text-sm font-medium text-gray-900">From</label>
                              <Input placeholder="City or Airport" />
                            </div>
                            <div>
                              <label className="mb-2 block text-sm font-medium text-gray-900">To</label>
                              <Input placeholder="City or Airport" />
                            </div>
                          </div>
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium text-gray-900">Dates</label>
                          <DatePickerWithRange />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium text-gray-900">Travelers</label>
                          <Input placeholder="1 Adult" />
                        </div>
                      </div>
                      <Button className="mt-4 w-full">
                        <Search className="mr-2 h-4 w-4" />
                        Search Flights
                      </Button>
                    </TabsContent>
                    <TabsContent value="hotels" className="mt-4">
                      <div className="grid gap-4 md:grid-cols-4">
                        <div className="md:col-span-2">
                          <label className="mb-2 block text-sm font-medium text-gray-900">Destination</label>
                          <Input placeholder="City or Property" />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium text-gray-900">Dates</label>
                          <DatePickerWithRange />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium text-gray-900">Guests</label>
                          <Input placeholder="2 Guests, 1 Room" />
                        </div>
                      </div>
                      <Button className="mt-4 w-full">
                        <Search className="mr-2 h-4 w-4" />
                        Search Hotels
                      </Button>
                    </TabsContent>
                    <TabsContent value="cars" className="mt-4">
                      <div className="grid gap-4 md:grid-cols-4">
                        <div className="md:col-span-2">
                          <label className="mb-2 block text-sm font-medium text-gray-900">Pick-up Location</label>
                          <Input placeholder="City or Airport" />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium text-gray-900">Dates</label>
                          <DatePickerWithRange />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium text-gray-900">Car Type</label>
                          <Input placeholder="Economy" />
                        </div>
                      </div>
                      <Button className="mt-4 w-full">
                        <Search className="mr-2 h-4 w-4" />
                        Search Cars
                      </Button>
                    </TabsContent>
                    <TabsContent value="packages" className="mt-4">
                      <div className="grid gap-4 md:grid-cols-4">
                        <div className="md:col-span-2">
                          <label className="mb-2 block text-sm font-medium text-gray-900">Destination</label>
                          <Input placeholder="City or Region" />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium text-gray-900">Dates</label>
                          <DatePickerWithRange />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-medium text-gray-900">Travelers</label>
                          <Input placeholder="2 Adults" />
                        </div>
                      </div>
                      <Button className="mt-4 w-full">
                        <Search className="mr-2 h-4 w-4" />
                        Search Packages
                      </Button>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <PopularDestinations />
        <TravelDeals />
        <TravelCategories />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

