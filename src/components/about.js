import React from "react";
import Team from "./team";
import { Link } from "react-router-dom";
import ktm from "../assets/ktm_show.JPG";
import glow_run from "../assets/glow_run.JPG";
import science from "../assets/science.jpg";
import our_story from "../assets/our_story.JPG";

function About() {
  return (
    <>
      <div className="about-page">
        <aside
          id="about-header"
          className="about-header-image about-header-medium my-auto md:min-h-[80vh] md:bg-center"
        >
          <div className="join-sticker py-auto">
            <a href="/contact" className="sticky">
              Join Us
            </a>
          </div>
          <div className="back-to-top">
            <a href="#about-header" className="sticky">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  fill="var(--ci-primary-color, #ffffff"
                  points="390.624 150.625 256 16 121.376 150.625 144.004 173.252 240.001 77.254 240.001 495.236 272.001 495.236 272.001 77.257 367.996 173.252 390.624 150.625"
                  className="ci-primary"
                />
              </svg>
            </a>
          </div>
          <div className="flex justify-center md:mt-6">
            <div className="about-header-inner md:max-w-[750px] md:h-[30vh] mx-auto text-center">
              <h1 className="text-center py-4 !pb-0 font-bold md:mt-4 text-3xl">
                About Us
              </h1>
              <p className="mx-auto w-3/4 mt-2 md:mt-6 leading-5 md:leading-8 md:text-2xl text-sm overflow-auto mb-2">
                Club Twenty is a student organization run by students, for the
                students established in 2017.
              </p>
            </div>
          </div>
        </aside>
        <div className="about-heads md:px-16">
          <ul className="list-none ">
            <li>
              <a href="#who-we-are">Who we are</a>
            </li>
            <li>
              <a href="#story">Our Story</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <Link to="/events">Past Events</Link>
            </li>
          </ul>
        </div>
        <div id="who-we-are" className="p-8 w-full">
          <h1 className=" text-4xl text-center mt-6 font-semibold text-[#41cea1]">
            Who we are
          </h1>
          <p className="text-center text-lg leading-8 mt-6">
            Club Twenty is a student organization run by the students, for the
            students. It was established in 2017. This program goes beyond the
            typical conventions of student-run groups and is grounded in the
            idea of developing leadership growth and competency.
          </p>
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-0 md:px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <iframe
                  className="object-cover object-center w-full h- lg:w-[580px] lg:h-[315px]"
                  src="https://www.youtube.com/embed/Y9-wdhbG5aQ?&autoplay=1&mute=1&controls=0&loop=1"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay;&autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#41cea1]">
                  Our main goal
                </h1>
                <p className="mb-8 leading-relaxed">
                  Its main goal is to increase and encourage the interest and
                  abilities of its members in a variety of extracurricular
                  activities, bring up a culture of holistic growth. Up to this
                  point, our organization has hosted numerous significant and
                  national events.
                </p>
                <div className="flex justify-center">
                  <Link to="/contact">
                    <button className="inline-flex text-white bg-[#4556B3] border-0 py-2 px-6 focus:outline-none hover:bg-[#364494] rounded text-lg">
                      Join Us
                    </button>
                  </Link>
                  <Link to="/events">
                    <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                      Events
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <div className="club-count" id="story">
            <section className="text-gray-600 body-font">
              <div className="container px-0 md:px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#41cea1]">
                    Our Story
                  </h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Club Twenty's journey began in 2017, aiming to nurture
                    student leadership and holistic growth. Hosting 70+ events,
                    including Indian Science Congress and NASA, the club's Tier
                    5 status reflects its dedication to fostering student
                    development through diverse activities.
                  </p>
                </div>
                <section class="text-gray-600 body-font">
                  <div class="container md:px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex flex-wrap w-full">
                      <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                        <div class="flex relative pb-12">
                          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                          </div>
                          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                          </div>
                          <div class="flex-grow pl-4">
                            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                              Inception of a Vision
                            </h2>
                            <p class="leading-relaxed">
                              Founded in 2017, Club Twenty emerged with a
                              purpose – to cultivate leadership and holistic
                              growth, transcending traditional student-run
                              groups.
                            </p>
                          </div>
                        </div>
                        <div class="flex relative pb-12">
                          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                          </div>
                          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                          </div>
                          <div class="flex-grow pl-4">
                            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                              Eventful Evolution
                            </h2>
                            <p class="leading-relaxed">
                              With 70+ events, including Indian Science Congress
                              and NASA, the club showcased its ability to
                              orchestrate significant national gatherings.
                            </p>
                          </div>
                        </div>
                        <div class="flex relative pb-12">
                          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                          </div>
                          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <circle cx="12" cy="5" r="3"></circle>
                              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                            </svg>
                          </div>
                          <div class="flex-grow pl-4">
                            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                              Fostering Participation
                            </h2>
                            <p class="leading-relaxed">
                              Glow Run, Race for Grace, Freshmen Induction –
                              drawing 2000+ participants, each event fosters
                              shared interests and holistic development.
                            </p>
                          </div>
                        </div>
                        <div class="flex relative pb-12">
                          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                          </div>
                          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                          </div>
                          <div class="flex-grow pl-4">
                            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                              Aspirations Unveiled
                            </h2>
                            <p class="leading-relaxed">
                              Looking ahead, Club Twenty envisions a
                              National-level marathon, State-level sports, Glow
                              Run 2, and a Fitness talk.
                            </p>
                          </div>
                        </div>
                        <div class="flex relative">
                          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                              <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                          </div>
                          <div class="flex-grow pl-4">
                            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                              Cultivating Excellence
                            </h2>
                            <p class="leading-relaxed">
                              Diverse talents thrive, mentoring under seniors
                              and peers. Dedication propels the club to Tier 5,
                              a testament to ongoing commitment to holistic
                              growth.
                            </p>
                          </div>
                        </div>
                      </div>
                      <img
                        class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
                        src={our_story}
                        alt="Story"
                      />
                    </div>
                  </div>
                </section>
                <div className="flex flex-wrap -m-4 text-center">
                  <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="text-[#4556B3] w-12 h-12 mb-3 inline-block"
                        viewBox="0 0 24 24"
                      >
                        <svg
                          fill="rgb(99 102 241)"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 495.61 495.61"
                        >
                          <g>
                            <g>
                              <path
                                d="M193.833,412.266c-14.348-3.395-25.841-15.27-28.009-30.749c-0.674-4.814-0.376-9.538,0.728-13.982
			c-7.126,2.166-13.031,1.761-16.417,1.165l5.806,47.199c1.284,10.442,10.79,17.867,21.235,16.583
			C187.277,431.24,194.53,422.299,193.833,412.266z"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="M184.496,179.927l-6.617-19.629l4.019-21.246c2.429-12.846-6.014-25.228-18.86-27.658l-41.478-7.844
			c-9.883-1.869-19.488,2.703-24.5,10.759l32.372,0.76l-65.25,13.713c-5.237,1.102-9.524,4.748-11.482,9.657l-23.49,58.918
			c-3.226,8.088,0.667,17.359,8.867,20.627c8.046,3.204,17.351-0.651,20.627-8.867l20.338-51.012h0.001l59.089-12.418
			l-47.087,23.465l-11.384,28.551l-7.26,44.244c0.004,0.248-0.011,0.493,0.003,0.744l3.319,60.77l-59.313,8.306
			c-10.42,1.46-17.683,11.089-16.224,21.509c1.456,10.397,11.062,17.686,21.51,16.225l76.647-10.736
			c9.801-1.373,16.92-10.023,16.38-19.907l-3.804-69.627l9.91,1.874l18.48,55.158c6.408-6.553,16.827-15.537,32.115-24.085
			l-10.609-31.664l6.724-35.551c4.379,2.282,9.183,2.302,13.255,0.654l26.484-10.717c17.671-44.325,15.701-39.425,16.301-40.791
			L184.496,179.927z"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <circle cx="157.128" cy="61.736" r="35.041" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="M304.45,363.835l-2.083-38.128c-15.333-1.348-28.871-1.31-40.758-0.32l1.202,22.008l-63.326,8.869
			c-11.125,1.558-18.88,11.841-17.322,22.965c1.559,11.129,11.844,18.879,22.965,17.322l81.834-11.463
			C297.427,383.622,305.026,374.387,304.45,363.835z"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="M388.833,462.477l-12.702-103.255c-0.166-1.353-0.469-2.685-0.902-3.979l-8.626-25.745
			c-13.984,1.251-28.455,0.832-43.326-1.265l12.728,37.989l12.451,101.222c1.372,11.148,11.518,19.078,22.672,17.704
			C382.278,483.777,390.205,473.627,388.833,462.477z"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <circle cx="349.721" cy="89.322" r="37.413" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="M455.504,202.776c-3.4-8.402-13.151-12.935-22.032-9.337l-54.53,22.067l-7.064-20.957l4.29-22.684
			c2.593-13.715-6.421-26.936-20.136-29.53l-44.284-8.375c-10.552-1.996-20.805,2.885-26.158,11.487l34.563,0.811l-69.665,14.641
			h-0.001c-5.453,1.147-10.132,4.976-12.258,10.311l-25.079,62.906c-3.439,8.612,0.703,18.528,9.467,22.02
			c8.596,3.427,18.531-0.714,22.022-9.468c4.166-10.449,17.555-44.031,21.714-54.463l63.088-13.258L279.169,204l-19.027,53.237
			c21.457-1.249,46.977-0.023,71.343,3.634c9.622,1.444,18.822,1.822,27.632,1.151l1.72-9.098c4.525,2.351,9.652,2.508,14.155,0.685
			c7.956-3.219,63.265-25.602,71.175-28.803C454.829,221.302,459.009,211.438,455.504,202.776z"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="M500.426,166.296c-8.865-2.956-18.448,1.835-21.404,10.7c-0.099,0.295-10.11,29.805-34.128,57.294
			c-31.165,35.668-70.172,50.272-115.936,43.403c-133.73-20.085-181.587,44.719-183.562,47.491
			c-4.852,6.829-5.204,16.914,2.398,24.501c11.635,11.609,25.165-4.87,25.165-4.87l0.007,0.004
			c1.204-1.506,10.985-13.165,32.494-22.914c21.572-9.778,59.638-19.582,118.475-10.749c57.101,8.573,107.743-10.309,146.442-54.602
			c28.44-32.55,40.259-67.389,40.747-68.857C514.082,178.834,509.291,169.252,500.426,166.296z"
                              />
                            </g>
                          </g>
                        </svg>
                      </svg>
                      <h2 className="title-font font-medium text-3xl text-gray-900">
                        10+
                      </h2>
                      <p className="leading-relaxed">Marathons</p>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="text-[#4556B3] w-12 h-12 mb-3 inline-block"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                      </svg>
                      <h2 className="title-font font-medium text-3xl text-gray-900">
                        1K+
                      </h2>
                      <p className="leading-relaxed">Members</p>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="text-[#4556B3] w-12 h-12 mb-3 inline-block"
                        viewBox="0 0 24 24"
                      >
                        <svg
                          fill="rgb(99 102 241)"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 495.61 495.61"
                        >
                          <path
                            d="M441.899,0H53.754C24.224,0,0.043,24.202,0.043,53.754v388.102c0,29.574,24.181,53.754,53.711,53.754h388.102
				c29.574,0,53.711-24.224,53.711-53.754V53.754C495.632,24.202,471.429,0,441.899,0z M427.921,44.414
				c13.978,0,25.367,11.346,25.367,25.367s-11.325,25.367-25.367,25.367c-14.043,0-25.367-11.346-25.367-25.367
				S413.922,44.414,427.921,44.414z M348.778,44.393c13.999,0,25.389,11.346,25.389,25.389S362.799,95.17,348.778,95.17
				s-25.389-11.346-25.389-25.389S334.778,44.393,348.778,44.393z M454.971,449.514H40.747V131.56h414.224V449.514z"
                          />
                          <rect
                            x="128.13"
                            y="317.047"
                            width="79.229"
                            height="79.208"
                          />
                          <rect
                            x="291.551"
                            y="317.047"
                            width="79.251"
                            height="79.208"
                          />
                          <rect
                            x="128.13"
                            y="188.291"
                            width="79.229"
                            height="79.186"
                          />
                          <rect
                            x="291.551"
                            y="188.291"
                            width="79.251"
                            height="79.186"
                          />
                        </svg>
                      </svg>
                      <h2 className="title-font font-medium text-3xl text-gray-900">
                        100+
                      </h2>
                      <p className="leading-relaxed">Events</p>
                    </div>
                  </div>
                  <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="text-[#4556B3] w-12 h-12 mb-3 inline-block"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                      <h2 className="title-font font-medium text-3xl text-gray-900">
                        6+
                      </h2>
                      <p className="leading-relaxed">Years of Trust</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div id="team">
        <Team />
      </div>

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
    </>
  );
}

export default About;
