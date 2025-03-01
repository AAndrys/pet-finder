export const fetchAuthToken = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_PETFINDER_API_URL}/oauth2/token`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: import.meta.env.VITE_PETFINDER_API_KEY as string,
        client_secret: import.meta.env.VITE_PETFINDER_SECRET as string,
      }),
    },
  );

  const data = await response.json();

  return {
    accessToken: data.access_token,
    expiresIn: data.expires_in,
  };
};
