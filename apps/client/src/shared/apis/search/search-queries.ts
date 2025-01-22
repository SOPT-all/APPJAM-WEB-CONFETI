import { queryOptions } from '@tanstack/react-query';
import { getArtistSearch } from './search';

export const SEARCH_ARTIST_QUERY_KEY = {
  ALL: ['artist'],
  SEARCH_ARTIST: () => [...SEARCH_ARTIST_QUERY_KEY.ALL, 'search'],
} as const;

export const SEARCH_ARTIST_QUERY_OPTION = {
  ALL: () => queryOptions({ queryKey: SEARCH_ARTIST_QUERY_KEY.ALL }),
  SEARCH_ARTIST: (keyword: string, enabled: boolean) => ({
    queryKey: SEARCH_ARTIST_QUERY_KEY.SEARCH_ARTIST(),
    queryFn: () => getArtistSearch(keyword),
    enabled,
  }),
};
