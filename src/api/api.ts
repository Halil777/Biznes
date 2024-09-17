import useSWR from "swr";

const BASE_URL = "https://ikmaslahat.com/api/data";

// Correct fetcher function
const fetcher = (url: string) => fetch(url).then((res) => res.json());

/**
 * Custom hook to fetch data dynamically based on the 'type'
 * @param type
 */
export const useFetchByType = (type: string) => {
  const { data, error } = useSWR(BASE_URL, fetcher);

  // Filter the data to find all items of the specific type
  const filteredData = Array.isArray(data)
    ? data.filter((item: any) => item.type === type)
    : [];

  return {
    data: filteredData,
    error,
    isLoading: !data && !error,
  };
};
