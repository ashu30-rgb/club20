import React from "react";
import "../assets/main.css";
import nikunj from "../assets/team/Nikunj.jpg";
import khushi from "../assets/team/khushi.jpg";
import ronit from "../assets/team/ronit.jpg";
import sachin from "../assets/team/sachin.jpg";
import lakshay from "../assets/team/lakshay.jpg";
import vivek_founder from "../assets/team/vivek_founder.jpg";
import Sristhi from "../assets/team/shrishti_hr.jpg";
import ishkrit from "../assets/team/ISHKRIT.jpg";
import kritika from "../assets/team/kritika.jpg";
import govind from "../assets/team/goving.jpg";
import sohom from "../assets/team/sohom.jpg";
import dev from "../assets/team/dev.jpg";
import faculty from "../assets/team/faculty.jpg";

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
                  src={faculty}
                />
                <div className="flex-grow">
                  <h2 className="text-[#5ACAA7] title-font font-medium">
                     Jasmeen Kaur
                  </h2>
                  <p className="text-gray-500">Faculty Facilitator</p>
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
                  <p className="text-gray-500">CEO</p>
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
                  <p className="text-gray-500">Co - CEO</p>
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
                  src={Sristhi}
                />
                <div className="flex-grow">
                  <h2 className="text-[#5ACAA7] title-font font-medium">
                  Sristhi Palsra
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
                  <p className="text-gray-500">Event Management Head</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={ishkrit}
                />
                <div className="flex-grow">
                  <h2 className="text-[#5ACAA7] title-font font-medium">
                  Ishkrit Singh
                  </h2>
                  <p className="text-gray-500">Marketing Head</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={kritika}
                />
                <div className="flex-grow">
                  <h2 className="text-[#5ACAA7] title-font font-medium">
                   Kritika Singh
                  </h2>
                  <p className="text-gray-500">Social Media Head</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={sohom}
                />
                <div className="flex-grow">
                  <h2 className="text-[#5ACAA7] title-font font-medium">
                    Sohom Das
                  </h2>
                  <p className="text-gray-500">Media Head</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={dev}
                />
                <div className="flex-grow">
                  <h2 className="text-[#5ACAA7] title-font font-medium">
                    Dev Dixit
                  </h2>
                  <p className="text-gray-500">Graphic Designing Head</p>
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
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={govind}
                />
                <div className="flex-grow">
                  <h2 className="text-[#5ACAA7] title-font font-medium">
                    Govind
                  </h2>
                  <p className="text-gray-500">Technical Head</p>
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
