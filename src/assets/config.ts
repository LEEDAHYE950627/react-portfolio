import mainImg from "@/assets/img/img_main.png";

const size = {
  laptop: "1280px",
  tablet: "1024px",
  mobile: "720px",
  smallMobile: "360px",
  fold: "280px",
};

const config = {
  mainColor: "#8B03FF",
  subColor: "",
  thirdColor: "",

  mainTxtColor: "#C174FF",

  mainImgSrc: mainImg,

  laptop: `(max-width: ${size.laptop})`,
  tablet: `(max-width: ${size.tablet})`,
  mobile: `(max-width: ${size.mobile})`,
  smallMobile: `(max-width: ${size.smallMobile})`,
  fold: `(max-width: ${size.fold})`,
};

export default config;
