import React from "react";
import Image from "next/image";

type Props = {
  item: any;
};

export default function CategoryCard({ item }: Props) {
  return (
    <div>
      <Image src={item.image} width="300" height="200" />
      <div className="flex flex-row justify-between">
        <h4 className="text-sm font-extrabold">{item.name}</h4>
      </div>
    </div>
  );
}
