import DashboardHeader from '../DashboardComponent/DashboardHeader'
import DashboardMenu from '../DashboardComponent/DashboardMenu'
export default function DashboardLayout({ children }) {
  return (
    <div className="w-full bg-neutral-100">
      <div className="xl:grid xl:grid-cols-[256px_auto] mobile:flex">
        <DashboardMenu />
        <div className="w-full">
          <DashboardHeader />
          <div className="w-full min-h-screen xl:px-10 lg:px-0">{children}</div>
        </div>
      </div>
    </div>
  )
}
