import { Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Mail className="mx-auto mb-4 h-12 w-12" />
          <h2 className="mb-2 text-3xl font-bold tracking-tight">Subscribe to Our Newsletter</h2>
          <p className="mb-6">Get the latest travel deals, tips, and inspiration delivered to your inbox</p>
          <form className="flex flex-col gap-2 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-primary-foreground text-primary"
              required
            />
            <Button variant="secondary" type="submit">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

