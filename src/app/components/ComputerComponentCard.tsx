"use client";
import React, {useState} from "react";
import {Button, Card} from "@chakra-ui/react";
import {ComputerParts, PartsCategory, PartsCategoryList} from "@/app/types/types";
import ComputerComponentCardBody from "@/app/components/ComputerComponentCardBody";

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