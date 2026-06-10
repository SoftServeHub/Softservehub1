import { createContext, useContext } from "react";

export const ZoraEmbedContext = createContext(false);

export function useZoraEmbedded() {
  return useContext(ZoraEmbedContext);
}
