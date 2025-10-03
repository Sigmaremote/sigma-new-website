// Helper functions for formatting and data manipulation

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-US').format(num);
};

export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
};

export const formatRegion = (region: string): string => {
  return region.charAt(0).toUpperCase() + region.slice(1);
};

export const getRegionColor = (region: string): string => {
  const colors: Record<string, string> = {
    'North America': 'bg-blue-100 text-blue-800',
    'South America': 'bg-green-100 text-green-800',
    'Europe': 'bg-purple-100 text-purple-800',
    'Asia': 'bg-orange-100 text-orange-800',
    'Africa': 'bg-yellow-100 text-yellow-800',
    'Oceania': 'bg-cyan-100 text-cyan-800',
    'Middle East': 'bg-red-100 text-red-800',
  };
  return colors[region] || 'bg-gray-100 text-gray-800';
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
