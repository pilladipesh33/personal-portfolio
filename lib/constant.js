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
    about: "Next.JS, Typescript, Convex, TailwindCSS",
    link: "https://github.com/pilladipesh33/Write",
  },
  {
    title: "Redraw",
    about: "Next.JS, Typescript, Socket.io, CanvasAPI, Shadcn/UI",
    link: "https://github.com/pilladipesh33/Redraw",
  },
  {
    title: "Meon Tradding",
    about: "React Native, Socket.io, RestAPI, React Animations",
    link: "",
  },
  {
    title: "Malnutrition",
    about: "React Native",
    link: "",
  },
  {
    title: "Google Meet Clone",
    about: "Next.JS, TailwindCSS, Socket.io, WebRTC",
    link: "https://github.com/pilladipesh33/google-meet-clone",
  },
  {
    title: "code echo",
    about: "Next.JS, TailwindCSS, MonacoEditor",
    link: "https://github.com/pilladipesh33/codeecho",
  },
];
