import React from "react";

const About = () => {
  return (
    <div>
      <div class="mb-12">
        <div class="container mx-auto px-4 py-16 text-center">
         <div className="mx-auto">
          <h2 class="uppercase text-4xl font-bold mb-4 text-black">About Us</h2>
          <p class="text-lg text-gray-600 mb-8 max-w-[800px] mx-auto leading-7">
            We aim to maximize every facet of your brand's strategy with our
            cutting-edge marketing management services. We customize our
            strategy to fit your specific business objectives,from creating
            campaigns and doing market research to analyzing performance.
          </p>
          </div>
        </div>
        <main class="flex flex-col md:flex-row container mx-auto px-4 md:px-24 justify-center items-start gap-8">
          <div class="w-full md:w-1/2 text-center">
            <img
              src="https://unstoptechnosolution.com/assets/aboutUs1-Dtif6asU.jpg"
              alt="About Us 1"
              class="w-3/4 max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div class="w-full md:w-1/3 text-left">
            <p class="text-lg text-bold text-gray-700 leading-7 mb-8 tracking-wider">
              These days, with products becoming more technologically advanced
              and projects becoming more managerially complex, it is essential
              to approach Product Design, Project Management, and Data
              Interoperability with intelligence. To support product development
              at every stage of its lifecycle—from conception to design to
              launch to midlife product line extension to retirement—a specific
              model must exist.
            </p>
            <div>
              <h1 class="uppercase text-blue-600 text-lg tracking-wider mb-2">
                Unstop in a nutshell
              </h1>
              <ul class="text-gray-600 text-lg tracking-wider mb-2 space-y-2">
                <li class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-circle-check-big mr-2"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  21+ yrs of Consulting &amp; System Integrator
                </li>
                <li class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-circle-check-big mr-2"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  Specialized in PLM technologies
                </li>
                <li class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-circle-check-big mr-2"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                  Global presence: USA,UK and India
                </li>
              </ul>
            </div>
          </div>
        </main>
        <main class="flex flex-row  mx-auto px-4 md:px-24 justify-between items-start pt-16 gap-8 ">
          <div class="w-full md:w-1/2 text-left">
            <h1 class="text-blue-600 text-2xl tracking-wider font-bold mb-2">
              Our Mission
            </h1>
            <p class="text-lg text-gray-700 leading-7 mb-14 tracking-wider">
              In order to help its associates build new or existing digital
              projects, Unstop Techno Solution focuses on offering Product
              Lifecycle Management (PLM), Digital Marketing, Web Development,
              and Social Media Marketing services. We achieve this by utilizing
              cutting-edge tools and technologies in conjunction with a team of
              experts who specialize in optimizing each stage of the product
              lifecycle—from concept to launch—while integrating customized
              digital marketing strategies to enhance online visibility and
              engagement.
            </p>
          </div>
          <div class="w-full md:w-1/2 text-center">
            <img
              src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?t=st=1725635625~exp=1725639225~hmac=c28445a9288db5cf1b77d2fcfc4d5e01162c824dbeecbd29e36f468497562b94&amp;w=900"
              alt="About Us 2"
              class="w-3/4 max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </main>
        <main class="flex flex-col md:flex-row container mx-auto px-4 md:px-24 justify-between items-start pt-16 ">
          <div class="w-full md:w-1/2 text-center">
            <img
              src="https://img.freepik.com/premium-photo/vision-mission-business-development-strategy-concept-virtual-screen_820340-52874.jpg?w=740"
              alt="About Us 3"
              class="w-3/4 max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div class="w-full md:w-1/2 text-left">
            <h1 class="text-blue-600 text-2xl tracking-wider font-bold mb-2">
              Our Vision
            </h1>
            <p class="text-lg text-gray-700 leading-7 mb-14 tracking-wider">
              we focus on empowering them with cutting-edge digital
              technologies. We identify their unique digital opportunities,
              devise strategic plans tailored to their needs, and prioritize the
              most impactful initiatives. By aligning their vision with
              innovative solutions, we enable manufacturers to enhance
              efficiency, streamline operations, and achieve long-term success
              in an increasingly digital world. Our mission is to guide them
              through every step of their digital transformation journey,
              ensuring they stay competitive and future-ready.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;
