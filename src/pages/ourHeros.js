import React from "react";
import bg from "../../public/ourHerosMain.png";
import ArtistCard from "@/components/ArtistCard";

function ourHeros() {
  const teams = [
    {
      photo: "/hariharann.png",
      name: "Padman Shri Hariharan",
      profession: "Singer",
    },

    {
      photo: "/kavitaa.png",
      name: "Kavita Seth",
      profession: "Singer",
    },

    {
      photo: "/Rakeshh.png",
      name: "Rakesh Bedi",
      profession: "Actor",
    },
    {
      photo: "/Nawazz.png",
      name: "Nawazuddin Siddiqui",
      profession: "Actor",
    },
  ];
  return (
    <div className="p-5 w-full ">
      <section className="">
        <div
        // className=" relative overflow-hidden bg-no-repeat bg-cover h-screen md:h-96 lg:h-screen  "
        // style={{
        //   backgroundImage: `url(${bg.src})`,

        //   // backgroundPosition: "50%",
        // }}
        >
          <img src="/ourHerosMain.png" className="w-full" />
        </div>
      </section>
      <section>
        <div className="">
          <div className=" text-3xl md:text-5xl text-center m-12">
            <h1>Our Heros</h1>
          </div>
          <div>
            <div className=" grid w-full    gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 ">
              {teams.map((item, i) => (
                <ArtistCard key={i} props={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ourHeros;
