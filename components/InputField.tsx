"use client";

import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type InputFieldProps = {
    label: string;
    error?: string;
    data: UseFormRegisterReturn;
} & InputHTMLAttributes<HTMLInputElement>;

export default function InputField({
    label,
    error,
    data,
    ...props
}: InputFieldProps) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                {...data}
                {...props}
                className={`text-gray-700 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                    }`}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}