import Image from "next/image";
import React from "react";
import AuctionCard from "../components/cards/AuctionCard";
import AppLayout from "../components/layouts/AppLayout";
import Meta from "../components/partials/Meta";
import { nfts } from "../utils/nfts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faInstagram,
  faLinkedin,
  faMedium,
  faReddit,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Home() {
  return (
    <AppLayout>
      <Meta title="About Us" />
      <section className="my-10">
        <div className="xl:px-20 md:px-6 !px-4 lg:!px-10 max-w-full mx-auto md:max-w-screen-7xl lg:max-w-screen-2xl 2xl:max-w-screen-3xl">
          <div className="w-full md:w-1/2 mx-auto flex flex-col items-center justify-center text-center">
            <Image src="/bayc.png" width={150} height={150} />
            <h1 className="text-3xl font-black">Bored Ape Yacht Club</h1>
            <div className="flex flex-row items-center space-x-6 text-md ">
              <h6>by BAYC</h6>
              <div className="my-2 flex items-center space-x-1">
                <Image src="/celo.png" width="12" height="12" />
                <h6 className="font-semibold">0x4445...D2E0</h6>
              </div>
            </div>
            <p className="text-md font-semibold">
              The Bored Ape Yacht Club is a collection of 10,000 unique Bored
              Ape NFTs - unique digital collectibles living on the Celo
              blockchain. Your Bored Ape doubles as your Yacht Club Membership
              card and grant access to members-only benefits.
            </p>
            <ul className="mt-4 flex flex-row space-x-1">
              <li>
                <Link href="#" passHref>
                  <a className="w-10 h-10 border border-black border-opacity-50 rounded-full  text-black flex items-center justify-center text-xl">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  <a className="w-10 h-10 border border-black border-opacity-50 rounded-full  text-black flex items-center justify-center text-xl">
                    <FontAwesomeIcon icon={faDiscord} />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#" passHref>
                  <a className="w-10 h-10 border border-black border-opacity-50 rounded-full  text-black flex items-center justify-center text-xl">
                    <FontAwesomeIcon icon={faMedium} />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="my-16">
        <div className="xl:px-20 md:px-6 !px-4 lg:!px-10 max-w-full mx-auto md:max-w-screen-7xl lg:max-w-screen-2xl 2xl:max-w-screen-3xl">
          <div className="mb-8 flex flex-row space-x-4">
            <div className="border-b border-black pb-2">
              <h2 className="text-md font-black">Items</h2>
            </div>
            <div className="border-b border-black border-opacity-50 pb-2">
              <h2 className="text-md text-black text-opacity-50 font-black">
                Activities
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 mt-6 text-black lg:gap-4 lg:grid-cols-4 xl:gap-10 md:mt-0">
            {nfts.map((item: any, index: any) => (
              <AuctionCard item={item} key={index} />
            ))}
          </div>
          <div className="my-24 flex items-center justify-center">
            <button className="bg-black inline-flex items-center justify-center px-3 py-2 border border-transparent shadow-sm text-sm text-white font-bold capitalize">
              Load More
            </button>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
