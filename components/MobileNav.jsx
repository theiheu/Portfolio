import Logo from "@/app/Logo";
import Nav from "@/app/Nav";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Socials from "./Socials";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col justify-between items-center h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav containerStyles={"flex flex-col items-center gap-y-6"} />
            <Socials containerStyles={"flex gap-x-4"} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
