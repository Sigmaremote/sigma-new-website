import { Mail, Phone } from 'lucide-react';

export default function MetaBlock() {
  return (
    <div className="mt-12 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-neutral-100 rounded-lg">
          <Mail className="size-5 text-neutral-600" />
        </div>
        <h3 className="font-satoshi text-xl font-semibold text-neutral-900">Media Contact</h3>
      </div>
      
      <div className="space-y-4">
        <p className="font-satoshi text-neutral-700 leading-relaxed">
          For media inquiries, interviews, or press kit requests, please contact our media team:
        </p>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Mail className="size-4 text-neutral-500" />
            <a 
              href="mailto:press@sigmaremote.com" 
              className="font-satoshi text-neutral-900 font-medium hover:text-neutral-700 transition-colors"
            >
              press@sigmaremote.com
            </a>
          </div>
          
          <div className="flex items-center gap-3">
            <Phone className="size-4 text-neutral-500" />
            <span className="font-satoshi text-neutral-700">
              Available for immediate response
            </span>
          </div>
        </div>
        
        <div className="pt-4 border-t border-neutral-100">
          <p className="font-satoshi text-sm text-neutral-600">
            We typically respond to media inquiries within 2-4 hours during business hours.
          </p>
        </div>
      </div>
    </div>
  );
}
