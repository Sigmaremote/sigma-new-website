export function QuoteSmall({children}:{children:React.ReactNode}) {
  return (
    <blockquote className="my-6 border-l-2 border-lime-400 pl-4 italic text-[18px] leading-8 text-gray-700">
      {children}
    </blockquote>
  );
}
