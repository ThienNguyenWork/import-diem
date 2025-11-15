
import React from 'react';

const LogoIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
        <circle cx="20" cy="20" r="20" fill="#E0E7FF"/>
        <path d="M20 4C11.1634 4 4 11.1634 4 20C4 28.8366 11.1634 36 20 36C28.8366 36 36 28.8366 36 20C36 11.1634 28.8366 4 20 4ZM20 34C12.268 34 6 27.732 6 20C6 12.268 12.268 6 20 6C27.732 6 34 12.268 34 20C34 27.732 27.732 34 20 34Z" fill="#4338CA"/>
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#4338CA" fontSize="10" fontWeight="bold">VN EDU</text>
    </svg>
);


const Sidebar: React.FC = () => {
    const navItems = [
        { name: 'Nhập/Xuất điểm hàng loạt', active: true },
        { name: 'Quản lý theo bộ môn', active: false },
        { name: 'Quản lý theo lớp học', active: false },
        { name: 'Quản lý theo bộ môn quản trị viên', active: false },
        { name: 'Quản lý theo lớp học quản trị viên', active: false },
        { name: 'Ôn luyện lại trong hè', active: false },
    ];

    return (
        <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col">
            <div className="h-16 flex items-center justify-center border-b border-slate-800">
                <div className="flex items-center space-x-2">
                    <LogoIcon/>
                    <span className="text-white font-bold text-lg hidden">VIETNAM EDU</span>
                </div>
            </div>
            <nav className="flex-1 p-4">
                <ul>
                    {navItems.map((item) => (
                        <li key={item.name} className="mb-2">
                            <a
                                href="#"
                                className={`flex items-center p-3 rounded-md transition-colors ${
                                    item.active
                                        ? 'bg-slate-700 text-white'
                                        : 'hover:bg-slate-800 hover:text-white'
                                }`}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
