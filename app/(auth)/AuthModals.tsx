"use client"

import { useState } from "react"
import { LoginModal } from "./LoginModal"
import { RegisterModal } from "./RegisterModal"
import { User } from "lucide-react"
import { useSession } from 'next-auth/react'
import Link from "next/link"

export function AuthModals() {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  const { data: session, status } = useSession()

  const handleOpenLogin = () => {
    setShowLogin(true)
    setShowRegister(false)
  }

  const handleOpenRegister = () => {
    setShowRegister(true)
    setShowLogin(false)
  }

  const handleCloseModals = () => {
    setShowLogin(false)
    setShowRegister(false)
  }

  return (
    <>
      {session && (status === "authenticated") ? (
        <Link
          href="/dashboard"
          className="w-40 flex text-[#161e2d] items-center justify-center gap-1.5 border-[#1563df] border-2 rounded-3xl py-3 hover:bg-[#1563df] hover:text-white transition-colors"
        >
          <User size={18} />
          <span>Dashboard</span>
        </Link>
      ) : (
        <>
          <button
            type="button"
            className="w-32 flex text-[#161e2d] items-center justify-center gap-1.5 border-[#1563df] border-2 rounded-3xl py-3 hover:bg-[#1563df] hover:text-white transition-colors"
            onClick={handleOpenLogin}
          >
            <User size={18} />
            <span>Sign In</span>
          </button>
          <LoginModal
            isOpen={showLogin}
            onClose={handleCloseModals}
            onRegisterClick={handleOpenRegister}
          />
          <RegisterModal
            isOpen={showRegister}
            onClose={handleCloseModals}
            onLoginClick={handleOpenLogin}
          />
        </>
      )}
    </>
  )
}

