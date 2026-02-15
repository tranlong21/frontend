
import React from 'react';

interface CoverProps {
  isOpening: boolean;
  onOpen: () => void;
}

const Cover: React.FC<CoverProps> = ({ isOpening, onOpen }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-[#a43636] z-[100] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-yellow-200 rounded-full animate-ping delay-700"></div>
      </div>
      <div className={`relative w-full max-w-[360px] sm:max-w-md transition-all duration-1000 ${isOpening ? 'scale-110 opacity-0 -translate-y-20' : 'scale-100'}`}>
        <div className="relative w-full aspect-[4/5] bg-[#fdf6e3] rounded-2xl shadow-2xl border-2 border-[#d4af37]/20 overflow-hidden">
          <div className={`absolute top-0 left-0 w-full h-[28%] bg-[#7a2828] rounded-t-2xl origin-top transition-all duration-700 z-30 shadow-md flex flex-col items-center
            ${isOpening ? 'rotate-x-180 -translate-y-full opacity-0' : 'rotate-x-0'}`}
            style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)', transformStyle: 'preserve-3d' }}>
            <div className="mt-3 w-8 h-8 sm:w-10 sm:h-10 bg-[#ffce00] rounded-full flex items-center justify-center text-[#8b2b2b] shadow-inner transform -translate-y-1 border-2 border-[#8b2b2b]/10 text-xs sm:text-sm">❤</div>
          </div>
          <div className="h-full flex flex-col items-center justify-center px-6 sm:px-8 pt-20 sm:pt-28 z-10 animate-fade-in text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#8b2b2b] mb-1">Thịnh & Ngọc</h1>
            <div className="flex items-center justify-center gap-2 py-2">
              <div className="h-[1px] w-6 sm:w-8 bg-[#d4af37] opacity-40"></div>
              <span className="text-[#d4af37] text-xs">❦</span>
              <div className="h-[1px] w-6 sm:w-8 bg-[#d4af37] opacity-40"></div>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm font-medium mb-6">28 tháng 2, 2026</p>
            <button onClick={onOpen} className="bg-[#ffce00] hover:bg-[#ffd700] text-[#8b2b2b] px-8 sm:px-10 py-3 rounded-full transition-all transform active:scale-95 shadow-lg font-bold flex items-center gap-2 sm:gap-3">
              <span className="text-xl">✉️</span> <span>Mở thiệp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
