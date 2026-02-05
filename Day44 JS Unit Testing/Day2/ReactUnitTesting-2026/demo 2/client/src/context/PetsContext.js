import { createContext } from "react";

export const PetsContext = createContext({
  cats: [],
  setCats: () => {},
});
