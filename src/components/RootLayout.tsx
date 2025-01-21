import { Outlet } from "react-router"
import { Menu } from "./Menu"

export function RootLayout() {
  return (
    <div className="flex h-screen">
      <Menu />
      <div className="flex-1 flex flex-col transition-all duration-300">
        <header className="bg-gray-800 text-white p-4 flex items-center">
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </header>
        <main className="p-4 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
