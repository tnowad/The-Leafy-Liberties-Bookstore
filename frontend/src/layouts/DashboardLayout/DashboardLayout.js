
import DashboardMenu from '../DashboardComponent/DashboardMenu';
export default function DashboardLayout({ children }) {
  return (
    <div className="w-full bg-neutral-100">
      <div className="grid xl:grid-cols-[260px_auto] lg:grid-cols-[auto_auto]">
        <DashboardMenu />
        <div className="w-full min-h-screen p-10">
          {children}
        </div>
      </div>
    </div>
  )
}
