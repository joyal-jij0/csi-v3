import { Button } from "@/components/ui/moving-border";

export default function Home() {
  return (
    <>
      <div>
        <div className="flex flex-col justify-start items-center pt-6 md:pt-14">
          <div><h1 className="text-gradient-border font-bold text-3xl md:text-8xl " data-text="&lt; CSI INNOWAVE /&gt;">&lt; CSI INNOWAVE /&gt;</h1></div>
          <div><h2 className="text-[#ABABAB] text-[0.5rem] -mt-2 mb-3 md:text-lg md:-mt-3 md:mb-5">WHERE INNOVATON MEETS EXCELLENCE</h2></div>
          <Button className="text-[0.7rem] md:text-lg" containerClassName="w-20 lg:w-40 lg:h-14">Join Us</Button>
        </div>
      </div>
    </>
  );
}
