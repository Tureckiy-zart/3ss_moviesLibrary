import { randomInRange } from "../../heplers/heplers";
import headerImg_01 from "../../../img/headerImg/headerImg_01.jpg";
import headerImg_02 from "../../../img/headerImg/headerImg_02.jpg";
import headerImg_03 from "../../../img/headerImg/headerImg_03.jpg";
import headerImg_04 from "../../../img/headerImg/headerImg_04.jpg";
import headerImg_05 from "../../../img/headerImg/headerImg_05.jpg";
import headerImg_06 from "../../../img/headerImg/headerImg_06.jpg";
import headerImg_07 from "../../../img/headerImg/headerImg_07.jpg";
import headerImg_08 from "../../../img/headerImg/headerImg_08.jpg";

export const images = [
  headerImg_01,
  headerImg_02,
  headerImg_03,
  headerImg_04,
  headerImg_05,
  headerImg_06,
  headerImg_07,
  headerImg_08,
];
export const randomImageIndex = randomInRange(0, images.length - 1);
