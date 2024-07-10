import Card from "./Card";

export default function Showcase() {
  return (
    <section>
      <div className="flex flex-col md:flex-row gap-2 text-foreground p-6 py-4 pb-2 items-center justify-center">
        <h2 className="text-xl text-foreground/90 font-semibold">
          What do we do?
        </h2>
        <p className="text-sm text-foreground/60">
          Every web solution is unique to you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <Card
          title="Web Development"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. ."
          image="/images/placeholder.svg"
          linkRef="/web-development"
          link="Web Development"
        />
        <Card
          title="Web Design"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. ."
          image="/images/placeholder.svg"
          linkRef="/web-design"
          link="Web Design"
        />
        <Card
          title="Web Architecture"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. ."
          image="/images/placeholder.svg"
          linkRef="/web-architecture"
          link="Web Architecture"
        />
      </div>
    </section>
  );
}
