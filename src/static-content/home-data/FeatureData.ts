import { StaticImageData } from "next/image";

import featureIcon_1 from "@/assets/images/icon/icon_01.svg";
import featureIcon_2 from "@/assets/images/icon/icon_02.svg";

interface DataType {
  id: number;
  item_bg?: string;
  img?: StaticImageData;
  icon?: StaticImageData;
  title: string;
  desc?: string;
  tag?: string;
  data_delay_time?: string;
  btn?: string;
  class_name?: string;
}

const feature_data: DataType[] = [
  {
    id: 1,
    icon: featureIcon_1,
    title: "Lease Office",
    btn: "Find Office",
    desc: "Explore homy’s 2 million+ homes and uncover your ideal living space.",
  },
  {
    id: 2,
    icon: featureIcon_2,
    title: "RENT A Office",
    btn: "Rent Office",
    desc: "Discover a rental you'll love on homy, thanks to 35+ filters and tailored keywords.",
  },
];

export default feature_data;
