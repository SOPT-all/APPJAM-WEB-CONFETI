import { useState } from 'react';
import Poster from '@pages/confeti/components/poster/poster';
import Summary from '@pages/confeti/components/summary/summary';
import Info from '@pages/confeti/components/info/info';
import MoreButton from '@pages/confeti/components/button/more-button';
import PerformanceDetail from '@pages/confeti/components/performance/performance-detail';
import ArtistTitle from '@pages/confeti/components/artist/artist-title';
import ArtistSection from '@pages/confeti/components/artist/artist-section';
import { FloatingButton, Footer, Spacing } from '@confeti/design-system';
import { FESTIVAL_DETAIL } from '@pages/confeti/mocks/confeti-detail';

const FestivalDetailPage = () => {
  const { festival } = FESTIVAL_DETAIL;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      <FloatingButton />
      <Poster
        posterBgUrl={festival.posterBgUrl}
        posterUrl={festival.posterUrl}
      />
      <Summary
        id={festival.festivalId}
        title={festival.title}
        subtitle={festival.subtitle}
        startAt={festival.startAt}
        endAt={festival.endAt}
        area={festival.area}
        reserveAt={festival.reserveAt}
        reservationUrl={festival.reservationUrl}
        isFavorite={festival.isFavorite}
      />
      <Spacing />
      <Info
        subtitle={festival.subtitle}
        area={festival.area}
        startAt={festival.startAt}
        endAt={festival.endAt}
        time={festival.time}
        ageRating={festival.ageRating}
        reservationOffice={festival.reservationOffice}
        price={festival.price}
      />
      <Spacing />
      <PerformanceDetail
        isExpanded={isExpanded}
        infoImgUrl={festival.infoImgUrl}
        title={festival.title}
      />
      <MoreButton
        hasShadow={true}
        isExpanded={isExpanded}
        onToggle={toggleExpanded}
      />
      <Spacing />
      <ArtistTitle />
      <ArtistSection type="festival" artistData={FESTIVAL_DETAIL} />
      <Footer />
    </>
  );
};

export default FestivalDetailPage;
