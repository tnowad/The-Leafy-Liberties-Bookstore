
import DashboardMenu from '../DashboardComponent/DashboardMenu';
export default function DashboardLayout({ children }) {
  return (
    <div className="w-full bg-neutral-100">
      <div className="grid grid-cols-[200px_auto]">
        <DashboardMenu />
        <div className="w-full min-h-screen ">
          {children}
        </div>
      </div>
    </div>
  )
}
