import {CalendarIcon, HomeIcon, SearchIcon} from "@/app/utils/IconHelper";
import "@/styles/components/navbar/navbar.sass"
import Link from "next/link";

export const NavBar = () => {
  return (
      <>
        <footer className={"navigation-bar"}>
          <Link href={"/activities"}><span className={"navigation-bar__icon"}><HomeIcon></HomeIcon></span></Link>
          <Link href={"/activities-search"}><span className={"navigation-bar__icon"}><SearchIcon></SearchIcon></span></Link>
          <Link href={"/calendar"}><span className={"navigation-bar__icon"}><CalendarIcon></CalendarIcon></span></Link>
        </footer>
      </>
  );
};