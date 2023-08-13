import React from "react";
import race_for_grace from "../assets/race_for_grace.jpg";
import nirvana from "../assets/nirvana.JPG";
import sunburn from "../assets/sunburn.JPG";
import ktm from "../assets/ktm_show.JPG";
import glow_run from "../assets/glow_run.JPG";
import health_and_fun from "../assets/health_and_fun.JPG";
import cyclathon from "../assets/cyclathon.jpg";
import enterpreneur from "../assets/epr.JPG";
import dwm from "../assets/dwm.JPG";
import science from "../assets/science.jpg";
import snd from "../assets/snd.JPG";
import bhangra from "../assets/bhangra.jpg";
import CnW from "../assets/CnW.jpg";

function Events() {
  const allEvents = [
    {
      name: "Glow Run",
      image: glow_run,
      category: "Sports",
      desc: "A national event, Night marathon, supporting and spreading awareness about a Fit india Campaign and also 50k+ trees were donated by Club20 to support farmes in south india",
      year: "2019",
      participants: "10k+",
    },
    {
      name: "Nirvana",
      image: nirvana,
      category: "EDM/Sports",
      desc: "Event of sports and e-sports for games like cricket, race, pubg, COD  with wonderful EDM night.",
      year: "2018",
      participants: "1000+",
    },
    {
      name: "Cyclothon and Walkathon",
      image: CnW,
      category: "Sports",
      desc: "Event organised with association with HDFC focussed on health and fittness for clean and healthy India.",
      year: "2018",
      participants: "500+",
    },
    {
      name: "Race for Grace",
      image: race_for_grace,
      category: "Sports",
      desc: "Race for a cause Cancer Awareness 5km marathon with largest number of participant in single event organised by student oraganisation. ",
      year: "2019",
      participants: "1600+",
    },
    {
      name: "Sunburn",
      image: sunburn,
      category: "EDM",
      desc: "EDM night with 2000+ people",
      year: "2019",
      participants: "2000+",
    },
    {
      name: "Daily World Marathon",
      image: dwm,
      category: "Sports",
      desc: "Sports event focussed on energising youth and Tandrust Punjab in the Supervision of Mr. Harbhajan Singh(Athelete)",
      year: "2019",
      participants: "1000+",
    },
    {
      name: "Indian entrepreneurship congress",
      image: enterpreneur,
      category: "Entrepreneurship",
      desc: "Event for angel investors and successful Entrepreneurs organized with contest'One in a million' contest held prize worth of 2 million dollor",
      year: "2019",
      participants: "2000+",
    },
    {
      name: "Health and Fun",
      image: health_and_fun,
      category: "Sports",
      desc: "Sports and fun games organised for workers also with dental checkup.",
      year: "2019",
      participants: "300+",
    },
    {
      name: "Science Exhibition",
      image: science,
      category: "Exhibition",
      desc: "Science exhibition with 15k+ delegates held in presence of honorable Prime Minister Shri. Narendra modi ji",
      year: "2019",
      participants: "300+",
    },
    {
      name: "Say no to drugs",
      image: snd,
      category: "Awareness camp",
      desc: "The largest drug awareness session with 2000+ participants and created a world record.",
      year: "2018",
      participants: "2200+",
    },
    {
      name: "Dance Punjab",
      image: bhangra,
      category: "Dance",
      desc: "The largest Bhangra dance consist of 4400+ people, and was achieved by Gurchan Mall aka Dhol king(UK). ",
      year: "2018",
      participants: "4400+",
    },
    {
      name: "Cyclothon",
      image: cyclathon,
      category: "Sports",
      desc: "Cycle race event held on world Environment Day",
      year: "2020",
      participants: "500+",
    },
    {
      name: "KTM Stunt show",
      image: ktm,
      category: "Sports",
      desc: "KTM stunt show orgainsed by Club20 association with KTM.",
      year: "2019",
      participants: "2000+",
    },
  ];
  return (
    <div className="relative">
        <div className="join-sticker py-auto">
            <a href="/contact" className="sticky">
              Join Us
            </a>
          </div>
          <div className="back-to-top">
            <a href="#events" className="sticky">
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
      <section className="text-gray-600 body-font" id="events">
        <div className="container md:!px-5 px-0 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-[#41cea1]">
                Club Twenty Events
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              CLUB TWENTY is a group of students, organized and established to
              promote and develop the interests and skills of members in sports
              related activities. CLUB TWENTY has organized various events in
              the university which has always gathered crowd and recognition.
              Today CLUB TWENTY has reached tier 5 with all the hardwork done so
              far. Our organization has 150+ members and are divided into groups
              on the basis of the interests of members like content writing,
              marketing, technical, social media, etc. Each group has it’s head
              who handles and assigns work to the respective members.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <section className="text-gray-600 body-font">
              <div className="container px-0 md:!px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  {allEvents.map((data) => (
                    <div className="p-4 md:w-1/3">
                      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img
                          className="lg:h-48 md:h-36 w-full object-cover object-center"
                          src={data.image}
                          alt="event"
                        />
                        <div className="p-6">
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            {data.category}
                          </h2>
                          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            {data.name}
                          </h1>
                          <p className="leading-relaxed mb-3">{data.desc}</p>
                          <div className="flex items-center flex-wrap ">
                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                              {data.year}
                            </span>
                            <span className="text-gray-400 inline-flex items-center text-sm leading-4">
                              {data.participants} <br />
                              Participants
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;
