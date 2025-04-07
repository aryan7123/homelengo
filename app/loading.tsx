import React from 'react'

const Loading = () => {
    return (
        <>
            <div className="fixed inset-0 z-[9999999] flex items-center justify-center bg-white overflow-hidden w-full h-full">
                <div className="w-20 h-20 border-4 border-t-[#1563df] border-transparent rounded-full animate-spin"></div>
            </div>
        </>
    )
}

export default Loading