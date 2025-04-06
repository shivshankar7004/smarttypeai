import React from "react";

interface EmailTemplateProps {
    recipientName: string;
    resendLink: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({ recipientName, resendLink }) => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Password Reset Request</h1>
            <p className="text-gray-700 mb-4">
                Hi <span className="font-semibold">{recipientName}</span>,
            </p>
            <p className="text-gray-700 mb-4">
                We received a request to reset your password. Click the button below to reset it:
            </p>
            <a
                href={resendLink}
                className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition"
            >
                Reset Password
            </a>
            <p className="text-gray-600 text-sm mt-4">
                If you didn’t request a password reset, you can safely ignore this email.
            </p>
            <p className="text-gray-600 text-sm mt-2">Thanks,</p>
            <p className="text-gray-600 text-sm">The Resend Email Service Team</p>
        </div>
    );
};

export default EmailTemplate;