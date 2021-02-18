import { useEffect, useState } from "react";
import { FetchDataResult } from "./fetch-data-results";

export const useFetchData = <T>(
  callback: () => Promise<T>
): FetchDataResult<T> => {
  return {
    data: null,
    error: null,
    status: "loading"
  };
};
