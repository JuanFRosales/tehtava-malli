interface Restaurant {
    name: string;
    address: string;
    companyId: number;
    postalCode: string;
    city: string;
    phone: string;
    location : {
      coordinates: number[];
      type: string;
    };
    company: string;

  }

export type { Restaurant };
