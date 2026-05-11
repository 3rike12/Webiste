const EnvironmentalImpact = () => {
  return (
    <div className="bg-[#829E04] px-6 md:pl-[78px] md:pr-0 pt-10">
      <div className="bg-[#829E04] rounded-2xl overflow-hidden relative h-[300px] md:h-[420px]">
        {/* Text */}
        <div className="absolute inset-0 p-6 md:p-12 md:pl-0 flex flex-col justify-center z-10">
          <p className="text-[#F3FFBC] text-sm md:text-[18px] font-semibold tracking-wide mb-3 md:mb-4">
            Environmental Impact
          </p>
          <p className="text-[#FEFFF8] text-lg md:text-[28px] font-medium leading-[1.6] max-w-[90%] md:max-w-[580px]">
            Our electric bikes cut carbon emissions and air pollution by
            replacing petrol vehicles. We ensure responsible battery recycling
            and power our swap stations with renewable energy to support a
            cleaner, greener Africa.
          </p>
        </div>

        {/* Image — cropped on the right edge */}
        <img
          src="/world_faq1.png"
          alt="Environmental impact"
          className="absolute right-0 top-1/2 -translate-y-1/2 h-[300px] md:h-[420px] object-contain hidden md:block"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
    </div>
  );
};

export default EnvironmentalImpact;
