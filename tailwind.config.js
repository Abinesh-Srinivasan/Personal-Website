/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      navviolet: "#afa6ff",
      navblue: "#555288",
      homecontent: "#effbf8",
      homeboldtext: "#130f49",
      homesmalltext: "#55527c",
      homecontentline: "#ff972d",
      aboutbox1bg: "#d3f4ec",
      aboutbox2bg: "#fce8d4",
      aboutbox3bg: "#e3f9e0",
      emailhover: "#ff972d",
      servicesborder: "#d2d2d2",
      servicesnumber: "#8987a4",
      servicestext: "#9492ad",
      experiencetext: "#8886a3",
      experiencecontent: "#f3f9ff",
      contactinputborder: "#eeeeee",
      contactcontent: "#e9f9ff",
    },
    extend: {},
    fontFamily: {
      karla: ["karla", "sans-serif"],
    },
  },
  plugins: [],
};
