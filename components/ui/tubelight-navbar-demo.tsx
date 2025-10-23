"use client"

import { Home, DollarSign, Users, FileText, MapPinned, BookOpen, Newspaper, MessageCircle } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function TubelightNavBarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Pricing', url: '/pricing', icon: DollarSign },
    { name: 'About', url: '/about', icon: Users },
    { name: 'Country Guides', url: '/country-guides', icon: MapPinned },
    { name: 'Blog', url: '/blog', icon: BookOpen },
    { name: 'Press', url: '/press', icon: Newspaper },
    { name: 'Glossary', url: '/glossary', icon: FileText },
    { name: 'Contact', url: '/contact', icon: MessageCircle }
  ]

  return <NavBar items={navItems} />
}
