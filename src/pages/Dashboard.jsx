import React from 'react'

import DashNav from '../components/dashboardComponents/DashNav'
import CardsTable from '../components/dashboardComponents/CardsTable'

function Dashboard() {
  return (
    <>
<div>
   <div class="flex overflow-hidden bg-white ">
    <DashNav/>
      <div class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
      <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
         <main>
            <CardsTable/>
         </main>
      </div>
   </div>
</div>
    </>
  )
}

export default Dashboard