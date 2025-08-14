import { useQuery } from '@tanstack/react-query';

export const useHeroContent = () => {
  return useQuery({
    queryKey: ['banner-content'],
    queryFn: async () => {
      const res = await fetch('https://mittos.apxfarms.com/mittosApi/banners');
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      console.log(data,"data")
      return data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    // initialData, // 👈 use static fallback
  });
};
