import localfont from "next/font/local";

export const zodiak_italics = localfont({
  src: [
    {
      path: "../public/fonts/Zodiak-Italic.ttf",
      weight: "400",
    },
  ],
  variable: "--font-zodiak-italics",
});

export const zodiak_light = localfont({
  src: [
    {
      path: "../public/fonts/Zodiak-Light.ttf",
      weight: "300",
    },
  ],
  variable: "--font-zodiak-light",
});

export const zodiak_regular = localfont({
  src: [
    {
      path: "../public/fonts/Zodiak-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-zodiak-regular",
});

export const projectList = [
  {
    title: "Notion Clone",
    about: "This is about the project",
  },
  {
    title: "Redraw",
    about: "This is about the project",
  },
  {
    title: "Meon Tradding",
    about: "This is about the project",
  },
  {
    title: "Malnutrition",
    about: "This is about the project",
  },
  {
    title: "Google Meet Clone",
    about: "This is about the project",
  },
  {
    title: "code echo",
    about: "This is about the project",
  },
];
