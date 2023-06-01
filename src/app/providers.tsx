"use client";

import {CacheProvider} from "@chakra-ui/next-js";
import {ChakraProvider} from "@chakra-ui/react";
import {TotalPriceProvider} from "@/app/total_price";

export function Providers({children}: { children: React.ReactNode }) {
  return (
      <TotalPriceProvider>
        <CacheProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </CacheProvider>
      </TotalPriceProvider>
  );
}
