
import React, { useState } from 'react';

const WeddingParty: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-[#f1e6d8] py-20 px-6 text-center border-b border-[#d4af37]/10">
      <div className="max-w-xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-serif font-bold italic text-[#8b2b2b] mb-6">Tiệc cưới sẽ diễn ra vào lúc:</h3>

        <p className="text-6xl sm:text-7xl font-serif font-bold text-[#8b2b2b] mb-10 tracking-tight">11:30</p>

        <div className="flex items-center justify-center gap-6 sm:gap-10 text-[#8b2b2b] mb-8">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-[#8b2b2b]/60">THỨ BẢY</span>
          <div className="w-[1px] h-12 bg-[#8b2b2b]/20"></div>
          <span className="text-5xl sm:text-6xl font-serif font-bold">28</span>
          <div className="w-[1px] h-12 bg-[#8b2b2b]/20"></div>
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-[#8b2b2b]/60">THÁNG 02</span>
        </div>

        <p className="text-3xl sm:text-4xl font-serif font-bold text-[#8b2b2b] mb-4">2026</p>
        <p className="text-base sm:text-xl font-serif text-[#8b2b2b]/70 italic mb-10">(Tức ngày 12/01 Bính Ngọ)</p>

        <div className="mb-12">
          <p className="text-[10px] text-[#8b2b2b]/40 uppercase tracking-[0.4em] mb-2 font-bold">KHAI TIỆC</p>
          <p className="text-3xl sm:text-4xl font-serif font-bold text-[#8b2b2b]">11:30</p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-[#8b2b2b] hover:bg-[#6b1f1f] text-white px-10 py-3 rounded-full text-xs sm:text-sm font-bold shadow-xl transition-all active:scale-95 tracking-wider uppercase"
        >
          Thêm vào lịch
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#8b2b2b]/90 backdrop-blur-md" onClick={() => setShowModal(false)}></div>
          <div className="relative w-full max-w-md bg-[#fdf6e3] rounded-3xl shadow-2xl overflow-hidden animate-zoom-in border border-[#d4af37]/20">
            <div className="bg-[#8b2b2b] py-4 text-center relative">
              <h3 className="text-xl font-serif italic text-white tracking-widest">Lưu Lịch Hẹn</h3>
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-1/2 -translate-y-1/2 right-4 text-white text-2xl opacity-60 hover:opacity-100 transition-opacity"
              >
                ✕
              </button>
            </div>

            <div className="p-8 flex flex-col gap-4">
              <a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=L%E1%BB%85%20Th%C3%A0nh%20H%C3%B4n%20%26%20Ti%E1%BB%87c%20C%C6%B0%E1%BB%9Bi%3A%20Ho%C3%A0ng%20Th%E1%BB%8Bnh%20%26%20H%E1%BB%93ng%20Ng%E1%BB%8Dc&dates=20260228T030000Z/20260228T070000Z&details=Tr%C3%A2n%20tr%E1%BB%8Dng%20k%C3%ADnh%20m%E1%BB%9Di%20b%E1%BA%A1n%20%C4%91%E1%BA%BFn%20chung%20vui%20c%C3%B9ng%20gia%20%C4%91%C3%ACnh%20ch%C3%BAng%20t%C3%B4i%20t%E1%BA%A1i%20bu%E1%BB%95i%20l%E1%BB%85%20v%C3%A0%20ti%E1%BB%87c%20c%C6%B0%E1%BB%9Bi.&location=%C4%90%E1%BB%99i%204%20Nam%20H%E1%BA%A3i%2C%20x%C3%A3%20Ngh%C4%A9a%20L%C3%A2m%2C%20t%E1%BB%89nh%20Ninh%20B%C3%ACnh"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md hover:border-[#8b2b2b] transition-all group cursor-pointer"
              >
                <span className="text-2xl">📅</span>
                <span className="font-bold text-gray-700 group-hover:text-[#8b2b2b]">Google Calendar</span>
              </a>

              <button
                onClick={() => {
                  const event = [
                    "BEGIN:VCALENDAR",
                    "VERSION:2.0",
                    "PRODID:-//WeddingInvitation//VN",
                    "BEGIN:VEVENT",
                    "UID:" + new Date().getTime() + "-party@wedding.invitation",
                    "DTSTAMP:" + new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z",
                    "DTSTART:20260228T030000Z",
                    "DTEND:20260228T070000Z",
                    "SUMMARY:Lễ Thành Hôn & Tiệc Cưới: Hoàng Thịnh & Hồng Ngọc",
                    "DESCRIPTION:Trân trọng kính mời bạn đến chung vui cùng gia đình chúng tôi tại buổi lễ và tiệc cưới thân mật.",
                    "LOCATION:Đội 4 Nam Hải, xã Nghĩa Lâm, tỉnh Ninh Bình",
                    "END:VEVENT",
                    "END:VCALENDAR"
                  ].join("\\n");
                  const blob = new Blob([event], { type: "text/calendar;charset=utf-8" });
                  const url = URL.createObjectURL(blob);
                  const link = document.createElement("a");
                  link.href = url;
                  link.setAttribute("download", "tiec-cuoi-28-02-2026.ics");
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  setShowModal(false);
                }}
                className="flex items-center justify-center gap-3 bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md hover:border-[#8b2b2b] transition-all group cursor-pointer"
              >
                <span className="text-2xl">📱</span>
                <span className="font-bold text-gray-700 group-hover:text-[#8b2b2b]">Apple Calendar / Outlook</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeddingParty;
