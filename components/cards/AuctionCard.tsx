import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

type Props = {
  item: any;
};

export default function AuctionCard({ item }: Props) {
  return (
    <div>
      <div className="mb-4 flex flex-row items-center justify-between">
        <Image
          src={item.image}
          width="20"
          height="20"
          className="rounded-full"
        />
        <FontAwesomeIcon icon={faEllipsisV} />
      </div>
      <Image src={item.image} width="300" height="300" />
      <div className="flex flex-row justify-between">
        <h4 className="text-md font-extrabold">{item.name}</h4>
        <span>#{item.id}</span>
      </div>
      <div className="my-2 flex items-center space-x-1">
        <Image src="/celo.png" width="10" height="10" />
        <h6 className="text-sm font-semibold">{item.price}CELO</h6>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex space-x-1 items-center text-xs font-semibold">
          <FontAwesomeIcon icon={faClock} />
          <h6>{item.auction} days left</h6>
        </div>
        <button className="bg-black whitespace-nowrap inline-flex items-center justify-center px-3 py-1 border border-transparent shadow-sm text-sm text-white font-bold">
          Bid
        </button>
      </div>
    </div>
  );
}
