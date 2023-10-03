interface Restaurant {
    _id: string;
    name: string;
    address: string;
    companyId: number;
    postalCode: string;
    city: string;
    phone: string;
    location : {
      coordinates: number[];
      type: 'point';
    };
    company: 'Sodexo'|'Compass Group'

  }

export type {Restaurant};
