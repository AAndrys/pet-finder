export interface Animal {
  id: number;
  name: string;
  age: string;
  description: string;
  gender: string;
  size: string;
  photos: Array<{ small: string; medium: string; large: string }>;
  breeds: { primary: string; mixed: boolean };
  status: string;
  contact: { email: string; phone: string };
  environment: { children: boolean; dogs: boolean; cats: boolean };
  tags: string[];
  url: string;
}

export interface FetchAnimalsResponse {
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
// TODO
export const fetchAnimals = async ({ queryKey }: any): Promise<any> => {
  const [, token, type] = queryKey;

  const response = await fetch(
    `${import.meta.env.VITE_PETFINDER_API_URL}/animals?type=${type}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );

  if (!response.ok) throw new Error('Failed to fetch data');

  return response.json();
};

export const fetchAnimalTypes = async ({ queryKey }: any): Promise<any> => {
  const [, token] = queryKey;

  const response = await fetch(
    `${import.meta.env.VITE_PETFINDER_API_URL}/types`,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );

  if (!response.ok) throw new Error('Failed to fetch data');

  return response.json();
};
