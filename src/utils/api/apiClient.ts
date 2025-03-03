interface AuthToken {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface ApiFetchOptions {
  headers?: Record<string, string>;
}

class ApiClient {
  private token: string | null = null;
  private apiUrl: string;
  private apiKey: string;
  private secret: string;

  constructor(apiUrl: string, apiKey: string, secret: string) {
    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
    this.secret = secret;
  }

  // Fetches the access token from sessionStorage or requests a new one if expired
  private async fetchAccessToken(): Promise<AuthToken> {
    const storedToken = sessionStorage.getItem('authToken');
    if (storedToken) return JSON.parse(storedToken) as AuthToken;

    const response = await fetch(`${this.apiUrl}/oauth2/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: this.apiKey,
        client_secret: this.secret,
      }),
    });

    if (!response.ok) throw new Error('Failed to fetch token');

    const data = (await response.json()) as AuthToken;
    sessionStorage.setItem('authToken', JSON.stringify(data));

    return data;
  }

  // Fetch data from the API with the provided endpoint and options
  public async fetch<T>(
    endpoint: string,
    options: ApiFetchOptions = {},
  ): Promise<T> {
    if (!this.token) {
      const tokenData = await this.fetchAccessToken();
      this.token = tokenData.access_token;
    }

    try {
      const response = await fetch(`${this.apiUrl}/${endpoint}`, {
        ...options,
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      if (response.status === 401) {
        // eslint-disable-next-line no-console
        console.warn('Fetching new token...');
        sessionStorage.removeItem('authToken');
        const tokenData = await this.fetchAccessToken();
        this.token = tokenData.access_token;

        return this.fetch<T>(endpoint, options);
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'API error');
      }

      return response.json() as Promise<T>;
    } catch (error) {
      sessionStorage.removeItem('authToken');
      this.token = null;
      throw new Error('API error');
    }
  }
}

export const apiClient = new ApiClient(
  import.meta.env.VITE_PETFINDER_API_URL,
  import.meta.env.VITE_PETFINDER_API_KEY as string,
  import.meta.env.VITE_PETFINDER_SECRET as string,
);
