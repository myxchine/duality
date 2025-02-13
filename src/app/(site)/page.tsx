import { Section, Row, Component } from "@/components/ui/components";
export default function Home() {
  return (
    <div className="h-[100svh] flex flex-col items-center justify-center">
      <Section>
        <Row>
          <Component small centered padding>
            <div>
              <h1>Michael Dos Santos</h1>
              <p>michael@vesqa.com</p>
            </div>
          </Component>
        </Row>
      </Section>
    </div>
  );
}
