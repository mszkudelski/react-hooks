import React from "react";
import { useFetchData } from "./useFetchData";

export default () => {
  const { status } = useFetchData(() => new Promise(r => setTimeout(r, 2000)));
  const { status: error } = useFetchData(
    () => new Promise((_, r) => setTimeout(r, 2000))
  );

  return (
    <div>
      <h1>Success callback: {status}!</h1>
      <h1>Error callback: {error}!</h1>
    </div>
  );
};
