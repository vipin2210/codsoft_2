import React from "react";

const about = () => {
  return (
    <div>
      <div>
        <div className="">
          <img className="object-fill  h-96 w-full" src="/Frame.png" />
          <div className="relative bottom-80 text-center text-6xl font-bold mt-6 text-white ">
            About Us
          </div>
          <div>

          </div>

        </div>
        <div className="p-4 relative xl:h-auto lg:h-auto mg:h-80 sm:h-60 text-center justify-center">
          <h1 className="text-4xl font-bold -mt-20 ">About Us</h1>
          <p className="text-lg mt-1 p-4">
            Help artist India was founded in January of 2018. It acknowledges and harbour the veiled, unidentified artists, availing nothing but facilitating the unrevealed talents inhabiting our society. This NGO dreams of re- establishing the sphere of talents and proclaiming the worth of any artist who behold the talent and brew it for the audience. Artists can find this organization extremely helpful and facilitating.
            Above all saving the Heritage of the India, what makes someone inspiring, is the ability to keep preserving keeping the zeal alive even when the circumstances are not favourable. The reason can be health, old age, finance, or being out of the main stream.
          </p>
          <div className="flex justify-center">
            <div className="w-48 text-start">
              <ul className="list-disc">
                <li>Talent Based Events</li>
                <li>Fund Raising Events</li>
                <li>Compaigns / Social Work</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full md:mt-20" style={{
        background: "#5C5959",
      }}>
        <div className="flex md:flex-row flex-col gap-9 p-12 m-5 ">
          <div>
            <img src="/serviceImg1.png" className="transition duration-300 ease-in-out hover:scale-110" />
          </div>
          <div>
            <img src="/serviceImg1.png" className=" transition duration-300 ease-in-out hover:scale-110" />
          </div>
          <div>
            <img src="/serviceImg1.png" className=" transition duration-300 ease-in-out hover:scale-110" />
          </div>
          <div>
            <img src="/serviceImg1.png" className=" transition duration-300 ease-in-out hover:scale-110" />
          </div>
          <div>
            <img src="/serviceImg1.png" className=" transition duration-300 ease-in-out hover:scale-110" />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 border-2 rounded-xl md:w-2/6  py-2 w-64" style={{
        background: "#A17EBE",
      }}>
        <h1 className="text-4xl text-center font-bold">CORE TEAM</h1>
      </div>

      <section className="container mx-auto ">
        <section class="relative mx-auto py-20 overflow-hidden bg-white">
          <div class="relative px-16 mx-auto max-w-7xl">
            <div class="grid w-full grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-3">
              <div class="flex flex-col items-center justify-center col-span-1">
                <div class="relative p-5">
                  <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full  bg-yellow-600"></div>
                  <img
                    class="relative z-20 w-full rounded-full"
                    src="/ashok 1.png"
                  />
                </div>

                <div class="space-y-2 text-center z-50 -mt-4">
                  <div class="space-y-1 text-lg font-medium leading-6">
                    <h3 className="rounded-full bg-violet-900 text-lg text-white px-14 py-1 ">
                      Ashok Rajput
                    </h3>
                    <p>Founder</p>
                  </div>
                </div>
              </div>

              <div class="flex flex-col items-center justify-center col-span-1">
                <div class="relative p-5">
                  <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full  bg-yellow-600"></div>
                  <img
                    class="relative z-20 w-full rounded-full"
                    src="/Taruna.png"
                  />
                </div>
                <div class="space-y-2 text-center z-50 -mt-4">
                  <div class="space-y-1 text-lg font-medium leading-6">
                    <h3 className="rounded-full bg-violet-900 text-lg text-white px-14 py-1 ">
                      Tarun Salhan
                    </h3>
                    <p>Director</p>
                  </div>
                </div>
              </div>

              <div class="flex flex-col items-center justify-center col-span-1">
                <div class="relative p-5">
                  <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full bg-yellow-600"></div>
                  <img
                    class="relative z-20 w-full rounded-full"
                    src="/Saira.png"
                  />
                </div>
                <div class="space-y-2 text-center z-50 -mt-4">
                  <div class="space-y-1 text-lg font-medium leading-6">
                    <h3 className="rounded-full bg-violet-900 text-lg text-white px-14 py-1">
                      Saira Qureshi
                    </h3>
                    <p>Creative Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default about;
