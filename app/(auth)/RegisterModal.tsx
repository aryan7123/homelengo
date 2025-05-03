"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { register } from "../api/register/route";
import { useState } from "react"
import { Eye, EyeOff } from 'lucide-react';

interface RegisterModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLoginClick: () => void;
}

type FieldErrors = {
    username?: string | null;
    email?: string | null;
    password?: string | null;
    confirmPassword?: string | null; 
}

export function RegisterModal({ isOpen, onClose, onLoginClick }: RegisterModalProps) {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleFirstPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleSecondPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    const handleLoginClick = () => {
        onClose();
        onLoginClick();
    };

    const [errors, setErrors] = useState<FieldErrors>({});
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleSubmit = async () => {
        const form = document.querySelector('form') as HTMLFormElement
        if (!form) return

        const formData = new FormData(form);
        const result = await register(formData);

        if (result.errors) {
            setErrors(result.errors);
            setSuccessMessage(null);
        } else if (result.success) {
            console.log(result.message);
            setErrors({});
            setSuccessMessage(result.message);
            
            setTimeout(() => {
                setSuccessMessage(null);
                onClose();
                // router.push('/dashboard');
            }, 1500);
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] md:max-w-[900px] z-[100]">
                <DialogHeader>
                    <DialogTitle className="text-2xl md:text-4xl font-semibold">Register</DialogTitle>
                </DialogHeader>
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="hidden md:block">
                        <Image
                            src="/banner/banner-account2.jpg"
                            alt="Register image"
                            width={250}
                            height={250}
                            className="rounded-md object-cover"
                        />
                    </div>
                    <form className="space-y-4 form">
                        <div className="space-y-2">
                            <Label htmlFor="username">User Name</Label>
                            <Input
                                name="username"
                                className="rounded-full px-4 py-6 text-sm text-[#161e2d] outline-[#1563df]"
                                type="text"
                                id="username"
                                placeholder="User Name"
                            />
                            {errors.username && <p className="text-red-600 text-sm">{errors.username}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email_address">Email Address</Label>
                            <Input
                                name="email"
                                className="rounded-full px-4 py-6 text-sm text-[#161e2d] outline-[#1563df]"
                                type="email"
                                id="email_address"
                                placeholder="Email Address"
                            />
                            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Input
                                    name="password"
                                    className="rounded-full px-4 py-6 text-sm text-[#161e2d] outline-[#1563df]"
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    placeholder="Your Password"
                                />
                                {showPassword ? (
                                    <EyeOff onClick={handleFirstPassword} size={20} className="absolute right-4 top-[13px] cursor-pointer" />
                                ) : (
                                    <Eye onClick={handleFirstPassword} size={20} className="absolute right-4 top-[13px] cursor-pointer" />
                                )}
                            </div>
                            {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="confirm_password">Confirm Password</Label>
                            <div className="relative">
                                <Input
                                    name="confirmPassword"
                                    className="rounded-full px-4 py-6 text-sm text-[#161e2d] outline-[#1563df]"
                                    type={showConfirmPassword ? "text" : "password"}
                                    id="confirm_password"
                                    placeholder="Your Password"
                                />
                                {showConfirmPassword ? (
                                    <EyeOff onClick={handleSecondPassword} size={20} className="absolute right-4 top-[13px] cursor-pointer" />
                                ) : (
                                    <Eye onClick={handleSecondPassword} size={20} className="absolute right-4 top-[13px] cursor-pointer" />
                                )}
                            </div>
                            {errors.confirmPassword && <p className="text-red-600 text-sm my-3">{errors.confirmPassword}</p>}
                        </div>
                        {successMessage && (
                            <p className="text-green-600 text-sm">{successMessage}</p>
                        )}
                        <Button
                            onClick={handleSubmit}
                            type="button"
                            className="w-full rounded-full bg-[#1563df] hover:bg-[#0e49a6] text-base py-6"
                        >
                            Register
                        </Button>
                        <div className="flex items-center justify-center pt-2">
                            <span className="text-sm">Already have an account? <span onClick={handleLoginClick} className="text-[#1563df] cursor-pointer">Login</span></span>
                            <br />
                        </div>
                        <span className="text-xs flex items-center justify-center">Or login with</span>
                        <button type="button" className="mx-auto flex gap-2 items-center justify-center transition-colors border border-[#e4e4e4] rounded-full w-56 py-3.5 hover:border-[#1563df]">
                            <Image src="/logo/google.jpg" width={20} height={20} alt="google-logo" />
                            <span className="text-sm text-[#3a3a3c]">Google</span>
                        </button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}
