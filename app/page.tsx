import Card from "@/components/Card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <div className="flex justify-around px-14 py-16 bg-neon">
        <div className="flex-grow">
          <h1 className="my-5 font-normal text-black text-5xl xl:text-6xl">
            THE FASHIONISTA&apos;S DIARY:
          </h1>
          <h2 className="my-5 text-5xl xl:text-6xl text-black font-normal">
            LET&apos;S START{" "}
            <span className="text-gray-600 italic text-base">
              TRUSTED BY 10+ COMPANIES
            </span>
          </h2>

          <div className="my-10 py-5">
            <h3 className="text-gray-600 my-4">CHIC AND SUSTAINABLE STYLE</h3>
            <p className="text-xs font-medium">
              A. Redifining Fashion sustainability
            </p>
            <p className="text-xs font-medium">
              B. Sustainable Fashion for Modern Women
            </p>
            <p className="text-xs font-medium">
              C. The Timeless Beauty of Fashion
            </p>
          </div>
          <Button className="border border-black rounded-full bg-transparent text-black text-xs hover:text-white h-1">
            SHOP NOW AND LOOK FABULOUS
          </Button>
        </div>
        <div className="font-medium mr-7 hidden lg:block">
          <p className="text-[12em] xl:text-[15em]  -mt-16">20</p>
          <p className="text-[12em] xl:text-[15em] md:-mt-24  lg:-mt-30 xl:-mt-36">
            23
          </p>
        </div>
      </div>
      <Card />
    </main>
  );
}
