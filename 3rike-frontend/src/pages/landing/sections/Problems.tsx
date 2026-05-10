import React from "react";

const Problems = () => {
  return (
    <div className="">
      <div>
        <img className="w-full" src="/the_problem1.svg" alt="problems 1 img" />
      </div>

      <div className="flex items- justify-between bg-[#829E04] px-[78px] py-[100px]">
        <div>
          <h1 className="text-[#F3FFBC] text-[26px] font-semibold tracking-wider">
            WHY NOW
          </h1>

          <h1 className="mt-4">
            <div className="text-[65px] font-semibold tracking-tighter text-white">
              The Problem
            </div>
            <div className="text-[65px] font-semibold tracking-tighter text-white -mt-8 -mb-2">
              Why we <span className="text-[#E2F490]">Exist</span>
            </div>
          </h1>
        </div>

        <div className="w-[650px] text-[23px] text-[#FEFFF8] flex items-end justify-end">
          Africa’s 3rike / Motorcycle drivers power daily life, yet most drivers
          remain trapped in expensive rentals with no path to ownership.
          Investors lack access to stable, real-economy opportunities in
          emerging markets.3riKE changes that.
        </div>
      </div>

      <div>
        <img className="w-full" src="/the_problem2.svg" alt="problems 1 img" />
      </div>
    </div>
  );
};

export default Problems;
