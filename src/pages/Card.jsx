import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import supabase from '../config/supabaseClient';

import Behance from '../assets/icons/Behance.png'
import DeviantArt from '../assets/icons/Deviantart.png'
import Discord from '../assets/icons/Discord.png'
import Dribbble from '../assets/icons/Dribbble.png'
import Facebook from '../assets/icons/Facebook.png'
import GitHub from '../assets/icons/GitHub.png'
import Instagram from '../assets/icons/Instagram.png'
import Line from '../assets/icons/Line.png'
import LinkedIn from '../assets/icons/Linkedin.png'
import Pinterest from '../assets/icons/Pinterest.png'
import Reddit from '../assets/icons/Reddit.png'
import Signal from '../assets/icons/Signal.png'
import Snapchat from '../assets/icons/Snapchat.png'
import Telegram from '../assets/icons/Telegram.png'
import TikTok from '../assets/icons/TikTok.png'
import Tumblr from '../assets/icons/Tumblr.png'
import VK from '../assets/icons/VK.png'
import WeChat from '../assets/icons/WeChat.png'
import WhatsApp from '../assets/icons/Whatsapp.png'
import Youtube from '../assets/icons/Youtube.png'
import Gmail from '../assets/icons/Gmail.png'

const socialMediaIcons = {
  Behance: Behance,
  DeviantArt: DeviantArt,
  Discord: Discord,
  Dribbble: Dribbble,
  Facebook: Facebook,
  GitHub: GitHub,
  Instagram: Instagram,
  Line: Line,
  LinkedIn: LinkedIn,
  Pinterest: Pinterest,
  Reddit: Reddit,
  Signal: Signal,
  Snapchat: Snapchat,
  Telegram: Telegram,
  TikTok: TikTok,
  Tumblr: Tumblr,
  VK: VK,
  WeChat: WeChat,
  WhatsApp: WhatsApp,
  Youtube: Youtube,
  Gmail:Gmail
};


function Card() {
  const [card, setCard] = useState('');
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const path = window.location.pathname;
    const parts = path.split('/');
    const cardId = parts[parts.length - 1];

    const fetchCard = async () => {
      let { data, error } = await supabase
        .from('cards')
        .select("*")
        .eq('card_id', cardId)

        if (error) {
          console.log('Could not fetch the offers')
        }

        if (data && data.length > 0) {
          console.log("****Data was fetched!****");
          setCard(data[0]);

          const cardData = data[0];
          setCard(cardData);

          // Parse the JSON string into an array
          const linksArray = JSON.parse(cardData.selected_links);
          setLinks(linksArray);
        }
    };

    fetchCard();
  }, []);  
 
  const handleAddContact = (phoneNumber, fullName) => {
    // Check if the browser supports the Contacts API
    if ('contacts' in navigator && 'ContactsManager' in window) {
      // Define contact properties
      const contact = {
        name: [{ givenName: fullName}], // Example name
        phoneNumbers: [{ value: phoneNumber }], // Use the provided phone number
      };

      // Add the contact to the user's address book
      navigator.contacts.select().then(contacts => {
        contacts.openNew(contact).then(newContact => {
          console.log('Contact added successfully:', newContact);
          // You can provide feedback to the user here if needed
        }).catch(error => {
          console.error('Error adding contact:', error);
          // Handle errors if necessary
        });
      });
    } else {
      // Contacts API is not supported
      console.error('Contacts API is not supported in this browser.');
      // Provide a fallback option or message to the user
    }
  };

  return (
    <>
        <div className='flex flex-row justify-center items-center'>
          <div className='sm:w-[500px]'>
            <div className='relative'>
              <div  style={{ clipPath: 'ellipse(85% 67% at 78% 22%)'}} className='bg-[#013941] h-72 w-full sm:rounded-3xl flex items-center justify-center relative overflow-hidden'>
                <div className='absolute bg-cover bg-cenwter w-full h-full' style={{ backgroundImage: `url(${ card.bg_img_url || 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png'})` }}></div>
              </div>
            <div className='absolute left-0 bottom-0'>    
                <img className='h-32 w-32 ml-2 mb-5 border-4 border-white rounded-full' src={card.profile_img_url} alt="" />     
                {/* <div className='absolute -right-7 bottom-1 z-10'>  
                  <img className='h-16 w-16 mb-5 border-4 border-white rounded-full' src={Profile} alt="" />     
                </div> */}
            </div>
          </div>
          <div className='px-2'>
          <div className='text-left px-1'>
            <h2 className='text-2xl mb-2 font-semibold'>{card.name}</h2>
            <div className='w-full text-gray-600'>
              <p>{card.location}</p>
              {/* <p>Aachen, Germany</p> */}
              <p>{card.bio}</p>
              {/* <p>Software Engineer | Automation Systems</p> */}
            </div>
          </div>
            <div className='w-full flex flex-wrap flex-row justify-start items-center mt-5 ml-3'>
            {links.map((link, index) => (
                      <a href={link.url} key={index} className='mx-4 mb-2 flex flex-col flex-center items-center'>
                      <img className='h-20 w-20  rounded-xl shadow-xl' src={socialMediaIcons[link.name]} alt={link.name} />
                      <p className='text-xs mt-1'>{link.name}</p>
                    </a>
                    ))
                }
          </div>
          
          <div className='mb-10 flex flex-col items-center justify-center'>
            <div onClick={() => handleAddContact(card.phone, card.name)} className='cursor-pointer mt-10 w-4/5 text-center bg-[#013941] py-3 px-5 mx-2 text-2xl font-semibold text-white shadow-xl rounded-full'>Add Contact</div>
            <Link to='/sign-up' className='mt-10  w-1/2 text-center bg-white text-black mx-2 shadow-xl border-2 border-black text-sm rounded-full'>Create your own E-card</Link>
          </div>
          
          </div>
          </div>
        </div>
    </>
  )
}

export default Card