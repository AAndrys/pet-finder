// Animals endpoint data
export interface Animal {
  id: number;
  name: string;
  age: string;
  description: string;
  gender: string;
  size: string;
  photos: Array<{ small: string; medium: string; large: string }>;
  primary_photo_cropped: { small: string };
  breeds: { primary: string; mixed: boolean };
  status: string;
  contact: { email: string; phone: string };
  environment: { children: boolean; dogs: boolean; cats: boolean };
  tags: string[];
  url: string;
}

export interface AnimalsResponse {
  animals: Animal[];
  pagination: {
    count_per_page: number;
    total_count: number;
    current_page: number;
    total_pages: number;
  };
  _links: {
    next: { href: string };
  };
}

// Animal types endpoint data
export interface AnimalType {
  name: string;
  coats: string[];
  colors: string[];
  genders: string[];
  _links: {
    self: {
      href: string;
    };
    breeds: {
      href: string;
    };
  };
}

export interface AnimalTypesResponse {
  types: AnimalType[];
}

// Animal breeds endpoint data
export interface AnimalBreeds {
  name: string;
  _links: {
    type: {
      href: string;
    };
  };
}

export interface AnimalBreedsResponse {
  breeds: AnimalBreeds[];
}
