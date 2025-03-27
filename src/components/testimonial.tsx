import Image from "next/image";

export default function Testimonial() {
  return (
    <section id="testimonial" aria-label="Testimonial">
      <figure className="mx-auto">
        <blockquote className="mx-auto max-w-2xl text-center text-xl font-semibold leading-8 text-black sm:text-2xl sm:leading-9 ">
          <p>
            “Thanks to Vesqa my business scaled organically in a matter of
            weeks without me laying a single finger on the keyboard.”
          </p>
        </blockquote>
        <figcaption className="mt-10 flex items-center justify-center gap-x-5">
          <div className="text-center">
            <p className="font-semibold text-black ">Archie Storey</p>
            <p className="text-sm text-black ">CEO Archie Construction</p>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}
