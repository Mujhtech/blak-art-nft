import type { NextPage } from "next";
import Link from "next/link";
import AppLayout from "../components/layouts/AppLayout";
import Meta from "../components/partials/Meta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CollectionCard from "../components/cards/CollectionCard";
import AuctionCard from "../components/cards/AuctionCard";
import CategoryCard from "../components/cards/CategoryCard";
import FaqCard from "../components/cards/FaqCard";
import { faqs } from "../utils/faqs";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { nfts } from "../utils/nfts";
import { categories } from "../utils/categories";
import { gallerie1, gallerie2 } from "../utils/galleries";
import Image from "next/image";
SwiperCore.use([Autoplay]);

const Home: NextPage = () => {
  return (
    <AppLayout>
      <Meta />
      <section className="mb-16">
        <div className="xl:px-20 md:px-6 !px-0 lg:!px-10 max-w-full mx-auto md:max-w-screen-7xl lg:max-w-screen-2xl 2xl:max-w-screen-3xl">
          <div className="min-h-[400px] px-10 md:px-24 items-center justify-center flex flex-col text-center">
            <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-black">
              Create, own & sell collections of peculiar digital art
            </h1>
            <div className="mt-10 flex flex-row items-center space-x-10">
              <button className="bg-black whitespace-nowrap inline-flex items-center justify-center px-3 py-2 border border-transparent shadow-sm text-sm text-white font-bold">
                Explore collections
              </button>
              <Link href="#" passHref>
                <a className="font-bold">
                  How it works <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </Link>
            </div>
            <img
              src="/digital-art.png"
              width={150}
              height={150}
              className="absolute hidden sm:block sm:top-72 sm:!w-[100px] sm:!h-[100px] md:!w-[120px] md:!h-[120px] lg:!w-[150px] lg:!h-[150px] left-14 md:left-24 md:top-80 lg:left-52 lg:top-80"
            />
          </div>
        </div>
      </section>
      <section className="mb-16">
        <div className="xl:px-20 md:px-6 !px-4 lg:!px-10 max-w-full mx-auto md:max-w-screen-7xl lg:max-w-screen-2xl 2xl:max-w-screen-3xl">
          <div className="mb-4 flex flex-row justify-between">
            <h2 className="text-xl font-black">Top Collections</h2>
            <Link href="#" passHref>
              <a className="font-semibold text-md">
                Sell all <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 mt-6 text-black lg:gap-4 lg:grid-cols-4 xl:gap-10 md:mt-0">
            {nfts.map((item: any, index: any) => (
              <CollectionCard item={item} key={index} />
            ))}
          </div>
        </div>
      </section>
      <section className="mb-16">
        <div className="xl:px-20 md:px-6 !px-4 lg:!px-10 max-w-full mx-auto md:max-w-screen-7xl lg:max-w-screen-2xl 2xl:max-w-screen-3xl">
          <div className="mb-4 flex flex-row justify-between">
            <h2 className="text-xl font-black">Live Auctions</h2>
            <Link href="#" passHref>
              <a className="font-semibold text-md">
                Sell all <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 mt-6 text-black lg:gap-4 lg:grid-cols-4 xl:gap-10 md:mt-0">
            {nfts.map((item: any, index: any) => (
              <AuctionCard item={item} key={index} />
            ))}
          </div>
        </div>
      </section>
      <section className="mb-16">
        <div className="xl:px-20 md:px-6 !px-4 lg:!px-10 max-w-full mx-auto md:max-w-screen-6xl lg:max-w-screen-2xl 2xl:max-w-screen-3xl">
          <div className="flex flex-col px-32">
            <div className="mb-4 flex items-center justify-center">
              <h2 className="text-3xl font-black">Browse by categories</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 text-black md:mt-0">
              {categories.map((item: any, index: any) => (
                <CategoryCard item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mb-16">
        <div className="xl:px-20 md:px-6 !px-4 lg:!px-10 max-w-full mx-auto md:max-w-screen-6xl lg:max-w-screen-2xl 2xl:max-w-screen-3xl">
          <div className="flex flex-row items-center divide-x divide-black px-32">
            <div className="flex flex-col w-1/2">
              <h1 className="text-2xl font-extrabold">FAQs</h1>
              <p>
                blak.art is a NFT Marketplace that enables gains you access to
                the rarest art and collectibles on the internet.
              </p>
            </div>
            <div className="flex flex-col w-1/2 pl-4 divide-y divide-black">
              {faqs.map((item: any, key: any) => (
                <FaqCard
                  key={key}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mb-16">
        <div className="flex flex-col">
          {/* <div className="max-w-full flex flex-row space-x-1 overflow-auto">
            {Array(20)
              .fill(undefined)
              .map((_, index) => (
                <div className="w-[300px] h-[20px]" key={index}>
                  <h1 className="text-xs font-extrabold">
                    NEW COLLECTION DROPING SOON.
                  </h1>
                </div>
              ))}
          </div> */}
          <div className="max-w-full">
            <Swiper
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              spaceBetween={4}
              slidesPerView={6}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {Array(20)
                .fill(undefined)
                .map((_, index) => (
                  <SwiperSlide>
                    <div key={index}>
                      <h1 className="text-xs font-extrabold">
                        NEW COLLECTIONS DROPPING SOON.
                      </h1>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>

          <div className="mt-10">
            <Swiper
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              spaceBetween={4}
              slidesPerView={5}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {gallerie1.map((image, index) => (
                <SwiperSlide>
                  <Image src={image} height={300} width={300} key={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="mt-2 mb-10">
            <Swiper
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              spaceBetween={4}
              slidesPerView={5}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {gallerie2.map((image, index) => (
                <SwiperSlide>
                  <Image src={image} height={300} width={300} key={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="max-w-full">
            <Swiper
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              spaceBetween={4}
              slidesPerView={6}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {Array(20)
                .fill(undefined)
                .map((_, index) => (
                  <SwiperSlide>
                    <div key={index}>
                      <h1 className="text-xs font-extrabold">
                        NEW COLLECTIONS DROPPING SOON.
                      </h1>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default Home;
