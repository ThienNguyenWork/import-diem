import React from 'react';
import type { ResultMessage, SelectionData } from '../types';

interface ResultModalProps {
    onClose: () => void;
    messages: ResultMessage[];
    selection: SelectionData;
}

const ResultModal: React.FC<ResultModalProps> = ({ onClose, messages, selection }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                <div className="p-6 text-center">
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">Kết quả nhập điểm</h2>
                    <p className="text-lg font-semibold text-indigo-700 mb-6">
                        {selection.semester} - Lớp {selection.className}
                    </p>
                </div>
                <div className="px-6 pb-6 text-left max-h-60 overflow-y-auto">
                    {messages.map((message, index) => (
                        <div key={index} className="mb-3 text-sm">
                            <span className="font-medium text-slate-700">{message.subject}:</span>
                            {message.type === 'success' ? (
                                <span className="ml-2 font-semibold text-green-600">{message.status}</span>
                            ) : (
                                <span className="ml-2">
                                    <span className="font-semibold text-red-600">{message.status}</span>
                                    {message.details && <span className="ml-1 text-slate-800">({message.details})</span>}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
                <div className="p-6 bg-slate-50 flex justify-center rounded-b-lg">
                    <button
                        onClick={onClose}
                        className="px-8 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 transition-colors"
                    >
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResultModal;