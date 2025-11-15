
import React from 'react';

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const BellIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
);

const ExpandIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4h4m12 4V4h-4M4 16v4h4m12-4v4h-4" />
    </svg>
);

const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);


const Header: React.FC = () => {
    return (
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
            <div className="flex items-center space-x-4">
                <button className="text-slate-500 hover:text-slate-700">
                    <MenuIcon />
                </button>
                <h1 className="text-lg font-semibold text-slate-700">Sổ ghi điểm</h1>
            </div>
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <button className="p-2 rounded-full hover:bg-slate-100 text-slate-500">
                        <SearchIcon />
                    </button>
                    <button className="p-2 rounded-full hover:bg-slate-100 text-slate-500">
                        <ExpandIcon />
                    </button>
                    <button className="p-2 rounded-full hover:bg-slate-100 text-slate-500">
                        <BellIcon />
                    </button>
                </div>
                <div className="h-8 border-l border-slate-200"></div>
                <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700">
                    <BackIcon />
                    Quay lại trang chủ
                </button>
                <div className="relative">
                    <button className="flex items-center px-4 py-2 border border-slate-300 rounded-full text-sm font-medium hover:bg-slate-50">
                        <UserIcon />
                        <span>Xin chào, <strong>administrator</strong></span>
                        <ChevronDownIcon />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
