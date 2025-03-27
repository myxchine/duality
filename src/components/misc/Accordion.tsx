
import * as AccordionPrimitives from "@radix-ui/react-accordion";
import { RiAddLine } from "@remixicon/react";
import React from "react";
import { cx } from "./utils";
const Accordion = AccordionPrimitives.Root;

Accordion.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Trigger>
>(({ className, children, ...props }, forwardedRef) => (
  <AccordionPrimitives.Header className="flex">
    <AccordionPrimitives.Trigger
      className={cx(
        // base
        "group flex flex-1 cursor-pointer items-center justify-between py-3 text-left text-2xl font-sans tracking-normal",
        // text color
        "",
        // disabled
        "",
        //focus
        "",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <RiAddLine
        className={cx(
          // base
          "size-5 shrink-0 transition-transform duration-150 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:-rotate-45",
          // text color
          "text-foreground -400 dark:text-foreground -600",
          // disabled
          "group-data-[disabled]:text-foreground -300 group-data-[disabled]:dark:text-foreground -700"
        )}
        aria-hidden="true"
        focusable="false"
      />
    </AccordionPrimitives.Trigger>
  </AccordionPrimitives.Header>
));

AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Content>
>(({ className, children, ...props }, forwardedRef) => (
  <AccordionPrimitives.Content
    ref={forwardedRef}
    className={cx(
      "transform-gpu data-[state=closed]:animate-accordionClose data-[state=open]:animate-accordionOpen"
    )}
    {...props}
  >
    <div
      className={cx(
        // base
        "overflow-hidden pb-4 text-sm",
        // text color
        "text-foreground -700 dark:text-foreground -200",
        className
      )}
    >
      {children}
    </div>
  </AccordionPrimitives.Content>
));

AccordionContent.displayName = "AccordionContent";

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Item>
>(({ className, ...props }, forwardedRef) => (
  <AccordionPrimitives.Item
    ref={forwardedRef}
    className={cx(
      // base
      "overflow-hidden border-b first:mt-0",
      // border color
      "border-gray-200 dark:border-gray-800",
      className
    )}
    tremor-id="tremor-raw"
    {...props}
  />
));

AccordionItem.displayName = "AccordionItem";

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
