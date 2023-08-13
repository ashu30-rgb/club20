import React from "react";
import "../assets/main.css";
import nikunj from "../assets/team/Nikunj.jpg";
import khushi from "../assets/team/khushi.jpg";
import ronit from "../assets/team/ronit.jpg";
import sachin from "../assets/team/sachin.jpg";
import lakshay from "../assets/team/lakshay.jpg";
import vivek_founder from "../assets/team/vivek_founder.jpg";
import vivek_patel from "../assets/team/vivek_patel.jpg";
import vivek_social from "../assets/team/vivek_social.jpg";

function Team() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container md:px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#41cea1]">
              Our Team
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              We have a variety of talents, which makes the club exceptional.
              While brushing up your skills you can learn a lot
              of things new things under the supervision of your seniors and
              batch mates. Thanks to their dedication and hard work, CLUB TWENTY
              has now advanced to tier 5.
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={vivek_founder}
                />
                <div className="flex-grow">
                  <h2 className="text-[#5ACAA7] title-font font-medium">
                    Vivek Yadav
                  </h2>
                  <p className="text-gray-500">Founder</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 bg-top"
                  src={nikunj}
                />
                <div className="flex-grow">
                  <h2 className="text-[#5ACAA7] title-font font-medium">
                    Nikunj Kansal
                  </h2>
                  <p className="text-gray-500">COO</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src= {sachin}
                />
                <div className="flex-grow">
                  <h2 className="text-[#5ACAA7] title-font font-medium">
                    Sachin Tiwari
                  </h2>
                  <p className="text-gray-500">Co - COO</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={khushi}
                />
                <div className="flex-grow">
                  <h2 className="text-[#5ACAA7] title-font font-medium">
                    Khushi Khandewal
                  </h2>
                  <p className="text-gray-500">PR Head</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={vivek_patel}
                />
                <div className="flex-grow">
                  <h2 className="text-[#5ACAA7] title-font font-medium">
                    Vivek Patel
                  </h2>
                  <p className="text-gray-500">HR Head</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={ronit}
                />
                <div className="flex-grow">
                  <h2 className="text-[#5ACAA7] title-font font-medium">
                    Ronit Paul
                  </h2>
                  <p className="text-gray-500">Exc. Marketing Head</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={vivek_social}
                />
                <div className="flex-grow">
                  <h2 className="text-[#5ACAA7] title-font font-medium">
                    Vivek Kumar
                  </h2>
                  <p className="text-gray-500">Exc. Social Media Head</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={lakshay}
                />
                <div className="flex-grow">
                  <h2 className="text-[#5ACAA7] title-font font-medium">
                    Lakshay
                  </h2>
                  <p className="text-gray-500">Resource Head</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
