import React from "react";
import { Button } from "./ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Card = () => {
  return (
    <>
      <div className="h-[1200px] md:h-[500px] grid gap-2 grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-5 m-4">
        <article className=" rounded-2xl lg:row-span-2 lg:col-span-2 bg-[size:100%] bg-center bg-[linear-gradient(transparent,rgba(0,0,0,0.5)),url('https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')] text-white flex flex-col justify-end p-4 transition-bg ease-out duration-500 hover:bg-[size:110%] hover:transition-bg hover:ease-out hover:duration-500 ">
          <h3 className="text-3xl">New Release</h3>
          <p>Men and Women Summer Collection</p>
          <div className="flex mt-4 gap-2">
            <Button className="rounded-full p-6">
              Men Shop <ArrowTopRightIcon className="ml-2" />
            </Button>
            <Button className="rounded-full p-6">
              Women Shop <ArrowTopRightIcon className="ml-2" />
            </Button>
          </div>
        </article>

        <article
          className=" text-white flex rounded-2xl  bg-[size:100%] bg-center bg-[linear-gradient(transparent,rgba(0,0,0,0.5)),url('https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')]  flex-col justify-end p-6
        transition-all ease-out duration-500 hover:bg-[size:110%] hover:transition-all hover:ease-out hover:duration-500"
        >
          <h3>Comfy Girl</h3>
          <p>Women Collection</p>
        </article>
        <article className="text-white text-2xl rounded-2xl bg-black  flex flex-col justify-end p-6">
          <Button className="rounded-full bg-transparent border w-[35%] md:w-[60%] lg:w-[80%] xl:w-[60%] text-xs   mb-6 ">
            Special Offers
          </Button>
          <h3 className="text-xl">
            Get <span className="italic">15%</span> off this holiday season
            using the code Love69
          </h3>
        </article>
        <article className="text-white rounded-2xl lg:col-start-4 lg:row-start-1 lg:row-span-2 lg:col-span-2 bg-[size:100%] bg-center bg-[linear-gradient(transparent,rgba(0,0,0,0.5)),url('https://images.unsplash.com/photo-1586057708056-6149710c46cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80')] flex flex-col justify-end p-6 transition-all ease-out duration-500 hover:bg-[size:110%] hover:transition-all hover:ease-out hover:duration-500">
          <h3 className="text-2xl">Men&apos;s Top</h3>
          <p>Mysterious everyday</p>
          <Button className="rounded-full p-6 w-[35%] md:w-[45%] lg:w-[40%] mt-4">
            Shop Now <ArrowTopRightIcon className="ml-2" />
          </Button>
        </article>
      </div>
    </>
  );
};

export default Card;
