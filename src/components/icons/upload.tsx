import { Box } from "@chakra-ui/react";
import { ChakraProps } from "@chakra-ui/system/dist/types/system.types";

export const UploadIcon = (props: ChakraProps) => (
  <Box
    as={"svg"}
    aria-hidden="true"
    focusable="false"
    data-icon="upload"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity="0.4"
      d="M480 352h-160c0 35.35-28.65 64-64 64s-64-28.65-64-64H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456z"
    ></path>
    <path
      fill="currentColor"
      fillOpacity="1"
      d="M105.4 182.6c-12.49-12.49-12.49-32.75 0-45.25l128-128C239.6 3.125 247.8 0 256 0s16.38 3.125 22.62 9.375l128 128c12.49 12.49 12.49 32.75 0 45.25c-12.5 12.49-32.76 12.5-45.25 .001L288 109.3V352c0 17.67-14.33 32-32 32c-17.67 0-32-14.33-32-32V109.3L150.6 182.6C138.1 195.1 117.9 195.1 105.4 182.6z"
    ></path>
  </Box>
);
