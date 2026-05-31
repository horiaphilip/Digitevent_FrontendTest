const ninjas_key = import.meta.env.VITE_ninjas_api; //get the key from the env

export async function fetchJoke(): Promise<string> {
  // we take the first joke from the array that the API returns
  const response = await fetch("https://api.api-ninjas.com/v1/jokes", {
    headers: { "X-Api-Key": ninjas_key },
  });

  const data_ninjas = await response.json();

  return data_ninjas[0].joke;
}

export async function fetchFact(): Promise<string> {
  //we take the first fact...
  const response = await fetch("https://api.api-ninjas.com/v1/facts", {
    headers: { "X-Api-Key": ninjas_key },
  });

  const data_ninjas = await response.json();

  return data_ninjas[0].fact;
}
