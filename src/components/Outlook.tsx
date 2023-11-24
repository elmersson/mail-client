"use client";

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
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";

export default function Outlook() {
  return (
    <div className="flex flex-row min-w-full min-h-full">
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
    <header className="bg-blue-500 py-2 shadow-md flex flex-row justify-between items-center px-4">
      <div className="flex flex-row items-center space-x-4">
        <Hamburger />
        <Button size="xs" className="">
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
    <div className="flex flex-row overflow-y-hidden space-x-2">
      <div className="bg-slate-500 w-[25%]">
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger>Favorites</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>All Accounts</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Rasmus.elmersson@regent.se</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Rasmus.elmersson@martinservera.se
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="bg-slate-500 w-[15%]">
        <span>Main</span>
      </div>
      <div className="bg-slate-500 w-[40%]">
        <span>Main</span>
      </div>
      <div className="bg-slate-500 w-[20%]">
        <span>Main</span>
      </div>
    </div>
  );
}
