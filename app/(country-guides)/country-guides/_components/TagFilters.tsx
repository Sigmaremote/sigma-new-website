'use client';

interface TagFiltersProps {
  selectedTags: string[];
  onTagsChange: (tags: string[]) => void;
}

const availableTags = [
  'Low cost',
  'USD wallet friendly', 
  'Crypto-friendly',
  'Fast onboarding'
];

export default function TagFilters({ selectedTags, onTagsChange }: TagFiltersProps) {
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagsChange(selectedTags.filter(t => t !== tag));
    } else {
      onTagsChange([...selectedTags, tag]);
    }
  };

  return (
    <div className="inline-flex gap-2 flex-wrap">
      {availableTags.map((tag) => (
        <button
          key={tag}
          onClick={() => toggleTag(tag)}
          data-active={selectedTags.includes(tag)}
          className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm hover:bg-black/5 data-[active=true]:bg-black/90 data-[active=true]:text-white transition-colors duration-200"
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
