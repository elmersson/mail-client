import {
  Archive,
  Calendar,
  Edit,
  Flag,
  Folder,
  Globe,
  Hamburger,
  Mail,
  More,
  Sync,
  Team,
  Trash,
  Unread,
} from "@/lib/icons";
import { Button } from "./ui/button";

export default function Outlook() {
  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div>
        <Header />
        <MainPane />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="bg-blue-500 py-4 shadow-md">
      <div className="w-full flex flex-row space-x-4">
        <Hamburger />
        <Button>
          <Edit />
          <span>New Email</span>
        </Button>

        <Trash />
        <span>Delete</span>
        <Archive />
        <span>Archive</span>
        <Folder />
        <span>Move</span>
        <Flag />
        <span>Flag</span>
        <Unread />
        <span>Mark as Unread</span>
        <Sync />
        <span>Sync</span>
        <More />
      </div>
    </header>
  );
}

function Sidebar() {
  return (
    <aside className="bg-gray-200 w-full shadow-lg p-2 items-center space-y-4">
      <Globe />
      <Mail />
      <Calendar />
      <Team />
      <More />
    </aside>
  );
}

function MainPane() {
  return (
    <main className="bg-white flex-1 overflow-y-auto shadow-xl">
      <span>Main</span>
    </main>
  );
}
