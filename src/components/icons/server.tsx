import { Box } from "@chakra-ui/react";
import { ChakraProps } from "@chakra-ui/system/dist/types/system.types";

export const ServerIcon = (props: ChakraProps) => (
  <Box
    as={"svg"}
    aria-hidden="true"
    focusable="false"
    data-icon="server"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity="0.4"
      d="M480 288H32c-17.62 0-32 14.38-32 32v128c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32v-128C512 302.4 497.6 288 480 288zM352 408c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S365.3 408 352 408zM416 408c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24S429.3 408 416 408zM416 152c13.25 0 24-10.75 24-24S429.3 104 416 104S392 114.8 392 128S402.8 152 416 152z"
    ></path>
    <path
      fill="currentColor"
      fillOpacity="1"
      d="M480 32H32C14.38 32 0 46.38 0 64v128c0 17.62 14.38 32 32 32h448c17.62 0 32-14.38 32-32V64C512 46.38 497.6 32 480 32zM352 152c-13.25 0-24-10.75-24-24S338.8 104 352 104S376 114.8 376 128S365.3 152 352 152zM416 152c-13.25 0-24-10.75-24-24S402.8 104 416 104S440 114.8 440 128S429.3 152 416 152zM416 360c-13.25 0-24 10.75-24 24s10.75 24 24 24c13.26 0 24-10.75 24-24S429.3 360 416 360z"
    ></path>
  </Box>
);
