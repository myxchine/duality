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
    return randomBetween({ lower: 10, upper: 90 });
  };

  const getRandomHeight = () => {
    return randomBetween({ lower: 20, upper: 60 });
  };

  const getRandomWidth = () => {
    return randomBetween({ lower: 10, upper: 90 });
  };

  const getRandomPosition = () => {
    return randomBetween({ lower: 40, upper: 60 });
  };

  const getRandomBoolean = () => {
    return Math.random() < 0.5;
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
    }, 1000);

    /* const dimensionInterval = setInterval(() => {
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
    }, 2000); // Move every 2 seconds */

    return () => {
      clearInterval(borderInterval);
      //  clearInterval(dimensionInterval);
      //  clearInterval(positionInterval);
    };
  }, []);

  return (
    <div
      className="mask fixed max-w-3xl aspect-square"
      style={{
        width: `${dimensions.width + 30}%`,
        height: `${dimensions.height}svh`,
        borderRadius: `
          ${borderRadius.topLeft}%
          ${borderRadius.topRight}%
          ${borderRadius.bottomRight}%
          ${borderRadius.bottomLeft}% /
          ${borderRadius.slashTopLeft}%
          ${borderRadius.slashTopRight}%
          ${borderRadius.slashBottomRight}%
          ${borderRadius.slashBottomLeft}%`,
        backgroundColor: "white",
        transition: "all 2s linear", // Smooth transitions for all properties
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: "translate(-50%, -55%)", // Center the div on its position
      }}
    />
  );
};

export default OrganicShape;
