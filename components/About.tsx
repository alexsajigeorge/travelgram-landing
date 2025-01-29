import React from "react";
import Image from "next/image";
import { ABOUT } from "@/constants";
import FeatureItem from "./FeatureItem";

const AboutUs = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="z-20 flex w-full flex-col">
          <div className="relative mb-10">
            <h2 className="bold-40 lg:bold-64 text-center">Join the Journey</h2>
            <p className="regular-16 mt-6 text-gray-30 text-center ">
              We believe everyone has a story to tell. At Travelgram, we provide
              a platform where your travel experiences can inspire others and
              leave a lasting impact. Whether you’re a seasoned traveler or
              taking your first steps into the world of adventure, there’s a
              place for you here.
            </p>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {ABOUT.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
