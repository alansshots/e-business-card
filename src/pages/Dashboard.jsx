import React from 'react'
import { useRoutes } from 'react-router-dom';

import DashNav from '../components/dashboardComponents/DashNav'

import CardsTable from './dashboard/CardsTable'

function Dashboard() {
   const routes = [
      { path: 'cards-table', element: <CardsTable /> },
      // { path: 'card-type', element: <CardType /> }, 
      // Add more routes as needed
   ];

   const routing = useRoutes(routes);

  return (
    <>
      <div>
         <div class="flex overflow-hidden bg-white ">
         <DashNav/>
            <div class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
            <div id="main-content" class="h-full w-full relative overflow-y-auto lg:ml-64">
               <main>
                  {routing} 
               </main>
            </div>
         </div>
      </div>
    </>
  )
}

export default Dashboard