import { useState, useMemo, useEffect } from 'react';

interface Festival {
  festivalId: number;
  title: string;
  logoUrl: string;
  festivalDates: Array<{
    festivalDateId: number;
    festivalAt: string;
  }>;
}

export const useButtonSelection = (festivals: Festival[]) => {
  const [clickedFestivalId, setClickedFestivalId] = useState<number | null>(
    festivals.length > 0 ? festivals[0].festivalId : null,
  );

  const festivalDatesMap = useMemo(
    () =>
      new Map(
        festivals.map((festival) => [
          festival.festivalId,
          festival.festivalDates,
        ]),
      ),
    [festivals],
  );

  const selectedFestivalDates = useMemo(() => {
    return clickedFestivalId
      ? festivalDatesMap.get(clickedFestivalId) || []
      : [];
  }, [clickedFestivalId, festivalDatesMap]);

  const [selectedFestivalDateId, setSelectedFestivalDateId] = useState<
    number | null
  >(
    selectedFestivalDates.length > 0
      ? selectedFestivalDates[0].festivalDateId
      : null,
  );

  const handleFestivalClick = (festivalId: number) => {
    setClickedFestivalId(festivalId);
    const newDates = festivalDatesMap.get(festivalId) || [];
    setSelectedFestivalDateId(
      newDates.length > 0 ? newDates[0].festivalDateId : null,
    );
  };

  return {
    clickedFestivalId,
    selectedFestivalDates,
    handleFestivalClick,
    selectedFestivalDateId,
    setSelectedFestivalDateId,
  };
};
