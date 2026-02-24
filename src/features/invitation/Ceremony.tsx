import React from "react";

const Ceremony: React.FC = () => {
    return (
        <div className="bg-[#f5ead5] py-20 px-6 sm:px-12 text-center border-y border-[#d4af37]/20 relative">
            <div className="max-w-lg mx-auto">
                <p className="uppercase text-[11px] sm:text-xs text-[#8b2b2b] font-bold tracking-[0.3em] mb-4">
                    Lễ Thành Hôn được cử hành tại tư gia
                </p>
                <p className="text-2xl sm:text-3xl font-serif font-bold text-[#8b2b2b] mb-3">
                    Đội 4 Nam Hải, xã Nghĩa Lâm, tỉnh Ninh Bình
                </p>
                <p className="uppercase text-[10px] text-[#8b2b2b]/50 tracking-[0.2em] mb-8">
                    Vào lúc
                </p>
                <p className="text-7xl sm:text-8xl font-serif font-bold text-[#8b2b2b] mb-10 tracking-tighter">
                    10:00
                </p>
                <div className="flex items-center justify-center gap-4 sm:gap-10 text-[#8b2b2b] border-y border-[#8b2b2b]/10 py-8 mb-6">
                    <span className="text-xs sm:text-sm uppercase tracking-widest font-bold">Thứ Bảy</span>
                    <div className="w-[1px] h-14 bg-[#8b2b2b]/20"></div>
                    <span className="text-6xl sm:text-7xl font-serif font-bold">28</span>
                    <div className="w-[1px] h-14 bg-[#8b2b2b]/20"></div>
                    <span className="text-xs sm:text-sm uppercase tracking-widest font-bold">Tháng 02</span>
                </div>
                <p className="text-4xl font-serif font-bold text-[#8b2b2b] mb-4 tracking-wider">2026</p>
                <p className="text-base sm:text-lg font-serif text-[#8b2b2b]/60 italic font-medium mb-8">
                    (Tức ngày 12/01 Bính Ngọ)
                </p>
            </div>
        </div>
    );
};

export default Ceremony;
