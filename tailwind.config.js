module.exports = {
  mode: "jit",  // just intime compiler its is a tool
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],  //this is use to remove the unwanted css code from tailwind css
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
