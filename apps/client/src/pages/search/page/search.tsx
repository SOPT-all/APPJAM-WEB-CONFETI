import * as styles from './search.css';
import { SearchBar, Spacing, Footer } from '@confeti/design-system';
import NoticeSection from '@pages/search/components/notice-section';
import ArtistSection from '@pages/search/components/artist-section';
import PerformanceSection from '@pages/search/components/performance-section';
import PerformanceCount from '@pages/search/components/performance-count-section';
import { useSearchLogic } from '../hooks/use-search-logic';
import { useSearchPerformances } from '../hooks/use-search-data';
import { useInfiniteScroll } from '@shared/utils/use-infinite-scroll';

const Search = () => {
  const {
    artistData,
    paramsKeyword,
    barFocus,
    handleOnChange,
    handleKeydown,
    handleOnFocus,
    handleOnBlur,
  } = useSearchLogic();

  const artistId = artistData[0]?.artistId || '';
  const { performances, performanceCount, fetchNextPage, hasNextPage } =
    useSearchPerformances({
      artistId,
      enabled: !!artistId,
    });

  const observerRef = useInfiniteScroll(hasNextPage, fetchNextPage);

  return (
    <>
      <SearchBar
        onChange={handleOnChange}
        onKeyDown={handleKeydown}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      {!barFocus && paramsKeyword.length > 0 && (
        <>
          <main className={styles.resultSection}>
            <NoticeSection
              isMultipleArtists={artistData[0]?.isMultipleArtists}
            />
            <ArtistSection artist={artistData} />
            <Spacing />
            <PerformanceCount count={performanceCount} />
            <PerformanceSection performances={performances} />
            {hasNextPage && (
              <div ref={observerRef} style={{ height: '2rem' }} />
            )}
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Search;
