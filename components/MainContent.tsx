import React, { useState } from 'react';
import type { SelectionData } from '../types';

interface SelectInputProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[];
}

const SelectInput: React.FC<SelectInputProps> = ({ label, value, onChange, options }) => (
    <div className="flex flex-col">
        <label className="text-sm font-medium text-slate-600 mb-1">{label}</label>
        <select
            value={value}
            onChange={onChange}
            className="px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
            {options.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
    </div>
);


interface MainContentProps {
    onImportClick: (selection: SelectionData) => void;
}

const MainContent: React.FC<MainContentProps> = ({ onImportClick }) => {
    const [schoolYear, setSchoolYear] = useState('2025-2026');
    const [semester, setSemester] = useState('Giữa kỳ 1');
    const [className, setClassName] = useState('1.5');
    const [subject, setSubject] = useState('Tất cả');
    const [activeTab, setActiveTab] = useState('LỚP 1, 2');

    const schoolYearOptions = ['2025-2026', '2024-2025', '2023-2024'];
    const semesterOptions = ['Giữa kỳ 1', 'Cuối kỳ 1', 'Giữa kỳ 2', 'Cuối kỳ 2'];
    const classNameOptions = ['1.5', '1.A', '2.B', '3.C'];
    const subjectOptions = ['Tất cả', 'Toán', 'Lý', 'Hoá', 'Ngữ văn'];
    
    const tabs = ['LỚP 1, 2', 'LỚP 3', 'LỚP 4, 5'];

    const isSubjectLocked = subject === 'Hoá';

    const handleImport = () => {
        onImportClick({
            schoolYear,
            semester,
            className,
            subject
        });
    };

    return (
        <div className="max-w-7xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-slate-800 uppercase">Nhập điểm hàng loạt</h2>
                    <p className="text-slate-600 mt-2">
                        Giáo viên: <a href="#" className="text-indigo-600 font-semibold">administrator</a>
                    </p>
                    <p className="text-slate-600">Chủ nhiệm lớp:</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <SelectInput label="Năm học" value={schoolYear} onChange={(e) => setSchoolYear(e.target.value)} options={schoolYearOptions} />
                    <SelectInput label="Học kỳ" value={semester} onChange={(e) => setSemester(e.target.value)} options={semesterOptions} />
                    <SelectInput label="Tên lớp" value={className} onChange={(e) => setClassName(e.target.value)} options={classNameOptions} />
                    <SelectInput label="Môn học" value={subject} onChange={(e) => setSubject(e.target.value)} options={subjectOptions} />
                </div>
                
                <div className="bg-slate-100 p-4 rounded-lg mb-8">
                    <div className="flex space-x-4">
                        {tabs.map((tab) => {
                            const isActive = tab === activeTab;
                            return (
                                <div key={tab} className="flex-1 text-center">
                                    <button
                                        disabled={!isActive}
                                        onClick={() => setActiveTab(tab)}
                                        className={`w-full py-3 px-4 rounded-md text-sm font-semibold transition-colors ${
                                            isActive
                                                ? 'bg-indigo-600 text-white'
                                                : 'bg-slate-200 text-slate-500 cursor-not-allowed'
                                        }`}
                                    >
                                        {tab}
                                    </button>
                                    {!isActive && (
                                        <p className="text-red-500 text-xs mt-2">Thầy/Cô không phụ trách khối lớp này</p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-slate-200">
                    <h3 className="text-xl font-bold text-slate-800 text-center mb-6">Đánh giá</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Column: Update results */}
                        <div className="text-center p-6 rounded-lg border border-slate-200">
                            {isSubjectLocked && (
                                <p className="text-red-600 font-semibold mb-4">
                                    Môn học đã được chốt và khoá sổ
                                </p>
                            )}
                            <h4 className="text-lg font-semibold text-slate-800">Cập nhật kết quả môn học</h4>
                            <p className="text-sm text-slate-500 mb-6">(Dành cho giáo viên bộ môn)</p>
                            
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                                <button
                                    disabled={isSubjectLocked}
                                    className={`w-full sm:w-auto px-8 py-3 font-semibold rounded-md shadow-sm transition-colors ${
                                        isSubjectLocked
                                            ? 'bg-slate-400 text-slate-100 cursor-not-allowed'
                                            : 'bg-teal-600 text-white hover:bg-teal-700'
                                    }`}
                                >
                                    Xuất file nhập liệu
                                </button>
                                <button
                                    onClick={handleImport}
                                    disabled={isSubjectLocked}
                                    className={`w-full sm:w-auto px-8 py-3 font-semibold rounded-md shadow-sm transition-colors ${
                                        isSubjectLocked
                                            ? 'bg-slate-400 text-slate-100 cursor-not-allowed'
                                            : 'bg-indigo-700 text-white hover:bg-indigo-800'
                                    }`}
                                >
                                    Nhập file lên hệ thống
                                </button>
                            </div>
                            
                            <p className="text-red-600 text-sm mt-6">Lưu ý: Thầy Cô nhớ chọn đúng môn học. Tránh cập nhật nhầm.</p>
                        </div>

                        {/* Right Column: Feature in development */}
                        <div className="text-center p-6 rounded-lg border border-slate-200 flex flex-col justify-center items-center">
                            <h4 className="text-lg font-semibold text-slate-800">Tính năng đang bổ sung</h4>
                            <p className="text-slate-500 mt-2 text-sm">
                                Chức năng này đang trong quá trình phát triển và sẽ sớm được ra mắt.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;