import Card from "@/components/Card";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex items-center justify-between px-14 py-16 bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://bridge180.qodeinteractive.com/wp-content/uploads/2018/03/home-slider-1.jpg')] bg-cover bg-[50%_5%] rounded-3xl h-[100vh]">
        <div className="text-center lg:text-left">
          <h1 className="my-5 font-normal text-white text-5xl xl:text-6xl">
            Simplicity is the ultimate <br /> sophistication:
          </h1>
          <Button className="border border-white rounded-full bg-transparent text-white text-xs h-12 py-4 px-6 mr-2">
            2023 Lookbook
          </Button>
          <Button className="border border-white rounded-full bg-white text-black font-bold text-xs h-12 py-4 px-6">
            Shop Now <ArrowTopRightIcon className="ml-2 font-bold" />
          </Button>
        </div>
        <div className="font-medium mr-7 hidden lg:block">
          <p className="text-[12em] xl:text-[15em] text-white -mt-16">20</p>
          <p className="text-[12em] xl:text-[15em] md:-mt-24 text-white lg:-mt-30 xl:-mt-36">
            23
          </p>
        </div>
      </div>
      <hr className="mt-10" />
      <div>this is the div</div>
      <hr className="mb-10" />
      <Card />
    </main>
  );
}
