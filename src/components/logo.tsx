import { siteConfig } from "@/siteConfig";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <LogoSVG />
    </Link>
  );
}

function LogoSVG() {
  return (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 234.75 69.3"
      className="h-[45px] pr-5 pt-1 md:h-[60px] w-auto"
    >
      <g id="Layer_1-2" data-name="Layer 1">
        <g>
          <path d="M180.2,34.91c-1.21.64-11.05,2.56-12.43,2.64-.68.04-1.22-.42-1.38-.58l-5.04-5.09c-6.76-6.82-6.67-7.92-.99-11.99,5.33-4.35,17.65-9.45,19.71-8.31.45.25-1.02,2.03-2.81,3.91-2.13,2.23-2.96,2.67-3.92,3.73-.26.29.56,1.16,1.3,1.19,1.77.08,9.06-7.65,9.06-10.17,0-.76-.4-.95-.65-1.02-.29-.08-2.23-.04-4.64.2-6.94.71-14.23,3.88-21.29,9.23-3.88,2.94-4.79,4.46-4.81,6.44-.02,1.71.93,2.97,5.81,7.61,3.06,3,5.59,5.59,5.59,5.76s-.19.23-.71.35c-2.8.68-41.52,11.17-45.99,13.29-3.18,1.53-4.59,3.29-3.41,4.47,2.06,2.06,44.64-7.41,52.69-11.76,2.76-1.47,3-1.76,2.94-3.65l-.04-1.54c0-.3.2-.57.49-.64l4.61-1.11s5.15-1.25,6.22-1.5M166.06,41.11c0,1.76-19.58,7.47-39.64,11.59-7.88,1.59-8.17,1.65-7.7.82.53-.82,13.53-4.88,27.11-8.47,19.76-5.18,20.23-5.23,20.23-3.94Z" />
          <path d="M218.55,22.53l-3.54,3.31h-9.26c-5.1,0-9.26.19-9.26.38,0,.24.13.92.61,1.23.61.38,1.3.24,2.28.22.89-.02,2.63-.32,6.98-.08l6.28.38-4.39,4.53c-4.82,4.91-12.37,11.15-12.61,10.34-.09-.24.38-1.13,1.09-1.94,1.37-1.65,1.37-2.64.09-3.45-.66-.43-1.32-.24-3.16.76-2.5,1.37-2.69,1.37-1.84-.19.33-.61.38-1.09.05-1.42s-1.94.47-4.86,2.41c-2.41,1.61-4.53,2.88-4.77,2.88-.85,0-.24-.9,2.22-3.35,1.42-1.42,2.6-2.79,2.6-3.07,0-.8-1.23-1.13-1.84-.52-.43.43-.76.38-1.46-.05-.52-.28-1.32-.57-1.79-.57-3.07,0-10.3,8.17-9.4,10.58.43,1.13,1.75.9,4.11-.66,1.84-1.23,2.17-1.32,2.83-.71,1.18,1.04,1.84.9,4.96-1.18,2.98-1.98,3.87-2.13,2.22-.33-.57.61-1.04,1.32-1.04,1.65,0,1.32,1.28.9,5.2-1.75,2.27-1.61,4.3-2.88,4.44-2.88.61,0,.19.9-1.42,2.98-1.09,1.42-1.61,2.5-1.42,2.98.28.76.8.76,3.54-.09.99-.28.76.14-1.42,2.93-3.12,3.87-7.98,10.96-7.98,11.52,0,.76.9.99,1.84.47,1.04-.52,3.21-2.41,12.99-11.24l7.76-7.03s-.36,1.83-.16,2.4c.3.85.78,1.18,1.61,1.23,1.23.08,3.26-1.18,5.57-3.31,1.51-1.37,1.75-2.17,3.64-2.36.56-.06,2.17-.33,3.54-.76,1.37-.38,2.64-.61,2.79-.47.38.43-3.4,3.64-6,5.05-1.18.66-2.22,1.56-2.31,1.98-.28,1.37,1.23,1.46,3.12.24,2.08-1.37,6.75-3.26,10.86-4.39,1.75-.52,2.93-1.09,2.93-1.46,0-.9-.33-.85-4.58.52-1.98.61-3.73,1.04-3.87.9-.38-.33,2.88-3.5,5.29-5.01,1.23-.8,2.22-1.65,2.22-1.89,0-1.04-1.56-.8-4.53.71-3.12,1.56-7.67,2.93-9.02,3.16-1.98.35-1.48-.11-1.7-.99-.9-3.64-3.12-2.88-16.39,8.97-5.81,5.2-10.67,9.35-10.82,9.26-.66-.71,9.21-12.75,17.14-20.83l6.71-6.94,7.56.33c4.11.19,8.41.43,9.54.61,1.75.24,1.98.14,1.98-.66,0-.85-.43-.99-4.58-1.23-2.55-.19-6.28-.33-8.27-.33s-3.68-.19-3.68-.38c0-.52,3.21-3.5,4.86-4.53,1.09-.66,1.23-.94.76-1.51-.28-.38-.71-.66-.9-.66s-1.98,1.46-3.92,3.31ZM180.81,38.91c-1.61,1.75-5.57,4.53-5.9,4.2-.43-.43,3.16-4.58,5.1-5.86,1.42-.99,1.61-.99,1.75-.33.09.43-.33,1.32-.94,1.98ZM216.32,38.56c-.52,1.98-1.99,3.42-3.64,4.22-2.19,1.11-2.69-1.62-.23-3.66s4.3-2.4,3.88-.56Z" />
        </g>
        <g>
          <path d="M79.94,40.13c-.27.87-.58,1.58-.76,2.45-.68,3.22-.35,4.03.48,4.13,2.63.34,4.76-2.23,6.49-4.07l-.61-2.22s-.66,1.8-3.44,3.79c-.96.69-.57-.72-.41-1.23l.14-.45c.33-.96.85-2.72,1.14-3.84l.36-1.33c.1-.38-.23-.58-.58-.76-1.56-.76-2.16.93-2.29,1.69-.04.27-.42,1.5-.52,1.82Z" />
          <path d="M81.05,25.05c-.58.82-.02,2.23,1.23,3.02,1.61,1.01,2.67,0,1.48-1.47-.94-1.29-2.35-2.05-2.7-1.55Z" />
        </g>
        <path d="M107.02,23.99c4.4-7.53,8.06-13.56,9-14.68.42-.51-.03-1.22-.83-.71-3.7,2.36-5.04,6.05-7.31,9.84-3.83,6.42-5.07,9.51-7.77,13.73-2.35,3.68-6.6,9.18-8.45,10.18-.78.42-1.35.69-2,.49-1.14-.41-1.28-2.71-.48-3.97.4-.71,1.22-1.86,2.93-1.97.46-.03-.47-2.09-3.4-.42-.57.33-1.23.87-1.79,1.63-1.28,1.72-1.14,2.04-2.17,3.77-1.36,2.28-3.42,2.75-3.04,3.41.39.71,2.63-.71,4.43-2.64.97-1.03.61.32,1.31,1.58.39.71,1.45,2.9,7.64-2.47,2.8-2.43,8.58-12.03,11.94-17.76Z" />
        <path d="M123.63,36.57c-1.68,1.69-3.99,3.3-4.67,2.81-.19-.14-.24-.42-.24-.46-.08-.45.26-.78.8-1.57.42-.62.72-1.07.63-1.16-.19-.21-2.36,1.47-2.79,1.81-1.67,1.29-1.55,1.22-2.49,1.56-.08.03-.88.33-1.44.14-.47-.15-.72-.8-.82-.82-.77-.17-1.62.62-2.33.7-1.09.12-1.9-.12-2.46-.61-1.4-1.24,3.88-7.5,5.92-7.33,1.75.14,1.86.18,1.86.18.25.09.66.27,1.06.11.2-.08.26-.2.4-.31.54-.42,1.68-.29,1.9.13.2.39-.41.93-2.15,3.03-1.92,2.32-2.25,2.95-2.09,3.15.08.1.25.07.36.06,1.44-.25,3.34-2.26,4.33-3.23,2.53-2.48,4.09-3.08,4.49-2.85.15.09.23.22.23.22.14.24.06.53-.07.99-.27.91-.32.99-.27,1.04.16.16.95-.46,2.13-1.19" />
        <path d="M132.99,35.39c-.73.66-1.47,1.4-2.52,1.96-.66.35-2.2.78-2.75.84-.49.05-1.2.01-1.51-.69-.13-.29-.2-.99-.46-1.1-.48-.2-1.29.83-2.78,1.5-1.82.82-2.66,1.26-3.22.96-.16-.08-.25-.21-.29-.29-.29-.5.13-1.26.99-2.75l2.7-1.44c-.57,1.19-.85,1.78-.8,1.82.28.22,5.34-5.27,10.58-11.78,1.29-1.6,2.6-3.2,3.89-4.8,1.7-2.1,3.69-3.97,5.34-6.12,1.02-1.33,2.03-2.78,2.88-2.55.35.09.63.45.7.8.17.94-1.21,1.9-1.8,2.33-2.03,1.51-3.31,3.83-5.01,5.71-1.01,1.12-2.01,2.32-5.25,6.86-.88,1.24-4.25,5.51-4.67,6.25-1.39,2.46-.11,4.13,2.47,1.48.91-.94,3.51-2.95,4.4-3.35.38-.17,1.15.16,1.08.71-.29,2.17-.47.18-2.24,2.28" />
        <path d="M96.41,42.29c-1.14,1.97.38,1.4,1.07.94.44-.29,1.79-3.25,1.93-3.6.58-1.47.22-2.34,1.71-3.7.56-.51,1.12-.06,1.55.41.5.54-1.53,3.84.69,5.62.59.47,2.44-.57,3.08-1.01,5.4-3.7,2.77-4.62,2.15-4.8-.28-.08-3.2,5.28-4.08,4.24-.53-.62.66-3.49.35-4.76-.33-1.38-1.15-2.05-3.02-2.08-4.1-.05-4.17,6.55-5.43,8.73Z" />
        <path
          d="M113.12,36.32c-1.35,1.75-2.41,1.68-2.79,1.46-.48-.29.01-1.32,1.75-2.72,1.27-1.08,1.45-1.11,1.69-.57.15.34-.14,1.17-.66,1.83Z"
          style={{
            fill: "#fff",
          }}
        />
        <path d="M131.09,40.11c-2.17.34-9.62,1.88-22.27,4.31-30.72,5.91-36.29,6.87-36.12,1.03.14-8.91,3.42-21.59,8.36-32.38C85.99,2.21,86.65-.44,84.2.06c-.87.18-2.33,2.92-4.48,8.25-1.8,4.42-4.71,10.81-6.59,14.13-4.44,8.1-15.2,23.85-15.75,22.98-.57-.93,2.5-7.29,5.95-12.46,5.21-7.63,12.95-21.99,14.19-26.23,1.42-4.83.94-6.48-1.71-6.22-1.54.17-2.3.89-3.56,3.17-1.72,3-11.03,23.7-13.06,28.86-2.27,5.84-12,16.35-20.25,21.94-7.34,4.92-14.28,8.07-22.63,10.19-6.28,1.62-8.77,1.92-11.76,1.62-4.82-.42-4.74-.43-4.43,1.11.19.94,1.26,1.42,3.75,1.82,4.87.69,19.6-2.93,26.82-6.57,8.23-4.19,19.61-12.86,22.94-17.52,1.52-2.13,1.87-1.5,1.17,2.07-.46,2.19-.32,3.21.36,3.63,1.89,1.15,7.2-5.24,13.93-16.81,1.42-2.25,2.62-4.1,2.72-3.98.16.04-.31,2.93-1.05,6.29-.96,4.53-1.15,7.29-.59,10.04.68,3.36,1.02,3.92,3.28,5.06,1.42.69,4.22.62,6.23.56,3.87-.16,51.17-7.96,61.46-12.26.94-.39,3.45-2.2,3.49-2.76.16-2.23-1.23-1.83-3-.73-3.58,2.22-8.76,3.58-10.56,3.86ZM72.44,12.37c-1.69,3.49-3.54,6.59-4.02,6.83-.54.32.11-1.7,1.43-4.41s2.96-6.12,3.64-7.59,1.48-2.33,1.72-1.89c.23.37-1,3.56-2.77,7.06Z" />
      </g>
    </svg>
  );
}

function OldLogo() {
  return (
    <Link
      href="/"
      className="tracking-[0rem] leading-[1.2rem]  text-xl md:text-2xl font-accent font-medium  text-foreground flex flex-col gap-[1px] md:gap-1 pt-[4px]"
    >
      Michael Santos
      <span className="font-sans text-[10px] md:text-[11px] font-light uppercase tracking-[0.25rem]">
        Web Solutions
      </span>
    </Link>
  );
}
