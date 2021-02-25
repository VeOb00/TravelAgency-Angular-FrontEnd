export class BlogPost {
  title: string;
  place: string;
  country: string;
  image: string;
  createDate: Date;
  description?: string;
  descriptionLong?: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;

  constructor(
    title: string,
    country: string,
    place: string,
    image: string,
    createDate: Date,
    description?: string,
    descriptionLong?: string,
    image1?: string,
    image2?: string,
    image3?: string,
    image4?: string
  ) {
    this.title = title;
    this.place = place;
    this.country = country;
    this.image = image;
    this.createDate = createDate;
    this.description = description;
    this.descriptionLong = descriptionLong;
    this.image1 = image1;
    this.image2 = image2;
    this.image3 = image3;
    this.image4 = image4;
  }

}

export class BlogPostBackendRaw {
  title: string;
  place: string;
  country: string;
  image: string;
  createDate: string;
  description?: string;
  descriptionLong?: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;

  constructor(
    title: string,
    country: string,
    place: string,
    image: string,
    createDate: string,
    description?: string,
    descriptionLong?: string,
    image1?: string,
    image2?: string,
    image3?: string,
    image4?: string
  ) {
    this.title = title;
    this.place = place;
    this.country = country;
    this.image = image;
    this.createDate = createDate;
    this.description = description;
    this.descriptionLong = descriptionLong;
    this.image1 = image1;
    this.image2 = image2;
    this.image3 = image3;
    this.image4 = image4;
  }

}