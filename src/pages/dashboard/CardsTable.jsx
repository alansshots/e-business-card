import React from 'react'
import { PlusCircle, Edit2, Share2, Grid } from 'react-feather'
import { useState, useEffect } from 'react';
import supabase from '../../config/supabaseClient';

import CardTypePopUp from '../../components/dashboardComponents/CardTypePopUp'

function CardsTable() {
   const [isPopUpOpen, setIsPopUpOpen] = useState(false);
   const [cards, setCards] = useState('');

  // Function to toggle the visibility of the popup
  const togglePopUp = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };

//Fetch cards
useEffect(() => {
   const fetchUser = async () => {
     // Wait for userId to be set
   //   if (userId) {
       const { data, error } = await supabase
         .from('cards')
         .select()
 
         if (error) {
            console.log('Could not fetch the offers')
            
          }
          
          if (data) {
            console.log("****Data was fetched!****");
            console.log(data);
            setCards(data);
            // setFetchError(null)
          }
   //   }
   };

   fetchUser();
 }, []);  

  return (
    <>
    <div class="pt-6 px-4">
        <div class="">
            <div class="bg-white shadow rounded-3xl mb-4 p-4 sm:p-6 h-full border-2 border-gray-100">
                 {/* <div class="flex items-center justify-between mb-4">
                    <h3 class="text-2xl font-semibold text-[#013941]">Cards Table</h3>
                    <div onClick={togglePopUp} className='flex flex-row items-center justify-center cursor-pointer p-2 px-4 rounded-full shadow-xl  bg-[#14B8A6] text-white '>
                    <PlusCircle/> <span className='ml-1'>New Card</span>
                    </div>
                 </div> */}
                 <div class="flow-root">
                 {cards && (
                    <ul role="list" class="divide-y divide-gray-200">
                    {cards.map(card => (
                       <li class="py-3 sm:py-4">
                          <div class="flex flex-row justify-between items-center ">
                             <div class="flex flex-row items-center justify-center">
                                <img
                                src={card.profile_img_url || 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png'}
                                class="h-12 w-12 rounded-full" alt="Card profile img"/>
                                <h2 className='ml-5'>{card.name}</h2>   
                             </div>                            
                             {/* <div class="flex flex-row justify-center items-center">
                                <div className='cursor-pointer border-2 border-[#013941] mx-1 px-2 py-0.5 rounded-full flex flex-row justify-cener items-center'>
                                 <span><Edit2 className='h-4 w-4'/></span>
                                 <span className='ml-2 pb-0.5'>Edit</span>
                                 </div>
                                <div className='cursor-pointer border-2 border-[#013941] mx-1 px-2 py-0.5 rounded-full flex flex-row justify-center items-center'>
                                 <Share2 className='h-4 w-4'/>
                                 <span className='ml-2 pb-0.5'>Share Link</span>
                                 </div>
                                 <div className='cursor-pointer border-2 border-[#013941] mx-1 px-2 py-0.5 rounded-full flex flex-row justify-center items-center'>
                                 <Grid className='h-4 w-4'/>
                                 <span className='ml-2 pb-0.5'>QR Code</span>
                                 </div>
                             </div> */}
                          </div>
                       </li>
                   ))}
                    </ul>
                 )}
                 </div>
              </div>
           </div>
        </div>
        {isPopUpOpen && <CardTypePopUp onClose={togglePopUp} />}
    </>
  )
}

export default CardsTable