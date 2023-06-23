import Glider from "react-glider";
import "glider-js/glider.min.css";
import React from "react";
import ArtistCarsoul from "./ArtistCarsoul";

const SelectArtist = () => {
  const teams = [
    {
      photo: "/b1hariharan.png",
      name: "Padman Shri Hariharan",
      proffesion: "Legendary Singer",
    },

    {
      photo: "/b2kamal.png",
      name: "Kamal Khan",
      proffesion: "Punjabi Singer",
    },

    {
      photo: "/b3master.png",
      name: "Master Saleem",
      proffesion: "Punjabi Singer",
    },
    {
      photo: "/b4jasbir.png",
      name: "Jasbir Jassi",
      proffesion: "Punjabi Singer",
    },
    {
      photo: "/b5khan.png",
      name: "Khan Saab",
      proffesion: "Punjabi Singer",
    },
    {
      photo: "/b6mcsq.png",
      name: "MC Square",
      proffesion: "Rapper",
    },
    {
      photo: "/b7king.png",
      name: "Jasbir Jassi",
      proffesion: "Punjabi Singer",
    },
    {
      photo: "/b8gurdas.png",
      name: "KING",
      proffesion: "Rapper",
    },
    {
      photo: "/b9neeraj.png",
      name: "Gurdas Maan",
      proffesion: "Indian Playback Singer",
    },
    {
      photo: "/b10ashu.png",
      name: "Neeraj Dhall",
      proffesion: "Singer & Performer",
    },
    {
      photo: "/b11indian.png",
      name: "Indian Ocean Band",
      proffesion: "Musical Band",
    },
    {
      photo: "/b12jyoti.png",
      name: "Jyoti Nooran",
      proffesion: "Punjabi Singer",
    },
    {
      photo: "/b13astitva.png",
      name: "Astitva The Band",
      proffesion: "Musical Band",
    },
    {
      photo: "/b14salman.png",
      name: "Salman Ali",
      proffesion: "Singer & Performer",
    },
    {
      photo: "/b15mohit.png",
      name: "Mohit Chopra",
      proffesion: "Singer & Performer",
    },
    {
      photo: "/b16sonu.png",
      name: "Sonu Gill",
      proffesion: "Singer & Performer",
    },
    {
      photo: "/b17sonu.png",
      name: "Sonu Kakkar",
      proffesion: "Singer",
    },
    {
      photo: "/b18bismil.png",
      name: "Bismil",
      proffesion: "Singer & Performer",
    },
  ];
  return (
    <div>
      <div
        className="sm:h-auto m-10 rounded-xl border border-zinc-950 bg-gray-50 bg-gradient-to-br from-neutral-50 to-rose-50"
        style={{
          background:
            " radial-gradient(50% 282.15% at 50% 55.14%, #FFDADA 0%, #FCE8E8 46.34%, #FFFFFF 100%)",
        }}
      >
        <div className=" ">
          <h1 className="font-extrabold p-2 text-3xl text-center md:text-2xl">
            Select Artist
            <div className="mx-10">
              <ArtistCarsoul {...teams} className="" />
            </div>
          </h1>
        </div>

        <div className="-mt-7 mb-4">
          <div className=" sm:flex  mx-8">
            <div className="grow  ">
              <label for="default-input" className="block mb-2 text-sm " />
              <input
                type="text"
                id="default-input"
                placeholder="Message..."
                className="w-full h-12 sm:rounded-l-lg border-2 border-black sm:border-r-0 !outline-none"
              />
            </div>
            <div className="grow-0 w-28 sm:w-[20%] h-12  p-2 sm:rounded-r-lg bg-white border-2 border-black sm:border-l-0 text-center  mt-2  mx-auto sm:mx-0">
              <div className=" bg-black h-full w-full  rounded-md">
                <button className="text-white p-1">Submit</button>
              </div>
            </div>
          </div>
          {/* <div>
            <div className="flex flex-col p-3  w-full">
              <div className="grid grid-flow-row sm:grid-flow-col">
                <div
                // style={{
                //   marginRight: 20,
                // }}
                >
                  <label for="default-input" className="block mb-2 text-sm " />
                  <input
                    type="text"
                    id="default-input"
                    placeholder="Message..."
                    className="w-[30] sm:w-[160%] h-12 rounded-lg p-2  mx-3"
                  />
                </div>
                <div className="w-[50%] h-8 bg-black rounded-md text-center  my-4 relative right-0 mx-auto sm:mx-0">
                  <button className="text-white p-1">Submit</button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SelectArtist;
