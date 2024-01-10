import React, {useEffect} from "react";
import "../assets/main.css";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import img1 from "../assets/gallery/1.webp";
import img2 from "../assets/gallery/2.webp";
import img3 from "../assets/gallery/3.webp";
import img4 from "../assets/gallery/4.webp";
import img5 from "../assets/gallery/5.webp";
import img6 from "../assets/gallery/6.webp";
import ashu from "../assets/gallery/ashu.webp";
import rakesh from "../assets/gallery/rakesh.webp";
import ishita from "../assets/gallery/ishita.webp";
import carousel_1 from "../assets/carousel_1.jpg";
import carousel_3 from "../assets/carousel_3.jpg";
import carousel_4 from "../assets/carousel_4.jpg";
import carousel_5 from "../assets/carousel_5.jpg";
import carousel_6 from "../assets/carousel_6.jpg";
import carousel_8 from "../assets/carousel_8.jpg";
import carousel_9 from "../assets/carousel_9.jpg";
import GLOWRUN from "../assets/events/GLOWRUN ELECTRICA.jpg";
import KTM from "../assets/events/KTM STUNT SHOW.jpg";
import isc from "../assets/events/INDIAN SCIENCE CONGRESS (ICS).jpg";
import hexo from "../assets/sponsors/hexo tech.webp";
import nivia from "../assets/sponsors/Nivia png.webp";
import oppo from "../assets/sponsors/oppo png.webp";
import sktm from "../assets/sponsors/sktm.webp";
import re from "../assets/sponsors/royal Enfield png.webp";
import toyota from "../assets/sponsors/Toyota png.webp";
import decathlon from "../assets/sponsors/decathlon.webp";
import lakme from "../assets/sponsors/lakme.webp";
import bajaj from "../assets/sponsors/bajaj.webp";
import sbi from "../assets/sponsors/Sbi.webp";
import faq from "../assets/icons/FAQs-bro.svg"

import {Collapse, initTE } from "tw-elements";
import aos from 'aos';
import 'aos/dist/aos.css';


function Home() {
  initTE({ Carousel });
  initTE({ Collapse });

  useEffect(() => {
    aos.init();
  }, [])

  return (
    <div id="home">


{/* Carousel */}

<Carousel autoPlay="true" infiniteLoop="true" showThumbs={false} dynamicHeight={false} showStatus={false} showIndicators={false}>
                <div>
                    <img src={carousel_1} alt="club 20"/>
                </div>
                <div>
                    <img src={carousel_3} alt="club 20"/>
                </div>
                <div>
                    <img src={carousel_4} alt="club 20"/>
                </div>
                <div>
                    <img src={carousel_5} alt="club 20"/>
                </div>
                <div>
                    <img src={carousel_6} alt="club 20"/>
                </div>
                <div>
                    <img src={carousel_8} alt="club 20"/>
                </div>
                <div>
                    <img src={carousel_9} alt="club 20"/>
                </div>
            </Carousel>

      {/* <div
        id="carouselExampleControls"
        className="relative"
        data-te-carousel-init
        data-te-ride="carousel"
      >
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <div
            className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            data-te-carousel-active
          >
            <img
              src={carousel_1}
              className="block w-full"
              alt="Wild Landscape"
            />
          </div>
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
          >
            <img src={carousel_2} className="block w-full" alt="Camera" />
          </div>
          <div
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
          >
            <img
              src={carousel_3}
              className="block w-full"
              alt="Exotic Fruits"
            />
          </div>
        </div>

        <button
          className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleControls"
          data-te-slide="prev"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        <button
          className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleControls"
          data-te-slide="next"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div> */}

{/* What we do */}
      <section className="text-gray-600 body-font">
        <div className="container px-0 md:!px-5 py-5 md:py-24 mx-auto">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-semibold md:font-bold text-center title-font text-[#046EC1] drop-shadow-sm mb-4">
              What We do
            </h1>
            <p className="text-base lg:text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Founded in 2017, Club Twenty is a catalyst for student leadership and overall development, hosting over 100 diverse events. From marathons to EDM nights, social gatherings to sports competitions, corporate functions to cultural celebrations, we curate experiences that resonate with a wide audience.
            </p>
          </div>
        </div>
      </section>

{/* Gallery Collage */}
      <div className="container mx-auto  px-0 md:px-16 py-2 lg:px-32 lg:pt-24 mb-4 md:mb-10">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2" data-aos="zoom-in">
              <img loading=" lazy"
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={img1}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2" data-aos="zoom-in">
              <img loading=" lazy"
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={img2}
              />
            </div>
            <div className="w-full p-1 md:p-2" data-aos="zoom-in">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={img3}
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2" data-aos="zoom-in"> 
              <img loading=" lazy"
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={img4}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2" data-aos="zoom-in">
              <img loading=" lazy"
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={img5}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2" data-aos="zoom-in">
              <img loading=" lazy"
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={img6}
              />
            </div>
          </div>
        </div>
      </div>

{/* Past Events */}
      <section className="text-gray-600 body-font">
        <div className="container px-0 md:px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-[#046EC1]"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-[#046EC1] text-3xl md:text-4xl font-semibold  title-font  mb-2 sm:mb-0">
                Our Past events
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 clb-evnt-card">
                      <Link to="/events" className="">
                        <div data-aos="fade-up">
                          <img loading=" lazy" className="lg:h-48 md:h-36 w-full object-cover object-center rounded-md" src={GLOWRUN} alt="event"/>
                          <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                              Night Marathon
                            </h2>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            Glow Run
                            </h1>
                          </div>
                        </div>
                      </Link>
            </div>
            <div className="p-4 md:w-1/3 clb-evnt-card">
                      <Link to="/events" className="">
                        <div data-aos="fade-up">
                          <img loading=" lazy" className="lg:h-48 md:h-36 w-full object-cover object-center rounded-md" src={KTM} alt="event"/>
                          <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                              Stunt Show
                            </h2>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            KTM Stunt Show
                            </h1>
                          </div>
                        </div>
                      </Link>
            </div>
            <div className="p-4 md:w-1/3 clb-evnt-card">
                      <Link to="/events" className="">
                        <div data-aos="fade-up">
                          <img loading=" lazy" className="lg:h-48 md:h-36 w-full object-cover object-center rounded-md" src={isc} alt="event"/>
                          <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                              Educational
                            </h2>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            Science Exhibition
                            </h1>
                          </div>
                        </div>
                      </Link>
            </div>
          </div>
        </div>
      </section>

{/* Partners and Sponsors */}
      <section className="text-gray-600 body-font">
        <div className="container px-0 md:px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-[#046EC1]"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-[#046EC1] text-3xl md:text-4xl font-semibold title-font mb-2 sm:mb-0">
                Our Partners and Sponsors
              </h1>
              <p className="sm:w-3/5 leading-relaxed md:text-lg sm:pl-10 pl-0">
              Club Twenty expresses sincere appreciation to our valued sponsors and partners whose steadfast support propels the success of our initiatives. Aligned with our vision for fostering holistic growth and leadership development among students, these dedicated collaborators play a pivotal role in making our endeavors impactful. Together, we create a powerful synergy that amplifies the positive impact on students' lives and contributes to the success of our shared goals.
              </p>
            </div>
          </div>
          <div className="sponsors grid grid-cols-2 md:grid-cols-5 gap-5">
            <div className="col-span-1 md:px-4 flex flex-col justify-center items-center" data-aos="zoom-in">
              <img loading="lazy" className="w-full h-fit" width="170" height="170" src={hexo} alt="Hexo Tech" />
            </div>
            <div className="col-span-1 md:px-4 flex flex-col justify-center items-center" data-aos="zoom-in">
              <img loading="lazy" className="w-full h-fit" width="170" height="170" src={nivia} alt="Nivia" />
            </div>
            <div className="col-span-1 md:px-4 flex flex-col justify-center items-center" data-aos="zoom-in">
              <img loading="lazy" className="w-full h-fit" width="170" height="170" src={oppo} alt="Oppo" />
            </div>
            <div className="col-span-1 md:px-4 flex flex-col justify-center items-center" data-aos="zoom-in">
              <img loading="lazy" className="w-full h-fit" width="170" height="170" src={sktm} alt="KTM" />
            </div>
            <div className="col-span-1 md:px-4 flex flex-col justify-center items-center" data-aos="zoom-in">
              <img loading="lazy" className="w-full h-fit" width="170" height="170" src={re} alt="Royal Enfield" />
            </div>
            <div className="col-span-1 md:px-4 flex flex-col justify-center items-center"  data-aos="zoom-in">
              <img loading="lazy" className="w-full h-fit" width="170" height="170" src={toyota} alt="Toyota" />
            </div>
            <div className="col-span-1 md:px-4 flex flex-col justify-center items-center" data-aos="zoom-in">
              <img loading="lazy" className="w-full h-fit" width="170" height="170" src={decathlon} alt="Decathlon" />
            </div>
            <div className="col-span-1 md:px-4 flex flex-col justify-center items-center" data-aos="zoom-in">
              <img loading="lazy" width="170" height="170" className="my-auto w-full h-fit" src={lakme} alt="Lakme" />
            </div>
            <div className="col-span-1 md:px-4 flex flex-col justify-center items-center" data-aos="zoom-in">
              <img loading="lazy" className="w-full h-fit" width="170" height="170" src={bajaj} alt="Bajaj" />
            </div>
            <div className="col-span-1 md:px-4 flex flex-col justify-center items-center" data-aos="zoom-in">
              <img loading="lazy" height="auto" className="w-3/4 h-fit" src={sbi} alt="SBI" />
            </div>
          </div>
        </div>
      </section>


{/* Upcoming Events */}
      <section className="text-gray-600 body-font">
        <div className="container px-0 md:!px-5 py-20 mx-auto overflow-x-hidden">
          <div className="text-center mb-20">
            <h1 className="text-3xl md:text-4xl font-semibold md:font-bold text-center title-font text-[#046EC1] mb-4">
              Our Upcoming Events
            </h1>
            <p className="md:text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Explore the excitement with Club Twenty's upcoming events! Get ready for a diverse range of engaging experiences that promise to captivate and inspire. Join us on this journey as we strive to foster a dynamic and vibrant community dedicated to continuous growth and excellence. Stay tuned for what's in store, and be part of the energy that propels us forward!
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center" data-aos="fade-right">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-[#02C7A4] w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  STATE LEVEL SPORTS EVENT
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center" data-aos="fade-left">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-[#02C7A4] w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  NATIONAL LEVEL MARATHON
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center" data-aos="fade-right">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-[#02C7A4] w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">GLOW RUN 2.O</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center" data-aos="fade-left">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-[#02C7A4] w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">FITNESS TALK</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center" data-aos="fade-right">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-[#02C7A4] w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">YOGA SESSION</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center" data-aos="fade-left">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-[#02C7A4] w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  AWARENESS PROGRAM FOR SELF DEFENCE
                </span>
              </div>
            </div>
          </div>
          <Link to="/events">
            <button className="flex mx-auto mt-16 text-white bg-[#02C7A4] border-0 py-2 px-8 focus:outline-none hover:bg-[#364494] rounded text-lg">
              Past Events
            </button>
          </Link>
        </div>
      </section>

      <hr />

{/* Testimonials */}
      <section className="text-neutral-700 dark:text-neutral-300 m-4 !my-12 lg:!my-24 lg:!mx-16">
        <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
          <h3 className="mb-6 text-3xl md:text-4xl font-semibold md:font-bold text-[#046EC1]">
            Testimonials
          </h3>
          <p className="mb-6 md:text-lg pb-2 md:mb-12 md:pb-0">
          Discover what our community has to say about Club Twenty! Dive into heartfelt testimonials from our members, sharing their experiences and insights on the transformative journey within our events.
          </p>
        </div>

        <div className="grid gap-6 text-center md:grid-cols-3">
          <div data-aos="zoom-in">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#5ACAA7]"></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img loading=" lazy" className="w-full h-hull"  src={ashu} alt="Testimonial" />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Ashutosh</h4>
                <hr />
                <p className="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  Club Twenty has truly exceeded my expectations. Their events
                  like the Glow Run and Race for Grace are exceptional. The
                  club's focus on holistic growth through diverse activities is
                  commendable.
                </p>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in"> 
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#4556B3]"></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img loading=" lazy" className="w-full h-hull" src={rakesh} alt="Testimonial" />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Rakesh</h4>
                <hr />
                <p className="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  I've been a part of Club Twenty for two years now, and it's
                  been an incredible journey. The leadership opportunities and
                  skill development under seniors' guidance have shaped me
                  personally and professionally.
                </p>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#00A5C5]"></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img loading=" lazy" className="w-full h-hull" src={ishita} alt="Testimonial" />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">Ishita</h4>
                <hr />
                <p className="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  Club Twenty's dedication to student development is evident in
                  their tier 5 status. The events they organize, such as the
                  Glow Run, showcase their commitment to excellence and
                  fostering a dynamic learning community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* FAQs Accordian */}
<div className="w-screen flex items-center justify-center px-8">
  <img loading=" lazy" src={faq} alt="FAQS" data-aos="fade-up" className="w-full max-w-xl mx-auto"></img>
</div>


      <div className="accordian m-4 !mt-8 !mb-20">
      <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
            <AccordionItem data-aos="fade-right">
                <AccordionItemHeading>
                    <AccordionItemButton>
                    What Drives Club Twenty's Mission?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Club Twenty is driven by the mission to cultivate student leadership and holistic growth. Our main objective is to organize diverse extracurricular activities, providing a platform for skill development and fostering a culture of all-around personal and professional development.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem data-aos="fade-right">
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Can You Share Examples of Club Twenty's Impactful Events?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Absolutely! Club Twenty has successfully organized noteworthy events such as the Indian Science Congress, Glowrun Electrica, Race for Grace, The Fitness Talk, Sports Utsav, and more. These events have collectively engaged over 2000 participants, contributing to our vibrant and dynamic community.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem data-aos="fade-right">
                <AccordionItemHeading>
                    <AccordionItemButton>
                    How does Club Twenty facilitate skill development?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Club Twenty's diverse talent pool creates an enriching environment for skill development. Members have the opportunity to learn and share skills through interactions with experienced seniors and fellow peers, contributing significantly to their personal and professional growth.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem data-aos="fade-right">
                <AccordionItemHeading>
                    <AccordionItemButton>
                    How Can I Join Club Twenty and Become a member?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                    Joining Club Twenty is an excellent decision! Membership details are typically communicated through recruitment drives or announcements at the beginning of each academic year. Stay updated by following the club's official communications and social media channels for information on how to become part of this dynamic community focused on leadership and holistic growth.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
      </div>
      
      
    </div>
  );
}

export default Home;
