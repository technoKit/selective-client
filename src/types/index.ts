type MediaAttribute = {
  data: {
    id: number;
    attributes: {
      url: string;
    };
  };
};

type MultiMediaAttribute = {
  data: {
    id: number;
    attributes: {
      url: string;
    };
  }[];
};

export type Project = {
  id: number;
  attributes: {
    title: string;
    location: string;
    map_location: string;
    shares: number;
    sold_shares: number;
    share_price: number;
    main_image?: MediaAttribute;
    gallery?: MultiMediaAttribute;
    description: string;
    gross_yield: string;
    expected_return: string;
    dividend_yield: string;
    rental_income: string;
  };
};
