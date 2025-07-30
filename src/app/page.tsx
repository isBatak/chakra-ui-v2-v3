import { Box, Button, Stack } from "@chakra-ui/react";
import * as v3 from "@chakra-ui/react@next";

export default function Home() {
  return (
    <>
      <Box p="5">
        <Stack spacing={4} direction="row" align="center">
          <Button colorScheme="teal" size="xs">
            Button
          </Button>
          <Button colorScheme="teal" size="sm">
            Button
          </Button>
          <Button colorScheme="teal" size="md">
            Button
          </Button>
          <Button colorScheme="teal" size="lg">
            Button
          </Button>
        </Stack>
      </Box>

      <v3.Box>
        <v3.Stack gap="4" direction="row" align="center">
          <v3.Button colorPalette="teal" size="xs">
            Button
          </v3.Button>
          <v3.Button colorPalette="teal" size="sm">
            Button
          </v3.Button>
          <v3.Button colorPalette="teal" size="md">
            Button
          </v3.Button>
          <v3.Button colorPalette="teal" size="lg">
            Button
          </v3.Button>
        </v3.Stack>
      </v3.Box>
    </>
  );
}
