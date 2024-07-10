"use client";

import { useRouter } from "next/navigation";
import { Pricing as pricingData } from "@/server/db/Pricing";
import { useState } from "react";

export default function Form({ searchParams }: { searchParams: any }) {
  const router = useRouter();
  const [totalCost, setTotalCost] = useState<number | null>(null);

  const websiteType = searchParams.websiteType || "";
  const pages = searchParams.pages ? searchParams.pages.split(",") : [];
  const designComplexity = searchParams.designComplexity || "";
  const features = searchParams.features
    ? searchParams.features.split(",")
    : [];
  const hosting = searchParams.hosting || "";
  const maintenance = searchParams.maintenance || "";

  const updateParams = (param: string, value: string) => {
    let newParams = { ...searchParams };

    if (param === "pages" || param === "features") {
      newParams[param] = newParams[param] ? newParams[param].split(",") : [];
      if (newParams[param].includes(value)) {
        newParams[param] = newParams[param].filter((v: string) => v !== value);
      } else {
        newParams[param].push(value);
      }
      newParams[param] = newParams[param].join(",");
    } else {
      newParams[param] = value;
    }

    router.replace(`/calculate?${new URLSearchParams(newParams)}`, {
      scroll: false,
    });
  };

  const calculateTotal = () => {
    const websiteTypeCost = pricingData.websiteTypes[websiteType] || 0;
    const pagesCost = pages.reduce(
      (acc, page) => acc + (pricingData.pages[page] || 0),
      0
    );
    const designComplexityCost =
      pricingData.designComplexity[designComplexity] || 0;
    const featuresCost = features.reduce(
      (acc, feature) => acc + (pricingData.features[feature] || 0),
      0
    );
    const hostingCost = pricingData.hosting[hosting] || 0;
    const maintenanceCost = pricingData.maintenance[maintenance] || 0;

    const total =
      websiteTypeCost +
      pagesCost +
      designComplexityCost +
      featuresCost +
      hostingCost +
      maintenanceCost;

    setTotalCost(total);
  };

  return (
    <section className="flex flex-col  w-full text-foreground">
      <div className="flex flex-col  w-full bg-foreground/10 p-4 py-6 md:py-12">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:gap-4">
          <div className="mb-4 bg-background p-4 rounded-md shadow-md ">
            <label className="block  text-2xl font-bold">Website Type</label>
            <select
              name="websiteType"
              value={websiteType}
              onChange={(e) => updateParams(e.target.name, e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select a type</option>
              {Object.keys(pricingData.websiteTypes).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4 bg-background p-4 rounded-md shadow-md">
            <label className="block  text-2xl font-bold">Pages</label>
            {Object.keys(pricingData.pages).map((page) => (
              <div key={page} className="flex items-center">
                <input
                  type="checkbox"
                  name="pages"
                  value={page}
                  checked={pages.includes(page)}
                  onChange={(e) => updateParams(e.target.name, e.target.value)}
                  className="mr-2"
                />
                <label>{page}</label>
              </div>
            ))}
          </div>

          <div className="mb-4 bg-background p-4 rounded-md shadow-md">
            <label className="block  text-2xl font-bold">
              Design Complexity
            </label>
            <select
              name="designComplexity"
              value={designComplexity}
              onChange={(e) => updateParams(e.target.name, e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select a complexity</option>
              {Object.keys(pricingData.designComplexity).map((complexity) => (
                <option key={complexity} value={complexity}>
                  {complexity}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4 bg-background p-4 rounded-md shadow-md">
            <label className="block  text-2xl font-bold">Features</label>
            {Object.keys(pricingData.features).map((feature) => (
              <div key={feature} className="flex items-center">
                <input
                  type="checkbox"
                  name="features"
                  value={feature}
                  checked={features.includes(feature)}
                  onChange={(e) => updateParams(e.target.name, e.target.value)}
                  className="mr-2"
                />
                <label>{feature}</label>
              </div>
            ))}
          </div>

          <div className="mb-4 bg-background p-4 rounded-md shadow-md">
            <label className="block  text-2xl font-bold">Hosting</label>
            <select
              name="hosting"
              value={hosting}
              onChange={(e) => updateParams(e.target.name, e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select a hosting plan</option>
              {Object.keys(pricingData.hosting).map((hosting) => (
                <option key={hosting} value={hosting}>
                  {hosting}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4 bg-background p-4 rounded-md shadow-md">
            <label className="block  text-2xl font-bold">Maintenance</label>
            <select
              name="maintenance"
              value={maintenance}
              onChange={(e) => updateParams(e.target.name, e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select a maintenance plan</option>
              {Object.keys(pricingData.maintenance).map((maintenance) => (
                <option key={maintenance} value={maintenance}>
                  {maintenance}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col  w-full max-w-6xl p-4 py-6 mx-auto">
        <button
          onClick={calculateTotal}
          className="w-full bg-foreground text-background py-2 px-4 rounded"
        >
          Calculate
        </button>

        {totalCost !== null && (
          <div className="mt-4">
            <h2 className="text-xl font-bold">Total Cost: ${totalCost}</h2>
          </div>
        )}
      </div>
    </section>
  );
}
