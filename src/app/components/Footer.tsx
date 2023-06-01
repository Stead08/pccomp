"use client";
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue, Flex,
} from '@chakra-ui/react';

export default function Footer() {
  return (
      <Box as="footer" bg="gray.200" py={4}>
        <Flex align="center" justify="center" direction="column">
          <Text mb={2}>© 2023 Stead08. All rights reserved</Text>
          <a href="https://webservice.rakuten.co.jp/" target="_blank" rel="noreferrer">
            <img src="https://webservice.rakuten.co.jp/img/credit/200709/credit_22121.gif"
                 alt="Rakuten Web Service Center" title="Rakuten Web Service Center" width="221" height="21"/>
          </a>
        </Flex>
      </Box>

  );
}