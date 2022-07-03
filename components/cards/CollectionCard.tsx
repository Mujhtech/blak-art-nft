import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdBadge } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";

type Props = {
  item: any;
};

export default function CollectionCard({ item }: Props) {
  return (
    <div>
      <Image src={item.image} width="300" height="300" />
      <div className="flex flex-row justify-between">
        <h4 className="text-md font-extrabold">{item.name}</h4>
        <div className="flex space-x-2 items-center text-xs font-semibold">
          <h6>by {item.creator}</h6>
          <FontAwesomeIcon icon={faIdBadge} />
        </div>
      </div>
    </div>
  );
}
