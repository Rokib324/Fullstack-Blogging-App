import SideBar from "@/components/AdminComponents/SideBar"
export default function AdminLayout({ children }) {
    return (
        <div>
            <div className="flex">
                <SideBar />
            </div>
                {children}    
        </div>
    )
}