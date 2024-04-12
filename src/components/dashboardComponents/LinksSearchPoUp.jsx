import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import {Search, ArrowLeft, X } from 'react-feather';
import GitHub from '../../assets/GitHubLogo.png';
import supabase from '../../config/supabaseClient';


function LinksSearchPoUp({onClose}) {
  const [links, setLinks] = useState([]);
  const [showAddLinkPopup, setShowAddLinkPopup] = useState(false);
  const [linkName, setLinkName] = useState('');
  const [linkUrl, setLinkUrl] = useState('');

   
  const [loggedInUser, setLoggedInUser] = useState('');
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState('');
  const jwt = localStorage.getItem('accessToken');

  useEffect(() => {
    async function getLoggedInUser() {
      if (jwt) {
        const { data, error } = await supabase.auth.getUser(jwt);
        if (data?.user) {
          setLoggedInUser(data.user);
          console.log(data.user);
          setUserId(data.user.id);
        }
      }
    }
    
    if (jwt && !loggedInUser) {
      getLoggedInUser();
    }
    
  }, [jwt]);

  const handleLinkClick = (name) => {
    setShowAddLinkPopup(true);
    setLinkName(name); // You can set the name of the clicked link here
  };

  const handleAddLink = async (e) => {
    e.preventDefault();
    
    // Get the current array of selected_links
    const { data: existingData, error: existingError } = await supabase
      .from('cards')
      .select('selected_links')
      .eq('user_id', userId); // Replace 'your_user_id' with the actual user ID

    if (existingError) {
      console.error('Error fetching existing links:', existingError.message);
      return;
    }

    let existingLinks = [];

// Check if existingData is not empty and is a valid JSON string
if (existingData && existingData.length > 0 && typeof existingData[0].selected_links === 'string') {
  try {
    // Parse the existing links array from JSON format
    existingLinks = JSON.parse(existingData[0].selected_links);
  } catch (error) {
    // Handle JSON parsing error
    console.error('Error parsing existing links:', error);
  }
}

// Create a new link object for the link to be added
const newLink = { name: linkName, url: linkUrl };

// Add the new link object to the existing links array
const newLinks = [...existingLinks, newLink];

// Convert the new links array to JSON format before saving it to the database
const newLinksJSON = JSON.stringify(newLinks);

    // Update the selected_links column with the new array
    const { data, error } = await supabase
      .from('cards')
      .update({ selected_links: newLinksJSON })
      .eq('user_id', userId); // Replace 'your_user_id' with the actual user ID

    if (error) {
      console.error('Error adding link to database:', error.message);
      return;
    }

    // Reset the input fields
    setLinkName('');
    setLinkUrl('');
    
    // Close the popup
    onClose();
  };


  const handleGoBack = () => {
    setShowAddLinkPopup(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-xl w-2/3 h-4/5 overflow-y-auto relative p-6">
      <button className="absolute top-0 left-0 mt-4 ml-4 text-md text-[#013941] cursor-pointer" onClick={onClose}><X/></button>
        <div className="flex flex-col justify-center items-center">            
        <div id="SearchBar" className='w-1/2'>
        <div className='flex flex-row justify-around items-center bg-white border-2 border-gray-50   rounded-3xl p-2 mt-4 shadow-md transition duration-200 hover:shadow-xl'>
            <Search className='text-black mx-2'/>
            <input
            type="text" className='text-black w-full border-transparent outline-none focus:border-transparent focus:ring-0'/>
            </div>
        </div>
        {/* Links */}
        <div className='mt-10 text-left'>
        {/* Contact */}
        <div className='text-left w-full mb-1'>
          <h2 className='text-md font-semibold text-[#013941]'>Contact</h2>
          <div className='w-full grid grid-cols-5 gap-3'>
              <div onClick={() => handleLinkClick('GitHub')} className='mx-4 mb-2 flex flex-col flex-center items-center hover:scale-95 hover:shadow-xs duration-200 cursor-pointer'>
                <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </div> 
              <div className='mx-4 mb-2 flex flex-col flex-center items-center hover:scale-95 hover:shadow-xs duration-200 cursor-pointer'>
                <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>Instagram</p>
              </div>
              <div className='mx-4 mb-2 flex flex-col flex-center items-center hover:scale-95 hover:shadow-xs duration-200 cursor-pointer'>
                <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>Facebook</p>
              </div>
              <div className='mx-4 mb-2 flex flex-col flex-center items-center hover:scale-95 hover:shadow-xs duration-200 cursor-pointer'>
                <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>WatsApp</p>
              </div> 
              <div className='mx-4 mb-2 flex flex-col flex-center items-center hover:scale-95 hover:shadow-xs duration-200 cursor-pointer'>
                <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>WeChat</p>
              </div> 
                     
          </div>
        </div>
        {/* Social */}
        <div className='text-left w-full mt-4 mb-1'>
          <h2 className='text-md font-semibold text-[#013941]'>Social</h2>
          <div className='w-full grid grid-cols-5 gap-3'>
            <div className='mx-4 mb-2 flex flex-col flex-center items-center'>
              <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
              <p className='text-xs mt-1'>Mail</p>
            </div> 
            <div className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </div>
              <div className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </div> 
              <div className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </div> 
              <div className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </div> 
              <div className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </div> 
              <div className='mx-4 mb-2 flex flex-col flex-center items-center'>
                <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
                <p className='text-xs mt-1'>GitHub</p>
              </div>  

          </div>
        </div>
        {/* Business */}
        <div className='text-left w-full mt-4 mb-1'>
          <h2 className='text-md font-semibold text-[#013941]'>Business</h2>
          <div className='w-full grid grid-cols-5 gap-3'>
            <div className='mx-4 mb-2 flex flex-col flex-center items-center'>
              <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
              <p className='text-xs mt-1'>GitHub</p>
            </div> 
            <div className='mx-4 mb-2 flex flex-col flex-center items-center'>
              <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
              <p className='text-xs mt-1'>GitHub</p>
            </div> 
            <div className='mx-4 mb-2 flex flex-col flex-center items-center'>
              <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
              <p className='text-xs mt-1'>GitHub</p>
            </div> 
            <div className='mx-4 mb-2 flex flex-col flex-center items-center'>
              <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
              <p className='text-xs mt-1'>GitHub</p>
            </div> 
            <div className='mx-4 mb-2 flex flex-col flex-center items-center'>
              <img className='h-14 w-14  rounded-xl shadow-xl' src={GitHub} alt="" />
              <p className='text-xs mt-1'>GitHub</p>
            </div>   
              
          </div>
        </div>

        </div>
        </div>

        {showAddLinkPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl w-2/3 h-4/5 overflow-y-auto relative p-6">
            <button className="absolute top-4 left-4 text-gray-500 hover:text-gray-700" onClick={handleGoBack}><ArrowLeft/></button>
            <h2 className="text-xl font-semibold text-[#013941] mb-4 ">Add Link</h2>
            <form className="text-left" onSubmit={handleAddLink}  >
              <div className="mb-4">
                <label htmlFor="linkName" className="block mb-1 text-sm font-medium text-gray-700">Link Name:</label>
                <input type="text" id="linkName" value={linkName} onChange={(e) => setLinkName(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="linkUrl" className="block mb-1 text-sm font-medium text-gray-700">Link URL:</label>
                <input type="text" id="linkUrl" value={linkUrl} onChange={(e) => setLinkUrl(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
              </div>
              <button onClick={(e) => { handleAddLink(e); onClose(); }}   type="submit"  className="mt-5 my-5 py-2 w-1/4 shadow-md bg-[#14B8A6] text-white text-md rounded-full focus:outline-none focus:ring ">
                    Add Link
              </button>
            </form>
          </div>
        </div>
        )}
        
      </div>
    </div>
  )
}

export default LinksSearchPoUp