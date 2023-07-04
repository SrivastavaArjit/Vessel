import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <>
      <nav className="flex gap-4 bg-neon h-32 items-center py-10 px-14">
        <ul className=" flex gap-10  text-gray-600 items-center mr-8">
          <li>
            <Link href="#">
              {/* <FontAwesomeIcon icon= style={{ color: "#000000" }} /> */}
              <h2 className="text-4xl text-black font-bold  ">Solid Fashion</h2>
            </Link>
          </li>
          <li className="hidden lg:inline hover:text-black ">
            <Link href="#">FashionForward</Link>
          </li>
          <li className="hover:text-black  hidden lg:inline">
            <Link href="#">StyleSquad</Link>
          </li>
          <li className="hover:text-black hidden lg:inline">
            <Link href="#">FashionDiary</Link>
          </li>
          <li className="hover:text-black hidden lg:inline">
            <Link href="#">OutfitIdeas</Link>
          </li>
          <li className="hover:text-black hidden lg:inline">
            <Link href="#">ClosetGoals</Link>
          </li>
        </ul>
        <Link
          href="/login"
          className={cn(
            buttonVariants(),
            "ml-auto rounded-full bg-transparent text-black border-black border w-24 hover:text-white -mr-2"
          )}
        >
          Sign In
        </Link>
        <div className="lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-black p-2 rounded-full">
              <HamburgerMenuIcon className="text-white h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-neon text-black  border border-black shadow-[3px_3px_0_rgb(0,0,0)] hover:bg-red-400">
              <DropdownMenuItem>FashionForward</DropdownMenuItem>
              <DropdownMenuItem>StyleSquad</DropdownMenuItem>
              <DropdownMenuItem>FashionDiary</DropdownMenuItem>
              <DropdownMenuItem>OutfitIdeas</DropdownMenuItem>
              <DropdownMenuItem>ClosetGoals</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </>
  );
};

export default Header;
