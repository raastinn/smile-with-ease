import Image from "next/image";
import t1 from "@/images/1.jpg";
import t222 from "@/images/222.jpg";
import t2 from "@/images/2.jpg";
import t3 from "@/images/3.jpg";
import t228 from "@/images/228.png";
import t4 from "@/images/4.jpg";
import t229 from "@/images/229.png";
import t5 from "@/images/5.jpg";
import t223 from "@/images/t2.jpg";
import t6 from "@/images/6.jpg";
import t7 from "@/images/7.jpg";
import t227 from "@/images/227.png";
import t8 from "@/images/8.jpg";
import t9 from "@/images/9.jpg";
import t226 from "@/images/226.jpg";
import t10 from "@/images/10.jpg";
import t224 from "@/images/224.png";
import t225 from "@/images/225.jpg";
import t11 from "@/images/11.jpg";
import t12 from "@/images/t3.jpg";
import t300 from "@/images/300.png";
import t13 from "@/images/13.jpg";
import t14 from "@/images/14.jpg";

export default function Home() {
  return (
    <div className="mx-4 md:mx-12 lg:mx-24">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="md:mx-18 md:flex md:flex-row md:justify-between md:pb-24 md:pt-12 flex flex-col pb-8 pt-10">
          <div className="md:w-[32.8%] w-full flex flex-col space-y-[2%]">
            <Image className="w-full rounded-lg" src={t1} alt="" />
            <Image className="w-full rounded-lg" src={t222} alt="" />
            <Image className="w-full rounded-lg" src={t2} alt="" />
            <Image className="w-full rounded-lg" src={t3} alt="" />
            <Image className="w-full rounded-lg" src={t228} alt="" />
            <Image className="w-full rounded-lg" src={t4} alt="" />
            <Image className="w-full rounded-lg" src={t229} alt="" />
            <Image className="w-full rounded-lg" src={t5} alt="" />
          </div>

    <div className="md:w-[32.8%] w-full flex flex-col space-y-[2%]">
            <Image className="w-full rounded-lg" src={t223} alt="" />
            <Image className="w-full rounded-lg" src={t6} alt="" />
            <Image className="w-full rounded-lg" src={t7} alt="" />
            <Image className="w-full rounded-lg" src={t227} alt="" />
            <Image className="w-full rounded-lg" src={t8} alt="" />
            <Image className="w-full rounded-lg" src={t9} alt="" />
            <Image className="w-full rounded-lg" src={t226} alt="" />
            <Image className="w-full rounded-lg" src={t10} alt="" />
          </div>

    <div className="md:w-[32.8%] w-full flex flex-col space-y-[2%]">
            <Image className="w-full rounded-lg" src={t224} alt="" />
            <Image className="w-full rounded-lg" src={t225} alt="" />
            <Image className="w-full rounded-lg" src={t11} alt="" />
            <Image className="w-full rounded-lg" src={t12} alt="" />
            <Image className="w-full rounded-lg" src={t300} alt="" />
            <Image className="w-full rounded-lg" src={t13} alt="" />
            <Image className="w-full rounded-lg" src={t14} alt="" />
          </div>
        </div>
      </main>
    </div>
  );
}
