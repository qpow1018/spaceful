export type TPlaceCategory = "EVENT_VENUE" | "HOTEL" | "MOTEL" | "PENSION" | "GUESTHOUSE";

export type TPlaceBenefitTag =
  | "EARLY_BOOKING"
  | "WEEKDAY_DISCOUNT"
  | "GROUP_BOOKING"
  | "LONG_STAY";

export type TPlace = {
  id: string;
  slug: string;
  name: string;
  placeCategory: TPlaceCategory;
  location: {
    city: string;
    district: string;
    address: string;
  };
  images: {
    url: string;
    alt: string;
  }[];
  pricing: {
    minimumPrice: number;
    unit: "PER_USE";
  };
  capacity: {
    min: number;
    max: number;
  };
  benefits: {
    tag: string;
    title: string;
    description: string;
  }[];
  activeBenefitTags: TPlaceBenefitTag[];
  recommendationRank: number;
};

export type TResPlaceCollection = {
  item: TPlace[];
  total: number;
};
