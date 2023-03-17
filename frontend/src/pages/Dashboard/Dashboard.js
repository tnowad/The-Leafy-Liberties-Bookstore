import DashboardManager from '../../layouts/DashboardComponent/DashboardManager'
import { PieChart } from 'react-minimal-pie-chart'

function Dashboard() {
  return (
    <div>
      <DashboardManager color="Dashboard" />
      <div>
        {' '}
        <div>
          <h2>Pie Chart</h2>
          <PieChart
            data={[
              { title: 'One', value: 10, color: '#E38627' },
              { title: 'Two', value: 15, color: '#C13C37' },
              { title: 'Three', value: 20, color: '#6A2135' },
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
