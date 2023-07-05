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
import { ThemeToggleButton } from "./ThemeToggleButton";

const Header = () => {
  return (
    <>
      <nav className="flex gap-4 bg-transparent h-8 justify-between items-center py-8 px-14">
        <Link href="#">
          {/* <FontAwesomeIcon icon= style={{ color: "#000000" }} /> */}
          <h2 className="text-4xl font-bold  ">VESSEL</h2>
        </Link>
        <ul className=" flex gap-10  items-center mr-8">
          <li className="hidden lg:inline ">
            <Link href="#">FashionForward</Link>
          </li>
          <li className="  hidden lg:inline">
            <Link href="#">StyleSquad</Link>
          </li>
          <li className=" hidden lg:inline">
            <Link href="#">FashionDiary</Link>
          </li>
        </ul>
        <div className="flex gap-4">
          <ThemeToggleButton />
          <Link
            href="/login"
            className={cn(
              buttonVariants(),
              " rounded-full bg-transparent text-black border-black border w-24 hover:text-white -mr-2"
            )}
          >
            Sign In
          </Link>
          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-black p-2 rounded-full">
                <HamburgerMenuIcon className="text-white h-5 w-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white lg:hidden text-black border border-black shadow-[3px_3px_0_rgb(0,0,0)] hover:bg-red-400">
                <DropdownMenuItem>FashionForward</DropdownMenuItem>
                <DropdownMenuItem>StyleSquad</DropdownMenuItem>
                <DropdownMenuItem>FashionDiary</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
