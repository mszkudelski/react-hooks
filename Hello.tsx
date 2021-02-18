import React from "react";
import { useFetchData } from "./useFetchData";

export default () => {
  const { status } = useFetchData(() => new Promise(r => setTimeout(r, 2000)));

  return <h1>Success callback: {status}!</h1>;
};
