import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

export default function InvestorWaitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      {/* Navbar */}
      <div className="px-4 lg:px-[78px] pt-4 relative z-50">
        <div className="mx-auto flex h-20 justify-between items-center px-6 lg:px-10 rounded-2xl border border-[#E2F490] bg-[#F5F5F0]">
          <Link to="/" className="flex items-center shrink-0 cursor-pointer">
            <img
              src="/new_3rike_logo.png"
              alt="3riKE Logo"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-12">
            <Link to="/" className="text-[#1A1A1A] text-lg font-medium hover:text-[#829E04] transition-colors">
              Features
            </Link>
            <Link to="/" className="text-[#1A1A1A] text-lg font-medium hover:text-[#829E04] transition-colors">
              How it works
            </Link>
            <Link to="/" className="text-[#1A1A1A] text-lg font-medium hover:text-[#829E04] transition-colors">
              FAQs
            </Link>
          </nav>

          <div className="hidden lg:block">
            <button
              type="button"
              className="bg-[#829E04] text-white text-lg font-medium px-8 py-3 cursor-pointer hover:bg-[#6f8703] transition-colors"
            >
              Contact us
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden h-10 w-10 flex items-center justify-center cursor-pointer"
          >
            {menuOpen ? (
              <X className="text-black h-6 w-6" />
            ) : (
              <img src="burger.svg" alt="Menu" className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#F5F5F0] flex flex-col transition-all duration-500 ease-in-out lg:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="h-28" />
        <div className="flex-1 flex flex-col items-center justify-center gap-6 px-8">
          <Link to="/" className="text-[#1A1A1A] text-3xl font-bold hover:text-[#829E04] transition-colors">
            Features
          </Link>
          <Link to="/" className="text-[#1A1A1A] text-3xl font-bold hover:text-[#829E04] transition-colors">
            How it works
          </Link>
          <Link to="/" className="text-[#1A1A1A] text-3xl font-bold hover:text-[#829E04] transition-colors">
            FAQs
          </Link>
        </div>
        <div className="px-8 pb-12">
          <button
            type="button"
            className="bg-[#829E04] text-white text-xl font-medium py-5 w-full cursor-pointer hover:bg-[#6f8703] transition-colors rounded-xl"
          >
            Contact us
          </button>
        </div>
      </div>

      {/* Hero */}
      <div className="flex flex-col text-center justify-center items-center pt-12 md:pt-20 pb-20 md:pb-32 px-4">
        <span className="border border-[#E2F490] bg-white rounded-full px-4 md:px-6 py-2 text-[#666666] text-sm md:text-md mb-6 md:mb-10">
          Sustainable and Inclusive Finance
        </span>

        <h1 className="text-[48px] sm:text-[72px] md:text-[90px] lg:text-[110px] leading-[1.05] font-semibold text-[#1A1A1A] tracking-tight font-hepta space-y-2 md:space-y-6">
          <div>
            Own the <span className="text-[#829E04]">Ride</span>
          </div>
          <div>
            Power the <span className="text-[#829E04]">Future</span>
          </div>
        </h1>

        <p className="text-[#666666] text-base md:text-lg max-w-2xl mx-auto mt-6 md:mt-10 leading-relaxed px-2">
          3rike empowers electric tricycle and motorcycle drivers to achieve
          ownership while giving investors access to real-world income
          generating mobility assets driving a greener future.
        </p>

        {/* Email Waitlist Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 md:mt-12 flex flex-col sm:flex-row w-full max-w-2xl border border-[#E2F490] rounded-lg overflow-hidden"
        >
          {submitted ? (
            <div className="w-full py-5 text-center text-[#829E04] text-base md:text-lg font-medium">
              You're on the waitlist! We'll be in touch.
            </div>
          ) : (
            <>
              <input
                type="email"
                required
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 md:px-6 py-4 md:py-5 text-base md:text-lg text-[#1A1A1A] placeholder:text-[#999999] bg-transparent outline-none"
              />
              <button
                type="submit"
                className="bg-[#829E04] text-white text-base md:text-lg font-medium px-6 md:px-10 py-4 md:py-5 cursor-pointer hover:bg-[#6f8703] transition-colors shrink-0"
              >
                Join waitlist
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
