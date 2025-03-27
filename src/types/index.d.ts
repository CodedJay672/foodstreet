type ShopType = {
  creator: string;
  name: string;
  email: string;
  location: string;
  description: string;
  phone: string;
  occupation: string;
  "work-address": string;
};

type ProductType = {
  shop: any;
  name: string;
  measure: string;
  initPrice: number;
  discPrice: number;
  description: string;
};
