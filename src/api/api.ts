import useSWR from "swr";

const BASE_URL = "https://ikmaslahat.com/api/data";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

/**
 * @param type
 */
export const useFetchByType = (type: string) => {
  const { data, error } = useSWR(BASE_URL, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
    dedupingInterval: 10000,
  });

  const filteredData = Array.isArray(data)
    ? data.filter((item: any) => item.type === type)
    : [];

  return {
    data: filteredData,
    error,
    isLoading: !data && !error,
  };
};
