
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ImportModal from './components/ImportModal';
import ResultModal from './components/ResultModal';
import type { ResultMessage, SelectionData } from './types';

const App: React.FC = () => {
    const [isImportModalOpen, setImportModalOpen] = useState(false);
    const [isResultModalOpen, setResultModalOpen] = useState(false);
    const [resultMessages, setResultMessages] = useState<ResultMessage[]>([]);
    const [currentSelection, setCurrentSelection] = useState<SelectionData>({
        schoolYear: '2025-2026',
        semester: 'Giữa kỳ 1',
        className: '1.5',
        subject: 'Tất cả'
    });

    const handleOpenImportModal = (selection: SelectionData) => {
        setCurrentSelection(selection);
        setImportModalOpen(true);
    };

    const handleCloseImportModal = () => {
        setImportModalOpen(false);
    };

    const handleImport = () => {
        // Simulate import process
        setResultMessages([
            { subject: 'Ngữ văn', status: 'Đã nhập điểm thành công', type: 'success', details: '' },
            { subject: 'Toán', status: 'Đã nhập điểm thành công', type: 'success', details: '' },
            { subject: 'Lý', status: 'Đã nhập điểm thành công', type: 'success', details: '' },
            { subject: 'Hoá', status: 'Nhập điểm thất bại.', type: 'failure', details: 'Môn này đã được chốt điểm và khoá sổ.' }
        ]);
        setImportModalOpen(false);
        setResultModalOpen(true);
    };

    const handleCloseResultModal = () => {
        setResultModalOpen(false);
    };

    return (
        <div className="flex h-screen bg-slate-100 text-slate-800">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100 p-4 sm:p-6 lg:p-8">
                    <MainContent onImportClick={handleOpenImportModal} />
                </main>
            </div>
            {isImportModalOpen && <ImportModal onClose={handleCloseImportModal} onImport={handleImport} />}
            {isResultModalOpen && <ResultModal onClose={handleCloseResultModal} messages={resultMessages} selection={currentSelection} />}
        </div>
    );
};

export default App;
