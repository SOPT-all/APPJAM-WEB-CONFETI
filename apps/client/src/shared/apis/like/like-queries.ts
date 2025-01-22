export const LIKE_QUERY_KEY = {
  ALL: ['like'],
  LIKE_ARTIST: (artistId: string) => [
    ...LIKE_QUERY_KEY.ALL,
    'artist',
    artistId,
  ],
  LIKE_FESTIVAL: (festivalId: number) => [
    ...LIKE_QUERY_KEY.ALL,
    'festival',
    festivalId,
  ],
  LIKE_CONCERT: (concertId: number) => [
    ...LIKE_QUERY_KEY.ALL,
    'concert',
    concertId,
  ],
} as const;
