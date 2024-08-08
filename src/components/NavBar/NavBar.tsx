"use client";

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  Center,
} from "@chakra-ui/react";

export default function Nav() {
  return (
    <>
      <Box bg={useColorModeValue("#1B262C", "#1B262C")} px={[4, 16]}>
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <img
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij4KPHBhdGggZmlsbD0iI0Y3RjdGQiIgZD0iTTEwOS43LDExMEgxOC4yYy01LjEsMC05LjItNC4xLTkuMi05LjJWMjIuNmMwLTIuNSwyLjEtNC42LDQuNi00LjZIOTZjMi41LDAsNC42LDIuMSw0LjYsNC42djIzLjF2NTUuMkMxMDAuNiwxMDUuOSwxMDQuNywxMTAsMTA5LjcsMTEwTDEwOS43LDExMGM1LjEsMCw5LjItNC4xLDkuMi05LjJWNTAuMmMwLTIuNS0yLjEtNC42LTQuNi00LjZoLTQuNiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNERURGRTYiIGQ9Ik0yMyAzMS45aDYzLjFjMS43IDAgMyAxLjMgMyAzdjE2LjljMCAxLjctMS4zIDMtMyAzSDIzYy0xLjcgMC0zLTEuMy0zLTNWMzQuOUMyMCAzMy4yIDIxLjMgMzEuOSAyMyAzMS45ek0xMDkuNyAxMTBMMTA5LjcgMTEwYzUuMSAwIDkuMi00LjEgOS4yLTkuMlY1MC4yYzAtMi41LTIuMS00LjYtNC42LTQuNmgtMTMuOHY1NS4yQzEwMC42IDEwNS45IDEwNC43IDExMCAxMDkuNyAxMTB6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzQ2NEM1NSIgZD0iTTEwOS43LDExM0gxOC4yQzExLjUsMTEzLDYsMTA3LjUsNiwxMDAuOFYyMi42YzAtNC4yLDMuNC03LjYsNy42LTcuNkg5NmM0LjIsMCw3LjYsMy40LDcuNiw3LjZ2NzguM2MwLDMuNCwyLjgsNi4yLDYuMiw2LjJzNi4yLTIuOCw2LjItNi4yVjUwLjJjMC0wLjktMC43LTEuNi0xLjYtMS42aC00LjZjLTEuNywwLTMtMS4zLTMtM3MxLjMtMywzLTNoNC42YzQuMiwwLDcuNiwzLjQsNy42LDcuNnY1MC42QzEyMS45LDEwNy42LDExNi40LDExMywxMDkuNywxMTN6IE0xMy42LDIxYy0wLjksMC0xLjYsMC43LTEuNiwxLjZ2NzguM2MwLDMuNCwyLjgsNi4yLDYuMiw2LjJoODEuMWMtMS4xLTEuOC0xLjctMy45LTEuNy02LjJWMjIuNmMwLTAuOS0wLjctMS42LTEuNi0xLjZMMTMuNiwyMXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjREVERkU2IiBkPSJNNDEuMiA3Mi45SDIzYy0xLjcgMC0zLTEuMy0zLTNzMS4zLTMgMy0zaDE4LjJjMS43IDAgMyAxLjMgMyAzUzQyLjkgNzIuOSA0MS4yIDcyLjl6TTQxLjIgOTguN0gyM2MtMS43IDAtMy0xLjMtMy0zczEuMy0zIDMtM2gxOC4yYzEuNyAwIDMgMS4zIDMgM1M0Mi45IDk4LjcgNDEuMiA5OC43ek00MS4yIDg1LjdIMjNjLTEuNyAwLTMtMS4zLTMtM3MxLjMtMyAzLTNoMTguMmMxLjcgMCAzIDEuMyAzIDNTNDIuOSA4NS43IDQxLjIgODUuN3oiPjwvcGF0aD48cGF0aCBmaWxsPSIjNDY0QzU1IiBkPSJNODYsOTkuMUg1OGMtMS43LDAtMy0xLjMtMy0zVjY4LjZjMC0xLjcsMS4zLTMsMy0zaDI4YzEuNywwLDMsMS4zLDMsM3YyNy41Qzg5LDk3LjcsODcuNyw5OS4xLDg2LDk5LjF6IE02MSw5My4xaDIyVjcxLjZINjFWOTMuMXoiPjwvcGF0aD4KPC9zdmc+"
            />
          </Box>

          <Box>
            <Text
              fontSize={["sm", "2xl"]}
              //beautiful font family ?

              fontFamily={"manrope"}
              fontWeight={700}
              color={"white"}
            >
              News Aggregator
            </Text>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://api.dicebear.com/9.x/pixel-art/svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://api.dicebear.com/9.x/pixel-art/svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Hassaan Bin sajid</p>
                  </Center>
                  <br />
                  <MenuDivider />

                  <MenuItem>Account</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
