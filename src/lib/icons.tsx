import { FaGlobe } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { BsArchive, BsCalendar3, BsFlag } from "react-icons/bs";
import { AiOutlineTeam } from "react-icons/ai";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiEdit } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";
import { RiFolderSharedLine } from "react-icons/ri";
import { GoUnread } from "react-icons/go";
import { IoSyncSharp } from "react-icons/io5";
import { LuPanelRightClose } from "react-icons/lu";

export function Globe() {
  return <FaGlobe style={{ color: "blue", fontSize: "20px" }} />;
}

export function Mail() {
  return <GrMail style={{ color: "#60A5FA", fontSize: "20px" }} />;
}

export function Calendar() {
  return <BsCalendar3 style={{ color: "gray", fontSize: "20px" }} />;
}

export function Team() {
  return <AiOutlineTeam style={{ color: "gray", fontSize: "20px" }} />;
}

export function More() {
  return <MdOutlineMoreHoriz style={{ color: "gray", fontSize: "20px" }} />;
}

export function Hamburger() {
  return <RxHamburgerMenu style={{ color: "gray", fontSize: "20px" }} />;
}

export function Edit() {
  return <FiEdit style={{ color: "white", fontSize: "16px" }} />;
}

export function Trash() {
  return <HiOutlineTrash style={{ color: "white", fontSize: "16px" }} />;
}

export function Archive() {
  return <BsArchive style={{ color: "white", fontSize: "16px" }} />;
}

export function Folder() {
  return <RiFolderSharedLine style={{ color: "white", fontSize: "16px" }} />;
}

export function Flag() {
  return <BsFlag style={{ color: "white", fontSize: "16px" }} />;
}

export function Unread() {
  return <GoUnread style={{ color: "white", fontSize: "16px" }} />;
}

export function Sync() {
  return <IoSyncSharp style={{ color: "white", fontSize: "16px" }} />;
}

export function PaneClose() {
  return <LuPanelRightClose style={{ color: "white", fontSize: "16px" }} />;
}
