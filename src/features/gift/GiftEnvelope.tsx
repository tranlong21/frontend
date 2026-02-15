
import React from 'react';

interface GiftEnvelopeProps {
  onClick: () => void;
}

const GiftEnvelope: React.FC<GiftEnvelopeProps> = ({ onClick }) => {
  return (
    <div className="py-20 px-6 bg-[#f5ead5]/50 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-12 bg-pattern-red opacity-10"></div>
      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#8b2b2b] mb-12 italic">Hộp Mừng Cưới</h3>
      
      <div onClick={onClick} className="relative inline-block cursor-pointer group">
        <div className="absolute -top-4 -left-6 w-8 h-8 bg-yellow-400 rounded-full border-2 border-yellow-600 shadow-md animate-bounce delay-100 flex items-center justify-center text-[10px] font-bold text-yellow-800">囍</div>
        <div className="absolute top-12 -left-12 w-6 h-6 bg-yellow-400 rounded-full border-2 border-yellow-600 shadow-md animate-bounce delay-300"></div>
        <div className="absolute top-2 -right-8 w-10 h-10 bg-yellow-400 rounded-full border-2 border-yellow-600 shadow-md animate-bounce flex items-center justify-center text-xs font-bold text-yellow-800">囍</div>
        <div className="absolute bottom-4 -right-10 w-8 h-8 bg-yellow-400 rounded-full border-2 border-yellow-600 shadow-md animate-bounce delay-500"></div>
        <div className="absolute -bottom-2 left-0 w-7 h-7 bg-yellow-400 rounded-full border-2 border-yellow-600 shadow-md animate-bounce delay-200"></div>

        <div className="w-40 h-56 sm:w-48 sm:h-64 bg-[#b32d2e] rounded-xl border-4 border-[#d4af37] shadow-2xl relative flex flex-col items-center justify-center transform transition duration-500 group-hover:scale-105">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-yellow-400/50 m-2"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-yellow-400/50 m-2"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-yellow-400/50 m-2"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-yellow-400/50 m-2"></div>
          
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-yellow-400 rounded-full border-4 border-[#b32d2e] flex items-center justify-center text-[#b32d2e] text-3xl sm:text-4xl font-bold shadow-inner">囍</div>
        </div>
        <p className="mt-4 text-[#8b2b2b] font-bold text-sm uppercase tracking-widest animate-pulse">Nhấn để mở</p>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-12 bg-pattern-red opacity-10"></div>
    </div>
  );
};

export default GiftEnvelope;
