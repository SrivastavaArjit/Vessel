import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Sheeet = () => {
  return (
    <div className="scale-[85%] ml-2 sm:scale-100 sm:hidden">
      <Sheet>
        <SheetTrigger>
          <HamburgerMenuIcon className="h-7 w-6" />
        </SheetTrigger>
        <SheetContent side="left" className="min-w-[20%] max-w-[80%]">
          <SheetHeader className="h-16">
            <SheetTitle>VESSEL</SheetTitle>
          </SheetHeader>
          <SheetDescription>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>FashionForward</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </SheetDescription>

          <SheetDescription>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Style Squad</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </SheetDescription>

          <SheetDescription>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>FashionDiary</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sheeet;
