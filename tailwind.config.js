module.exports = {
  mode: "jit",  // just intime compiler its is a tool
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],  //this is use to remove the unwanted css code from tailwind css
  theme: {
    extend: {
      //3xl breakpoint to call the flexbox where thr screen is to be 3xl means 2000px screen size
      screens: {
        "3xl": "2000px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
