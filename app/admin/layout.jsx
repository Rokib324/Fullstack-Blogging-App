"use client"

import { assets } from "@/assets/assets"
import SideBar from "@/components/AdminComponents/SideBar"
import Image from "next/image"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function AdminLayout({ children }) {
    const router = useRouter()
    const [isLoggingOut, setIsLoggingOut] = useState(false)

    const handleLogout = async () => {
        setIsLoggingOut(true)
        try {
            await fetch('/api/admin/logout', { method: 'POST' })
            document.cookie = 'admin-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
            router.push('/admin/login')
        } catch (error) {
            console.error('Logout failed:', error)
        } finally {
            setIsLoggingOut(false)
        }
    }

    return (
        <div>
            <div className="flex">
                <ToastContainer theme="dark"/>
                <SideBar />
                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
                        <h3 className="font-medium">Admin Panel</h3>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={handleLogout}
                                disabled={isLoggingOut}
                                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoggingOut ? 'Logging out...' : 'Logout'}
                            </button>
                            <Image src={assets.profile_icon} width={40} alt="profile" />
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}