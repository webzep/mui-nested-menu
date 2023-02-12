import { useEffect, useState } from 'react';

enum QueryMap {
    prefersDark = '(prefers-color-scheme: dark)',
}

type Queries = keyof typeof QueryMap;

export const useMediaQuery = (query: Queries): boolean => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(QueryMap[query]);
        const handleChange = () => setMatches(mediaQuery.matches);
        mediaQuery.addEventListener('change', handleChange);
        setMatches(mediaQuery.matches);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [query]);

    return matches;
};
