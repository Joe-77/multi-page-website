import bloger from "../assets/image-blogr.jpg";
import builder from "../assets/image-builder.jpg";
import camp from "../assets/image-camp.jpg";
import photon from "../assets/image-photon.jpg";
import express from "../assets/image-express.jpg";
import transfer from "../assets/image-transfer.jpg";
import airFilter from "../assets/image-airfilter.jpg";
import cam from "../assets/image-eyecam.jpg";
import face from "../assets/image-faceit.jpg";
import todo from "../assets/image-todo.jpg";
import loop from "../assets/image-loopstudios.jpg";
import brown from "../assets/image-change.jpg";
import water from "../assets/image-boxed-water.jpg";
import science from "../assets/image-science.jpg";
import canada from "../assets/illustration-canada.svg";
import australia from "../assets/illustration-australia.svg";
import uk from "../assets/illustration-united-kingdom.svg";
import mapCanada from "../assets/image-map-canada.png"
import mapAU from "../assets/image-map-australia.png"
import mapUK from "../assets/image-map-united-kingdom.png"

export const webApp = [
  {
    id: 1,
    img: express,
    name: "EXPRESS",
    title: "A multi-carrier shipping website for ecommerce businesses",
  },
  {
    id: 2,
    img: transfer,
    name: "TRANSFER",
    title: "Site for low-cost money transfers and sending money within seconds",
  },
  {
    id: 3,
    img: photon,
    name: "PHOTON",
    title:
      "A state-of-the-art music player with high-resolution audio and DSP effects",
  },
  {
    id: 4,
    img: builder,
    name: "BUILDER",
    title: "Connects users with local contractors based on their location",
  },
  {
    id: 5,
    img: bloger,
    name: "BLOGR",
    title: "Blogr is a platform for creating an online blog or publication",
  },
  {
    id: 6,
    img: camp,
    name: "CAMP",
    title: "Get expert training in coding, data, design, and digital marketing",
  },
];

export const app = [
  {
    id: 1,
    img: airFilter,
    name: "AIRFILTER",
    title:
      "Solving the problem of poor indoor air quality by filtering the air",
  },
  {
    id: 2,
    img: cam,
    name: "EYECAM",
    title:
      "Product that lets you edit your favorite photos and videos at any time",
  },
  {
    id: 3,
    img: face,
    name: "FACEIT",
    title: "Get to meet your favorite internet superstar with the faceit app",
  },
  {
    id: 4,
    img: todo,
    name: "TODO",
    title: "A todo app that features cloud sync with light and dark mode",
  },
  {
    id: 5,
    img: loop,
    name: "LOOPSTUDIOS",
    title: "A VR experience app made for Loopstudios",
  },
];

export const graphics = [
  {
    id: 1,
    img: brown,
    name: "TIM BROWN",
    title: "A book cover designed for Tim Brown’s new release, ‘Change’",
  },
  {
    id: 2,
    img: water,
    name: "BOXED WATER",
    title: "A simple packaging concept made for Boxed Water",
  },
  {
    id: 3,
    img: science,
    name: "SCIENCE!",
    title: "A poster made in collaboration with the Federal Art Project",
  },
];

export const country = [
  {
    id: 1,
    name: "canada",
    location: "3886 Wellington StreetToronto, Ontario M9C 3J5",
    img: canada,
    place: "Central",
    phone: "+1 253-863-8967",
    mail: "contact@designo.co",
    map : mapCanada
  },
  {
    id: 2,
    name: "australia",
    location: "19 Balonne Street New South Wales 2443",
    img: australia,
    place: "AU",
    phone: "(02) 6720 9092",
    mail: "contact@designo.au",
    map : mapAU
  },
  {
    id: 3,
    name: "united kingdom",
    location: "13 Colorado Way Rhyd-y-fro SA8 9GA",
    img: uk,
    place: "UK",
    phone: "078 3115 1400",
    mail: "contact@designo.uk",
    map : mapUK
  },
];
