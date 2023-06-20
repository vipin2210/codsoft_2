import React from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
const ArtistCarsoul = () => {
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
    <Glider
      className="glider-container p-8  "
      // draggable
      scrollPropagate
      hasArrows
      //hasDots
      itemWidth={40}
      slidesToShow={1}
      rewind
      exactWidth
      draggable={true}
    >
      {teams.map((item, i) => (
        <img
          class="sm:h-56 sm:w-56 w-48 h-48 sm:mx-12 my-2 rounded-full  border-black border-2 "
          src={item.photo}
          alt="user image"
        />
      ))}
    </Glider>
  );
};

export default ArtistCarsoul;
