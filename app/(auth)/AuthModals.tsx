"use client"

import { useState } from "react"
import { LoginModal } from "./LoginModal"
import { RegisterModal } from "./RegisterModal"
import { User } from "lucide-react"

export function AuthModals() {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

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
  )
}

