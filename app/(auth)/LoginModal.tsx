"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { useRouter } from "next/navigation";
import { login } from "../api/login/route";
import { signIn } from "next-auth/react";
import { Eye, EyeOff } from 'lucide-react';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onRegisterClick: () => void;
}

type FieldErrors = {
    email?: string | null;
    password?: string | null;
}

export function LoginModal({ isOpen, onClose, onRegisterClick }: LoginModalProps) {

    const handleRegisterClick = () => {
        onClose();
        onRegisterClick();
    };

    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState<FieldErrors>({});
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const router = useRouter();


    const handleFirstPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleSubmit = async () => {
        const form = document.querySelector('form') as HTMLFormElement
        if (!form) return

        const formData = new FormData(form);
        const result = await login(formData);

        if (result.errors) {
            setErrors(result.errors);
            setSuccessMessage(null);
        } else if (result.success) {
            console.log(result.message);
            setErrors({});
            setSuccessMessage(result.message);

            const signInResult = await signIn('credentials', {
                redirect: false,
                email: formData.get('email_address') as string,
                password: formData.get('password') as string,
            })

            if (signInResult?.error) {
                setErrors({ server: signInResult.error })
            } else {
                onClose();
                router.push('/dashboard')
            }
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] md:max-w-[900px] z-[100]">
                <DialogHeader>
                    <DialogTitle className="text-2xl md:text-4xl font-semibold">Login</DialogTitle>
                </DialogHeader>
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="hidden md:block">
                        <Image
                            src="/banner/banner-account1.jpg"
                            alt="Login image"
                            width={300}
                            height={300}
                            className="rounded-md object-cover"
                        />
                    </div>
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email_address">Email Address</Label>
                            <Input name="email_address" className="rounded-full px-4 py-6 text-sm text-[#161e2d] outline-[#1563df]" id="email_address" placeholder="Your Email Address" />
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
                                    <EyeOff onClick={handleFirstPassword} size={20} className="absolute right-4 top-4 cursor-pointer" />
                                ) : (
                                    <Eye onClick={handleFirstPassword} size={20} className="absolute right-4 top-4 cursor-pointer" />
                                )}
                            </div>
                            {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
                        </div>
                        {successMessage && (
                            <p className="text-green-600 text-sm">{successMessage}</p>
                        )}
                        <Button onClick={handleSubmit} type="button" className="w-full rounded-full bg-[#1563df] hover:bg-[#0e49a6] text-base py-6">Login</Button>
                        <div className="flex items-center justify-center pt-2">
                            <span className="text-sm">Don’t you have an account? <span onClick={handleRegisterClick} className="text-[#1563df] cursor-pointer">Register</span></span>
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

