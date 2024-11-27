"use client";
import { useState, useEffect } from "react";

const OrganicShape = () => {
  const [borderRadius, setBorderRadius] = useState({
    topLeft: 24,
    topRight: 76,
    bottomRight: 70,
    bottomLeft: 30,
    slashTopLeft: 56,
    slashTopRight: 30,
    slashBottomRight: 70,
    slashBottomLeft: 44,
  });

  const colours = ["#FFFFFF", "#EBEBEB"];

  const [colour, setColour] = useState(colours[0]);

  const [dimensions, setDimensions] = useState({
    width: 80,
    height: 50,
  });

  const [position, setPosition] = useState({
    x: 50,
    y: 50,
  });

  function randomBetween({ lower, upper }: { lower: number; upper: number }) {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
  }

  const getRandomBorderRadius = () => {
    return randomBetween({ lower: 30, upper: 90 });
  };

  const getRandomHeight = () => {
    return randomBetween({ lower: 45, upper: 55 });
  };

  const getRandomWidth = () => {
    return randomBetween({ lower: 75, upper: 85 });
  };

  const getRandomPosition = () => {
    return randomBetween({ lower: 47, upper: 53 });
  };

  const getRandomBoolean = () => {
    return Math.random() < 0.5;
  };

  const getRandomColour = () => {
    return Math.floor(Math.random() * colours.length);
  };

  useEffect(() => {
    const borderInterval = setInterval(() => {
      setBorderRadius((prev) => ({
        topLeft: getRandomBoolean() ? getRandomBorderRadius() : prev.topLeft,
        topRight: getRandomBoolean() ? getRandomBorderRadius() : prev.topRight,
        bottomRight: getRandomBoolean()
          ? getRandomBorderRadius()
          : prev.bottomRight,
        bottomLeft: getRandomBoolean()
          ? getRandomBorderRadius()
          : prev.bottomLeft,
        slashTopLeft: getRandomBoolean()
          ? getRandomBorderRadius()
          : prev.slashTopLeft,
        slashTopRight: getRandomBoolean()
          ? getRandomBorderRadius()
          : prev.slashTopRight,
        slashBottomRight: getRandomBoolean()
          ? getRandomBorderRadius()
          : prev.slashBottomRight,
        slashBottomLeft: getRandomBoolean()
          ? getRandomBorderRadius()
          : prev.slashBottomLeft,
      }));

      setColour((prev) => (getRandomBoolean() ?  colours[getRandomColour()] : prev));
    }, 500);

    const dimensionInterval = setInterval(() => {
      setDimensions((prev) => ({
        width: getRandomBoolean() ? getRandomWidth() : prev.width,
        height: getRandomBoolean() ? getRandomHeight() : prev.height,
      }));
    }, 500);

    // New interval for position changes
    const positionInterval = setInterval(() => {
      setPosition({
        x: getRandomPosition(),
        y: getRandomPosition(),
      });
    }, 3000); // Move every 2 seconds

    return () => {
      clearInterval(borderInterval);
      clearInterval(dimensionInterval);
      clearInterval(positionInterval);
    };
  }, []);

  return (
    <div
      className="mask fixed max-w-4xl"
      style={{
        width: `${dimensions.width + 30}%`,
        height: `${dimensions.height * 2 + 300}px`,
        borderRadius: `
          ${borderRadius.topLeft}%
          ${borderRadius.topRight}%
          ${borderRadius.bottomRight}%
          ${borderRadius.bottomLeft}% /
          ${borderRadius.slashTopLeft}%
          ${borderRadius.slashTopRight}%
          ${borderRadius.slashBottomRight}%
          ${borderRadius.slashBottomLeft}%`,
        backgroundColor: colour,
        transition: "all 3s ease-in-out", // Smooth transitions for all properties
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: "translate(-50%, -55%)", // Center the div on its position
      }}
    />
  );
};

export default OrganicShape;
