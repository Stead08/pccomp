"use client";
import {Flex, Text} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import {useTotal} from "@/app/total_price";

export default function StickyFooter() {
  const {totalPrice} = useTotal();
  const [price, setPrice] = useState(0);
  useEffect(() => {
    setPrice(totalPrice);
  }, [totalPrice]);
  const [isBottom, setIsBottom] = useState(false);

  const handleScroll = () => {
    const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
    setIsBottom(bottom);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
      <Flex
          as="footer"
          position="fixed"
          bottom="0"
          width="100%"
          height="60px"
          align="center"
          justify="center"
          padding="1.2em"
          bg="orange.200"
          display={isBottom ? "none" : "flex"}
      >
        <Text fontSize="2xl" fontWeight="bold">合計金額: {price}円</Text>
      </Flex>
  );
}