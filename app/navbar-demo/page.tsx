import { TubelightNavBarDemo } from "@/components/ui/tubelight-navbar-demo"

// Force dynamic rendering since we use client components
export const dynamic = 'force-dynamic';

export default function NavbarDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Demo content to show the navbar in context */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Tubelight Navbar Demo
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            This is a demonstration of the tubelight navbar component with your custom navigation items. 
            The navbar is positioned at the bottom on mobile and top on desktop.
          </p>
        </div>

        {/* Sample content sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Sample Section {i}
              </h3>
              <p className="text-slate-600">
                This is sample content to demonstrate how the navbar works with page content. 
                Try scrolling and clicking on different navigation items.
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Navigation Features
          </h2>
          <ul className="text-slate-600 space-y-2 max-w-md mx-auto">
            <li>• Responsive design (bottom on mobile, top on desktop)</li>
            <li>• Smooth animations with Framer Motion</li>
            <li>• Active state with tubelight effect</li>
            <li>• Icons for mobile view</li>
            <li>• Backdrop blur and glass morphism</li>
          </ul>
        </div>
      </div>

      {/* The navbar component */}
      <TubelightNavBarDemo />
    </div>
  )
}
