import React from 'react';

const Timeline: React.FC = () => {
    const events = [
        {
            time: '11:00',
            title: 'Đón Khách',
            description: 'Đón tiếp quan khách và chụp ảnh lưu niệm.',
            icon: '📸'
        },
        {
            time: '11:30',
            title: 'Khai Tiệc',
            description: 'Khai mạc tiệc mừng và chúc phúc cho đôi bạn trẻ.',
            icon: '🥂'
        }
    ];

    return (
        <div className="py-20 px-6 bg-[#fdf6e3]">
            <div className="max-w-xl mx-auto">
                <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#8b2b2b] text-center mb-16 italic">
                    Lịch Trình Đám Cưới
                </h3>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[21px] top-0 bottom-0 w-[2px] bg-[#d4af37]/20"></div>

                    <div className="space-y-12">
                        {events.map((event, index) => (
                            <div key={index} className="relative flex items-start gap-8">
                                <div className="relative z-10 w-11 h-11 rounded-full bg-white border-2 border-[#d4af37] flex items-center justify-center text-xl shadow-md">
                                    {event.icon}
                                </div>

                                <div className="flex-1 pt-1">
                                    <div className="flex items-center gap-3 mb-1">
                                        <span className="text-[#8b2b2b] font-bold font-serif text-xl">{event.time}</span>
                                        <div className="h-[1px] flex-1 bg-[#8b2b2b]/10"></div>
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-800 mb-1">{event.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
