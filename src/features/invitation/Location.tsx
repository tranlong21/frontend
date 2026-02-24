import React from "react";

interface LocationProps {
    onShowMap: () => void;
}

const Location: React.FC<LocationProps> = ({ onShowMap }) => {
    return (
        <div className="bg-[#ece0cc] py-24 px-6 text-center">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#8b2b2b] mb-8 italic">
                Địa điểm Tiệc cưới:
            </h3>
            <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] border border-[#d4af37]/20 shadow-2xl inline-block w-full max-w-2xl transform transition hover:-translate-y-1">
                <p className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 leading-relaxed">
                    TƯ GIA NHÀ TRAI
                </p>
                <div className="w-16 h-[2px] bg-[#d4af37] mx-auto my-6 opacity-20"></div>
                <p className="text-sm sm:text-lg text-gray-500 mb-10 leading-relaxed font-medium">
                    Đội 4 Nam Hải, xã Nghĩa Lâm, tỉnh Ninh Bình
                </p>
                <button
                    onClick={onShowMap}
                    className="bg-[#8b2b2b] text-white px-12 py-4 rounded-full font-bold text-sm tracking-widest hover:bg-[#6b1f1f] transition-all shadow-lg active:scale-95"
                >
                    CHỈ ĐƯỜNG
                </button>
            </div>
        </div>
    );
};

export default Location;
