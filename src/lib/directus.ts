const directusUrl = import.meta.env.DIRECTUS_URL;
const directusToken = import.meta.env.DIRECTUS_TOKEN;

type QueryParams = Record<string, string | number | boolean | undefined>;

const toQueryString = (params: QueryParams = {}) => {
  const search = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined) return;
    search.set(key, String(value));
  });
  return search.toString();
};

export async function fetchDirectusCollection<T>(collection: string, params?: QueryParams): Promise<T[]> {
  if (!directusUrl) return [];

  const query = toQueryString(params);
  const endpoint = `${directusUrl}/items/${collection}${query ? `?${query}` : ''}`;

  const response = await fetch(endpoint, {
    headers: {
      ...(directusToken ? { Authorization: `Bearer ${directusToken}` } : {}),
    },
  });

  if (!response.ok) {
    throw new Error(`Directus request failed: ${response.status}`);
  }

  const payload = (await response.json()) as { data: T[] };
  return payload.data;
}
