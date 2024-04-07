import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface MeetingCardPros {
  img: string;
  className: string;
  title: string;
  desc: string;
  handleClick: () => void;
}

const MeetingCard = ({
  img,
  className,
  title,
  desc,
  handleClick,
}: MeetingCardPros) => {
  return (
    <div
      className={cn(
        "px-4 py-6 flex flex-col justify-between cursor-pointer w-full xl:max-w-[270px] min-h-[260px] rounded-[14px]",
        className
      )}
      onClick={handleClick}
    >
      <div className="flex-center size-12 rounded-[10px] glassmorphism2 ">
        <Image src={img} alt="meeting" width={27} height={27} />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{desc}</p>
      </div>
    </div>
  );
};

export default MeetingCard;
