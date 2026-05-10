import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col text-center justify-center items-center pt-36 pb-20 px-4">
      <span className="border border-[#E2F490] bg-white rounded-full px-6 py-2 text-[#666666] text-md mb-10">
        Sustainable and Inclusive Finance
      </span>

      <div>
        <h1 className="text-[110px] leading-[1.05] font-semibold text-[#1A1A1A] tracking-tight font-hepta space-y-6">
          <div>
            Own the <span className="text-[#829E04]">Ride</span>
          </div>
          <div>
            Power the <span className="text-[#829E04]">Future</span>
          </div>
        </h1>

        <p className="text-[#666666] text-lg max-w-2xl mx-auto mt-10 leading-relaxed">
          3rike empowers electric tricycle and motorcycle drivers to achieve
          ownership while giving investors access to real-world income
          generating mobility assets driving a greener future.
        </p>

        <div className="flex gap-4 mt-10 justify-center">
          <button
            type="button"
            className="bg-[#829E04] text-white rounded-xm py-4 px-10 text-lg font-medium cursor-pointer"
          >
            Join as a driver
          </button>
          <button
            type="button"
            className="border border-[#829E04] rounded-xm py-4 px-10 text-lg font-medium text-[#829E04] cursor-pointer"
          >
            Start investing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
