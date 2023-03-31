import { useState } from 'react'
import DashboardHeader from '../DashboardComponent/DashboardHeader'
import DashboardMenu from '../DashboardComponent/DashboardMenu'
export default function DashboardLayout({ children }) {
  const [isOpen, setOpen] = useState(false)
  function handleTrigger() {
    setOpen(!isOpen);
  }
  return (
    <div className="w-full bg-neutral-100">
      <div className="xl:grid xl:grid-cols-[256px_auto] mobile:flex">
        <DashboardMenu toggleMenu={isOpen} />
        <div className="w-full">
          <DashboardHeader handleTrigger={handleTrigger} />
          <div className="w-full min-h-screen xl:px-10 lg:px-0">{children}</div>
        </div>
      </div>
    </div>
  )
}
