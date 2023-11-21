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
  PaneClose,
  Sync,
  Team,
  Trash,
  Unread,
} from "@/lib/icons";
import { Button } from "./ui/button";

export default function Outlook() {
  return (
    <div className="flex flex-row min-w-full">
      <Sidebar />
      <div className="w-full">
        <Header />
        <MainPane />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="bg-blue-500 py-4 shadow-md flex flex-row justify-between items-center px-4">
      <div className="flex flex-row items-center space-x-4">
        <Hamburger />
        <Button size="sm">
          <Edit />
          <span className="ml-2">New Email</span>
        </Button>
      </div>

      <div className="flex flex-row items-center space-x-4">
        <div className="flex flex-row items-center space-x-1">
          <Trash />
          <span>Delete</span>
        </div>
        <div className="flex flex-row items-center space-x-1">
          <Archive />
          <span>Archive</span>
        </div>
        <div className="flex flex-row items-center space-x-1">
          <Folder />
          <span>Move</span>
        </div>
        <div className="flex flex-row items-center space-x-1">
          <Flag />
          <span>Flag</span>
        </div>

        <div className="flex flex-row items-center space-x-1">
          <Unread />
          <span>Mark as Unread</span>
        </div>
        <div className="flex flex-row items-center space-x-1">
          <Sync />
          <span>Sync</span>
        </div>
        <More />
      </div>

      <div>
        <PaneClose />
      </div>
    </header>
  );
}

function Sidebar() {
  return (
    <aside className="bg-gray-200 shadow-lg p-2 items-center space-y-4">
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
    <main className="bg-white overflow-y-auto shadow-xl">
      <span>Main</span>
    </main>
  );
}
