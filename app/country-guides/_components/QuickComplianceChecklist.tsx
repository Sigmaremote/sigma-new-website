import { Check } from 'lucide-react';

interface QuickComplianceChecklistProps {
  complianceBullets: string[];
}

export default function QuickComplianceChecklist({ complianceBullets }: QuickComplianceChecklistProps) {
  return (
    <section id="compliance" className="mb-16">
      <div className="bg-white rounded-2xl border border-black/5 p-8">
        <h2 className="text-2xl font-semibold text-ink-900 mb-6">Compliance Quick Guide</h2>
        <ul className="space-y-4">
          {complianceBullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-2 text-[15px] leading-6 text-black/80">
              <Check className="h-4 w-4 text-black mt-1 flex-shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        
        {/* Disclaimer */}
        <div className="mt-4 pt-3 border-t border-black/10">
          <p className="text-sm text-black/40">
            <strong>Disclaimer:</strong> This information is for general guidance only. 
            Employment laws can change frequently and vary by region. Always consult with 
            local legal experts for personalized advice and the most current regulations.
          </p>
        </div>
      </div>
    </section>
  );
}
