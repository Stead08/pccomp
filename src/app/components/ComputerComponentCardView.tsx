"use client";

import ComputerComponentCard from "@/app/components/ComputerComponentCard";
import {PartsCategoryList} from "@/app/types/types";


export default function ComputerComponentCardView() {
  return (
      <div>
        {PartsCategoryList.map((category) => (
            <ComputerComponentCard key={category.id} category_id={category.id}/>
        ))}
      </div>
  )
}