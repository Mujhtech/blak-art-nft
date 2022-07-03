import React from "react";
import CollectionCard from "../components/cards/CollectionCard";
import AppLayout from "../components/layouts/AppLayout";
import Meta from "../components/partials/Meta";
import { nfts } from "../utils/nfts";

export default function Home() {
  return (
    <AppLayout>
      <Meta title="Collections" />
      <section className="my-16">
        <div className="xl:px-20 md:px-6 !px-4 lg:!px-10 max-w-full mx-auto md:max-w-screen-7xl lg:max-w-screen-2xl 2xl:max-w-screen-3xl">
          <div className="mb-b flex flex-row justify-between">
            <h2 className="text-xl font-black">Top Collections</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 mt-6 text-black lg:gap-4 lg:grid-cols-4 xl:gap-10 md:mt-0">
            {nfts.map((item: any, index: any) => (
              <CollectionCard item={item} key={index} />
            ))}
          </div>
          <div className="my-24 flex items-center justify-center">
            <button className="bg-black inline-flex items-center justify-center px-3 py-2 border border-transparent shadow-sm text-sm text-white font-bold capitalize">Load More</button>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
