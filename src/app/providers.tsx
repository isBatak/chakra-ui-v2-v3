"use client";

import { ChakraProvider, theme } from "@chakra-ui/react";
import * as v3 from "@chakra-ui/react@next";

const compatTheme = {
  v2: theme,
  v3: v3.defaultSystem,
};

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <v3.ClientOnly>
      {/* @ts-expect-error test */}
      <v3.ChakraProvider value={compatTheme}>
        <ChakraProvider theme={compatTheme}>{children}</ChakraProvider>
      </v3.ChakraProvider>
    </v3.ClientOnly>
  );
}
