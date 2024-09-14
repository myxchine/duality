import Card from "./Card";

export default function Showcase() {
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-2 text-foreground p-6 py-4 pb-2 items-center md:items-end justify-center max-w-6xl mx-auto">
        <h2 className="text-xl text-foreground/90 font-semibold md:text-3xl">
          What do we do?
        </h2>
        <p className="text-sm text-foreground/60 md:text-xl">
          Every web solution is unique to you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
        <Card
          title="Structure & Design"
          description="We start from the ground up to create a beautiful and functional website that suits your needs."
          image="/images/placeholder.svg"
          linkRef="/#web-development"
          link="More "
        />
        <Card
          title="Development"
          description="We can then develop the website using the latest technologies and frameworks to make it FAST and work great."
          image="/images/placeholder.svg"
          linkRef="/#web-design"
          link="More"
        />
        <Card
          title="Hosting & Maintenance"
          description="Once the website is ready, we can host it on a reliable and secure server to ensure it stays up and running smoothly."
          image="/images/placeholder.svg"
          linkRef="/#web-architecture"
          link="More"
        />
      </div>
    </section>
  );
}
