import { API_ENTRYPOINT } from "@/env";
import axios from "axios";

export function fetch<TData, TVariables>(
  query: string,
  variables?: TVariables
): () => Promise<TData> {
  return async () => {
    const res = await axios(API_ENTRYPOINT, {
      method: "POST",
      data: JSON.stringify({ query, variables }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = res.data;

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data as TData;
  };
}
