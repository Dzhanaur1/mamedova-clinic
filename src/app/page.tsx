import Image from "next/image";
import React from "react";
import PreLoader from "./(components)/PreLoader";
import Hero from "./(components)/Hero";
import Title from "./(components)/Title";
import Service from "./(components)/Service";
import Gallery from "./(components)/(Slider)";
import About from "./(components)/About";
import Sertificates from "./(components)/Sertificates";
import Contacts from "./(components)/Contacts";

export default function Home() {
  return (
    <React.Fragment>
      <PreLoader />
      <Hero />
      <Title text="Все виды операций по эстетике лица и тела " />
      <Service />
      <Gallery />
      <About />
      <Sertificates />
      <Contacts />
    </React.Fragment>
  );
}
