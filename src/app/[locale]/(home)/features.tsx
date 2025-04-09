import {
  RiBarChart2Fill,
  RiGlobalFill,
  RiLayout5Fill,
  RiLightbulbFlashFill,
  RiLineChartLine,
  RiSeoFill,
} from "@remixicon/react";

const features = [
  {
    feature: "Website optimised for growth",
    description:
      "Your businesses is analysed for optimal way to structure your website and curate the content to attract and convert your ideal customers.",
    icon: <RiSeoFill />,
  },
  {
    feature: "Instant load speeds",
    description:
      "Using modern technologies, we ensure a fast, responsive, and future-proof website that result in max scores (90 - 100) on Google's PageSpeed Insights GUARANTEED.",
    icon: <RiLightbulbFlashFill />,
  },
  {
    feature: "Responsive design",
    description:
      "Making sure your business is accessible and optimised for all devices is a non-negotiable requirement we provide for your website.",
    icon: <RiLayout5Fill />,
  },
  {
    feature: "Multiple Languages",
    description:
      "Depending on your target audience we provide the ability to easily intefrate 1 or more langauges on your website while keeping the site scalable and performant.",
    icon: <RiGlobalFill />,
  },
  {
    feature: "Google Analytics",
    description:
      "After years developing Google Analytics skills we make sure important metrics are tracked as well as your own KPIs to track your business growth.",
    icon: <RiBarChart2Fill />,
  },
  {
    feature: "Google Search Console",
    description:
      "Google Search console is another requirement your website needs in order to track organic growth and rankings throughout the web.",
    icon: <RiLineChartLine />,
  },
];

export function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 w-full">
      {features.map((feature, index) => (
        <div
          key={index}
          className=" flex flex-col items-center gap-2 md:gap-4 justify-center text-center"
        >
          {feature.icon}
          <h3>{feature.feature}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
