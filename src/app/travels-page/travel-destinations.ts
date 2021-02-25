export class TravelDestination {
  destinationId: number;
  destinationPlace: string;
  destinationCountry: string;
  continent: string;
  description: string;
  startDate: Date;
  duration: number;
  price: number;
  currency: string;
  image?: string;
  descriptionLong?: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;

  constructor(
    id: number,
    place: string,
    country: string,
    continent: string,
    description: string,
    startDate: Date,
    duration: number,
    price: number,
    currency: string,
    image?: string,
    descriptionLong?: string,
    image1?: string,
    image2?: string,
    image3?: string,
    image4?: string
  ) {
    this.destinationId = id;
    this.destinationPlace = place;
    this.destinationCountry = country;
    this.continent = continent;
    this.description = description;
    this.startDate = startDate;
    this.duration = duration;
    this.price = price;
    this.currency = currency;
    this.image = image;
    this.descriptionLong = descriptionLong;
    this.image1 = image1;
    this.image2 = image2;
    this.image3 = image3;
    this.image4 = image4;
  }

}

export class TravelDestinationBackendRaw {
  destinationId: number;
  destinationPlace: string;
  destinationCountry: string;
  continent: string;
  description: string;
  startDate: string;
  duration: number;
  price: number;
  currency: string;
  image?: string;
  descriptionLong?: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;

  constructor(
    id: number,
    place: string,
    country: string,
    continent: string,
    description: string,
    startDate: string,
    duration: number,
    price: number,
    currency: string,
    image?: string,
    descriptionLong?: string,
    image1?: string,
    image2?: string,
    image3?: string,
    image4?: string
  ) {
    this.destinationId = id;
    this.destinationPlace = place;
    this.destinationCountry = country;
    this.continent = continent;
    this.description = description;
    this.startDate = startDate;
    this.duration = duration;
    this.price = price;
    this.currency = currency;
    this.image = image;
    this.descriptionLong = descriptionLong;
    this.image1 = image1;
    this.image2 = image2;
    this.image3 = image3;
    this.image4 = image4;
  }

}
