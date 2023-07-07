import Link from "next/link";
import { ThemeToggleButton } from "./ThemeToggleButton";
import UserModeSelect from "./UserModeSelect";
import Sheeet from "./Sheeet";

const Header = () => {
  return (
    <>
      <nav className="flex gap-4 bg-transparent h-8 justify-between items-center py-6 sm:py-7  px-1 sm:px-5  w-full ">
        <Link className="hidden sm:block" href="#">
          {/* <FontAwesomeIcon icon= style={{ color: "#000000" }} /> */}
          <h2 className="text-4xl font-bold  ">VESSEL</h2>
        </Link>
        <Sheeet />
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
        <div className="scale-[85%] sm:scale-100 flex gap-2">
          <ThemeToggleButton />
          <UserModeSelect />
        </div>
      </nav>
    </>
  );
};

export default Header;
