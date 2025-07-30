"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import * as v3 from "@chakra-ui/react@next";

const theme = extendTheme({
  config: {
    cssVarPrefix: "chakra-v2",
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme} resetCSS={false} disableGlobalStyle>
      <v3.ChakraProvider value={v3.defaultSystem}>{children}</v3.ChakraProvider>
    </ChakraProvider>
  );
}
