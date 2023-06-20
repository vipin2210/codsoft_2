import React from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
const ArtistCarsoul = () => {
  const teams = [
    {
      photo: "/b6mcsq.png",
      name: "MC Square",
      proffesion: "Rapper",
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
      photo: "/b5khan.png",
      name: "Khan Saab",
      proffesion: "Punjabi Singer",
    },
    {
      photo: "/b4jasbir.png",
      name: "Jasbir Jassi",
      proffesion: "Punjabi Singer",
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
      photo: "/b1hariharan.png",
      name: "Padman Shri Hariharan",
      proffesion: "Legendary Singer",
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
    <Glider
      className="glider-container px-5 pt-5"
      // draggable
      // scrollPropagate
      hasArrows
      itemWidth={200}
      slidesToShow={4}
      slidesToScroll={4}
      rewind
      exactWidth
      draggable={true}
      // responsive={[
      //   {
      //     breakpoint: 850,
      //     settings: {
      //       slidesToShow: 2,
      //     },
      //   },
      //   {
      //     breakpoint: 1100,
      //     settings: {
      //       slidesToShow: 4,
      //     },
      //   },
      // ]}
    >
      {teams.map((item, i) => (
        <div className="mx-0 sm:mx-6 md:mx-7">
          <img
            class="sm:h-56 sm:w-56 w-40 h-44  my-0"
            src={item.photo}
            alt={item.name}
          />
          <div className=" relative -top-20 -sm-top-14 text-white text-center mb-0 ">
            <div className="text-center">
              <h1 className="card-title  text-sm  md:text-sm lg:text-lg text-center sm:text-xs ">
                {item.name}
              </h1>
              <h6 className=" text-sm text-center">{item.proffesion}</h6>
            </div>
          </div>
        </div>
      ))}
    </Glider>
  );
};

export default ArtistCarsoul;
