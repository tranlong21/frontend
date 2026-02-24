import React from "react";

const Header: React.FC = () => {
  const BASE = import.meta.env.BASE_URL; 

  return (
    <div className="relative">
      <div className="h-44 sm:h-56 md:h-72 bg-[#8b2b2b] flex items-start justify-center pt-10 sm:pt-14 md:pt-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-dragon scale-150"></div>
        <h2 className="text-white text-4xl sm:text-6xl md:text-7xl font-serif italic tracking-wide z-10 text-shadow-lg">
          Happy Wedding
        </h2>
      </div>

      <div className="h-[5px] bg-[#d4af37] w-full relative z-20"></div>

      <div className="relative pt-12 sm:pt-16 px-6 sm:px-10 z-30 pb-16">
        <div className="flex flex-row justify-center items-start gap-4 sm:gap-16 md:gap-24">
          {/* Groom */}
          <div className="flex-1 text-center">
            <div className="absolute top-0 left-[25%] -translate-x-1/2 -translate-y-1/2">
              <div className="w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full border-[3px] border-[#d4af37] overflow-hidden shadow-2xl bg-white transform hover:scale-105 transition-all duration-500">
                <img
                  src={`${BASE}img/1.webp`}
                  className="w-full h-full object-cover"
                  alt="Chú rể"
                  loading="eager"
                />
              </div>
            </div>

            <div className="mt-16 sm:mt-24 md:mt-32">
              <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.2em] mb-1 font-bold">
                CHÚ RỂ
              </p>
              <h3 className="text-[22px] leading-tight sm:text-3xl md:text-4xl font-serif font-bold text-[#8b2b2b] mb-1 relative inline-block">
                Trần Văn Thịnh
                <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#8b2b2b]/20"></div>
              </h3>

              <div className="mt-6 space-y-1">
                <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#8b2b2b] font-bold">
                  Trần Văn Hành
                </p>
                <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#8b2b2b] font-bold">
                  Nguyễn Thị Xuyến
                </p>
              </div>

              <p className="text-[10px] sm:text-[11px] md:text-xs text-gray-500 max-w-[180px] mx-auto mt-4 leading-relaxed font-medium">
                Đội 4 Nam Hải, xã Nghĩa Lâm, tỉnh Ninh Bình
              </p>
            </div>
          </div>

          {/* Bride */}
          <div className="flex-1 text-center">
            <div className="absolute top-0 left-[75%] -translate-x-1/2 -translate-y-1/2">
              <div className="w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full border-[3px] border-[#d4af37] overflow-hidden shadow-2xl bg-white transform hover:scale-105 transition-all duration-500">
                <img
                  src={`${BASE}img/2.webp`}
                  className="w-full h-full object-cover"
                  alt="Cô dâu"
                  loading="eager"
                />
              </div>
            </div>

            <div className="mt-16 sm:mt-24 md:mt-32">
              <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.2em] mb-1 font-bold">
                CÔ DÂU
              </p>
              <h3 className="text-[22px] leading-tight sm:text-3xl md:text-4xl font-serif font-bold text-[#8b2b2b] mb-1 relative inline-block">
                Trần Thị Ngọc
                <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#8b2b2b]/20"></div>
              </h3>

              <div className="mt-6 space-y-1">
                <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#8b2b2b] font-bold">
                  Trần Văn Lạc
                </p>
                <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#8b2b2b] font-bold">
                  Trần Thị Nhãn
                </p>
              </div>

              <p className="text-[10px] sm:text-[11px] md:text-xs text-gray-500 max-w-[180px] mx-auto mt-4 leading-relaxed font-medium">
                Đội 9 Công Điền Chỉ Thiện, xã Quỹ Nhất, tỉnh Ninh Bình
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
