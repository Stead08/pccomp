"use client";
import React, {FormEvent, useState} from "react";
import {Button, Heading, Select, Card, Flex, Input, CardBody} from "@chakra-ui/react";
import {useTotal} from "@/app/total_price";
import {ComputerParts, PartsCategory, PartsCategoryList} from "@/app/types/types";
import ComputerComponentCardBody from "@/app/components/ComputerComponentCardBody";

export const ComputerPartsTest: ComputerParts[] = [
  {
    id: 1,
    category: PartsCategoryList[0],
    name: "Ryzen 5 5600X",
    price: 40000,
    description: "Ryzen 5 5600Xの説明",
    image: new URL("https://placehold.jp/150x150.png"),
    rakuten_url: "https://www.rakuten.co.jp/",
    release_date: "2020-11-05",
  },
];

type Props = {
  category_id: PartsCategory["id"];
};

export default function ComputerComponentCard(props: Props) {
  const {category_id} = props;
  const [cardBodies, setCardBodies] = useState([{}]);

  const handleAddComponent = () => {
    setCardBodies(prevCardBodies => [...prevCardBodies, {}]);
  };

  const handleRemoveComponent = (indexToRemove: number) => {
    setCardBodies(prevCardBodies => prevCardBodies.filter((_, index) => index !== indexToRemove));
  };

  const category = PartsCategoryList.find(
      (category) => category.id === category_id
  ) || PartsCategoryList[0];

  return (
      <>
        <Card variant={"outline"} p={3} m={5}>
          {cardBodies.map((_, index) => (
              <ComputerComponentCardBody key={index} index={index} category={category}
                                         onRemove={() => handleRemoveComponent(index)}/>
          ))}
          {category.hasAddButton && <Button onClick={handleAddComponent}>追加</Button>}
        </Card>

      </>
  );
}