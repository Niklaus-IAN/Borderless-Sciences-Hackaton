// src/hooks/useQueryData.ts
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../utils/api";

type QueryParams = {
  query: string;
};

export const useQueryData = (params: QueryParams) => {
  const query = useQuery({
    queryKey: ["queryData", params],
    queryFn: async () =>
      fetcher(`/api/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
      }),
    enabled: false, 
  });

  return query;
};
