
export interface ResultMessage {
    subject: string;
    status: string;
    type: 'success' | 'failure';
    details: string;
}

export interface SelectionData {
    schoolYear: string;
    semester: string;
    className: string;
    subject: string;
}
