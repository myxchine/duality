const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <h1 className="text-4xl font-bold w-full text-center">
        I'm Michael Dos Santos.
      </h1>
      <p className="w-full text-center text-sm text-black">
        I'm a cool ass full-stack developer who doesn't give up for shit.
      </p>

      <div className="flex  w-full items-center justify-center space-x-4 pt-4">
        <button  className="bg-black text-white border p-2 rounded px-6 hover:bg-white hover:text-black border-black text-sm">
          CONTACT ME
        </button>
        <button className="border border-black p-2 rounded px-6 hover:bg-black hover:text-white text-sm">
          PORTFOLIO
        </button>
      </div>
    </div>
  );
};

export default Hero;
