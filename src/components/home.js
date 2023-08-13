import React from "react";
import "../assets/main.css";
import { Link } from "react-router-dom";
import img1 from "../assets/gallery/1.JPG";
import img2 from "../assets/gallery/2.JPG";
import img3 from "../assets/gallery/3.JPG";
import img4 from "../assets/gallery/4.jpg";
import img5 from "../assets/gallery/5.jpg";
import img6 from "../assets/gallery/6.JPG";
import ashu from "../assets/gallery/ashu.jpg";
import rakesh from "../assets/gallery/rakesh.jpg";
import ishita from "../assets/gallery/ishita.jpg";
import carousel_1 from "../assets/carousel_1.jpg";
import carousel_2 from "../assets/carousel_2.JPG";
import carousel_3 from "../assets/carousel_3.jpg";
import ktm from "../assets/ktm_show.JPG";
import glow_run from "../assets/glow_run.JPG";
import science from "../assets/science.jpg";
import hexo from "../assets/sponsors/hexo tech.png";
import nivia from "../assets/sponsors/Nivia png.png";
import oppo from "../assets/sponsors/oppo png.png";
import sktm from "../assets/sponsors/sktm.png";
import re from "../assets/sponsors/royal Enfield png.png";
import toyota from "../assets/sponsors/Toyota png.png";
import decathlon from "../assets/sponsors/decathlon.png";
import lakme from "../assets/sponsors/lakme.png";
import bajaj from "../assets/sponsors/bajaj.png";
import sbi from "../assets/sponsors/Sbi.png";

import { Carousel, Collapse, initTE } from "tw-elements";


function Home() {
  initTE({ Carousel });
  initTE({ Collapse });

  return (
    <div id="home">

{/* Carousel */}
      <div
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
      </div>

{/* What we do */}
      <section className="text-gray-600 body-font">
        <div className="container px-0 md:!px-5 py-5 md:py-24 mx-auto">
          <div className="text-center">
            <h1 className="!text-3xl md:!text-4xl font-medium text-center title-font text-[#41cea1] drop-shadow-sm mb-4">
              What We do
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Established in 2017, Club Twenty drives student leadership and
              holistic growth through 70+ events like Indian Science Congress.
              Tier 5 status showcases commitment to student development and
              diverse activities.
            </p>
          </div>
        </div>
      </section>

{/* Gallery Collage */}
      <div className="container mx-auto  px-0 md:px-16 py-2 lg:px-32 lg:pt-24 mb-4 md:mb-10">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={img1}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={img2}
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={img3}
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={img4}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={img5}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
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
              <div className="w-24 h-full bg-#4556B3]"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-[#41cea1] font-medium title-font text-2xl mb-2 sm:mb-0">
                Our Past events
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Certainly! Here are some of the notable past events meticulously
                organized by the proactive members of Club Twenty, showcasing
                their dedication to holistic growth and fostering leadership
                skills among students:
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={glow_run}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Glow Run
              </h2>
              <p className="text-base leading-relaxed mt-2">
                A national event, Night marathon, supporting and spreading
                awareness about a Fit india Campaign and also 50k+ trees were
                donated by Club20 to support farmes in south india
              </p>
              <Link
                to="/events"
                className="text-[#4556B3] inline-flex items-center mt-3"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={ktm}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                KTM Stunt Show
              </h2>
              <p className="text-base leading-relaxed mt-2">
                KTM stunt show orgainsed by Club20 association with KTM.
              </p>
              <Link
                to="/events"
                className="text-[#4556B3] inline-flex items-center mt-3"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={science}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Science Exhibition
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Science exhibition with 15k+ delegates held in presence of
                honorable Prime Minister Shri. Narendra modi ji
              </p>
              <Link
                to="/events"
                className="text-[#4556B3] inline-flex items-center mt-3"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
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
              <div className="w-24 h-full bg-#4556B3]"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-[#41cea1] font-medium title-font text-2xl mb-2 sm:mb-0">
                Our Partners and Sponsors
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Club Twenty extends its heartfelt gratitude to our esteemed
                sponsors whose unwavering support fuels the success of our
                initiatives. These dedicated partners share our vision of
                fostering holistic growth and leadership development among
                students.
              </p>
            </div>
          </div>
          <div className="sponsors grid grid-cols-2 md:grid-cols-5 gap-5">
            <div className="col-span-1 px-4 flex flex-col justify-center items-center">
              <img src={hexo} alt="Hexo Tech" />
            </div>
            <div className="col-span-1 px-4 flex flex-col justify-center items-center">
              <img src={nivia} alt="Nivia" />
            </div>
            <div className="col-span-1 px-4 flex flex-col justify-center items-center">
              <img src={oppo} alt="Oppo" />
            </div>
            <div className="col-span-1 px-4 flex flex-col justify-center items-center">
              <img src={sktm} alt="KTM" />
            </div>
            <div className="col-span-1 px-4 flex flex-col justify-center items-center">
              <img src={re} alt="Royal Enfield" />
            </div>
            <div className="col-span-1 px-4 flex flex-col justify-center items-center">
              <img src={toyota} alt="Toyota" />
            </div>
            <div className="col-span-1 px-4 flex flex-col justify-center items-center">
              <img src={decathlon} alt="Decathlon" />
            </div>
            <div className="col-span-1 px-4 flex flex-col justify-center items-center">
              <img className="my-auto" src={lakme} alt="Lakme" />
            </div>
            <div className="col-span-1 px-4 flex flex-col justify-center items-center">
              <img src={bajaj} alt="Bajaj" />
            </div>
            <div className="col-span-1 px-4 flex flex-col justify-center items-center">
              <img width="75%" src={sbi} alt="SBI" />
            </div>
          </div>
        </div>
      </section>


{/* Upcoming Events */}
      <section className="text-gray-600 body-font">
        <div className="container px-0 md:!px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-[#41cea1] mb-4">
              Our Upcoming Events
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Stay tuned for an array of engaging experiences as Club Twenty
              gears up for its forthcoming events.Join us in these endeavors as
              we continue to shape a dynamic and vibrant community dedicated to
              growth and excellence.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
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
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
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
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">GLOW RUN 2.O</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">FITNESS TALK</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">YOGA SESSION</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
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
            <button className="flex mx-auto mt-16 text-white bg-[#4556B3] border-0 py-2 px-8 focus:outline-none hover:bg-[#364494] rounded text-lg">
              Past Events
            </button>
          </Link>
        </div>
      </section>

      <hr />

{/* Testimonials */}
      <section className="text-neutral-700 dark:text-neutral-300 m-4 !my-12 lg:!my-24 lg:!mx-16">
        <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
          <h3 className="mb-6 text-3xl font-bold text-[#41cea1]">
            Testimonials
          </h3>
          <p className="mb-6 pb-2 md:mb-12 md:pb-0">
            Explore participant insights on Club Twenty's impactful events like
            the Indian Science Congress and Glow Run, showcasing its role in
            fostering personal growth and inclusive campus culture.
          </p>
        </div>

        <div className="grid gap-6 text-center md:grid-cols-3">
          <div>
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#5ACAA7]"></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img src={ashu} alt="Testimonial" />
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

          <div>
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#4556B3]"></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img src={rakesh} alt="Testimonial" />
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

          <div>
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#00A5C5]"></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img src={ishita} alt="Testimonial" />
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
      <div className="accordian m-4 !mt-8 !mb-20">
        <div id="accordionFlushExample">
          <div className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 className="mb-0" id="flush-headingOne">
              <button
                className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                What is the main objective of Club Twenty?
                <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
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
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="!visible border-0"
              data-te-collapse-item
              data-te-collapse-show
              aria-labelledby="flush-headingOne"
              data-te-parent="#accordionFlushExample"
            >
              <div className="px-5 py-4">
                Club Twenty aims to foster student leadership and holistic
                growth by organizing diverse extracurricular activities,
                providing opportunities for skill development, and creating a
                culture of all-around development.
              </div>
            </div>
          </div>
          <div className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 className="mb-0" id="flush-headingTwo">
              <button
                className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Can you provide examples of events organized by Club Twenty?
                <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
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
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="!visible hidden border-0"
              data-te-collapse-item
              aria-labelledby="flush-headingTwo"
              data-te-parent="#accordionFlushExample"
            >
              <div className="px-5 py-4">
                Certainly! Club Twenty has orchestrated significant events like
                the Indian Science Congress, National Annual Convention of the
                National Association for architecture students (NASA), Glow Run,
                Race for Grace, and more, engaging over 2000 participants in
                total.
              </div>
            </div>
          </div>
          <div className="rounded-none border border-b-0 border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 className="mb-0" id="flush-headingThree">
              <button
                className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                How does Club Twenty facilitate skill development?
                <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
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
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="!visible hidden"
              data-te-collapse-item
              aria-labelledby="flush-headingThree"
              data-te-parent="#accordionFlushExample"
            >
              <div className="px-5 py-4">
                The club's diverse talent pool creates an environment for
                learning and sharing skills. Members can enrich their abilities
                through interaction with experienced seniors and fellow peers,
                contributing to their personal growth journey.
              </div>
            </div>
          </div>
          <div className="rounded-none border border-b-0 border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
            <h2 className="mb-0" id="flush-headingFour">
              <button
                className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                How can I join Club Twenty and become a member?
                <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
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
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="!visible hidden"
              data-te-collapse-item
              aria-labelledby="flush-headingFour"
              data-te-parent="#accordionFlushExample"
            >
              <div className="px-5 py-4">
                Joining Club Twenty is a fantastic decision! Membership details
                are usually provided through recruitment drives or announcements
                at the beginning of each academic year. Stay tuned to the club's
                official communications and social media channels for updates on
                how to become a part of this dynamic community focused on
                leadership and holistic growth.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
