'use client';

import { TestimonialCarousel } from "@/components/ui/testimonial"

const TESTIMONIAL_DATA = [
  {
    id: 1,
    name: "Sergio de la Zerda",
    role: "Founder",
    company: "FoundersCFO",
    avatar: "/landing-page-images/Testemonials part/Sergio De La Zara.jpeg",
    description: "Many of our startup clients want to nearshore talent but worry about compliance. Sigma handles it all, making it ideal for busy founders hiring in Latam for the first time."
  },
  {
    id: 2,
    name: "Sofía Álvarez",
    role: "HR Lead",
    company: "Nortech",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80",
    description: "Sigma made paying our LATAM contractors straightforward. The USD wallet removed FX guesswork and support via mobile is quick."
  },
  {
    id: 3,
    name: "Daniel Okoye",
    role: "Founder",
    company: "FieldSquare",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80",
    description: "We switched from Payoneer to Sigma for the simpler pricing. Onboarding was fast and our first payroll ran without issues."
  }
]

export default function TestimonialsCarousel() {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 font-satoshi tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg text-black/60 max-w-2xl mx-auto">
            Join hundreds of companies using Sigma to build their teams across Latin America
          </p>
        </div>
        
        <TestimonialCarousel 
          testimonials={TESTIMONIAL_DATA}
          className="max-w-2xl mx-auto"
        />
      </div>
    </section>
  )
}

