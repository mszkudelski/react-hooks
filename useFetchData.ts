import { useEffect, useState } from "react";
import { FetchDataResult } from "./fetch-data-results";

export const useFetchData = <T>(
  callback: () => Promise<T>
): FetchDataResult<T> => {
  const [state, setState] = useState<FetchDataResult<T>>({
    data: null,
    error: null,
    status: "loading"
  });

  callback()
    .then(data => setState({ data, error: null, status: "success" }))
    .catch(error => setState({ data: null, error, status: "error" }));

  return state;
};
