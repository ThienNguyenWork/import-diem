
import React, { useRef, useState } from 'react';

const UploadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-4-4V7a4 4 0 014-4h1.586a1 1 0 01.707.293l1.414 1.414a1 1 0 00.707.293H13a4 4 0 014 4v5m-5 4h-5a2 2 0 00-2 2v1a2 2 0 002 2h5a2 2 0 002-2v-1a2 2 0 00-2-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11v6m0 0l-3-3m3 3l3-3" />
    </svg>
);


interface ImportModalProps {
    onClose: () => void;
    onImport: () => void;
}

const ImportModal: React.FC<ImportModalProps> = ({ onClose, onImport }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
        } else {
            setFileName(null);
        }
    };
    
    const triggerFileSelect = () => {
        fileInputRef.current?.click();
    };


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg m-4">
                <div className="px-6 py-4 bg-indigo-600 text-white rounded-t-lg">
                    <h2 className="text-xl font-semibold">Import sổ ghi điểm</h2>
                </div>
                <div className="p-6">
                    <div className="flex items-center border border-slate-300 rounded-md">
                        <div onClick={triggerFileSelect} className="flex-grow flex items-center p-3 cursor-pointer">
                           <UploadIcon />
                           <span className="text-slate-700 font-medium">
                               {fileName ? fileName : 'IMPORT SỔ GHI ĐIỂM'}
                           </span>
                        </div>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                            accept=".xls,.xlsx"
                        />
                         <button onClick={onImport} disabled={!fileName} className="px-6 py-2 border-l border-slate-300 text-indigo-600 font-semibold hover:bg-indigo-50 disabled:text-slate-400 disabled:bg-transparent disabled:cursor-not-allowed transition-colors">
                            Import
                        </button>
                    </div>
                </div>
                <div className="px-6 py-4 bg-slate-50 flex justify-end rounded-b-lg">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-md shadow-sm hover:bg-teal-700 transition-colors"
                    >
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImportModal;
