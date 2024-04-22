import React from 'react'

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, X} from 'react-feather';
import supabase from '../../config/supabaseClient'

import LinkSearch from '../../components/dashboardComponents/LinksSearchPoUp'
import CardQRPopUp from '../../components/dashboardComponents/CardQRPopUp'

import Behance from '../../assets/icons/Behance.png'
import DeviantArt from '../../assets/icons/Deviantart.png'
import Discord from '../../assets/icons/Discord.png'
import Dribbble from '../../assets/icons/Dribbble.png'
import Facebook from '../../assets/icons/Facebook.png'
import GitHub from '../../assets/icons/GitHub.png'
import Instagram from '../../assets/icons/Instagram.png'
import Line from '../../assets/icons/Line.png'
import LinkedIn from '../../assets/icons/Linkedin.png'
import Pinterest from '../../assets/icons/Pinterest.png'
import Reddit from '../../assets/icons/Reddit.png'
import Signal from '../../assets/icons/Signal.png'
import Snapchat from '../../assets/icons/Snapchat.png'
import Telegram from '../../assets/icons/Telegram.png'
import TikTok from '../../assets/icons/TikTok.png'
import Tumblr from '../../assets/icons/Tumblr.png'
import VK from '../../assets/icons/VK.png'
import WeChat from '../../assets/icons/WeChat.png'
import WhatsApp from '../../assets/icons/Whatsapp.png'
import Youtube from '../../assets/icons/Youtube.png'
import Gmail from '../../assets/icons/Gmail.png'


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

function CreateNewCardPersonal() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [isQRPopUpOpen, setIsQRPopUpOpen] = useState(false);
  const [isHoveredProfile, setIsHoveredProfile] = useState(false);
  const [isHoveredCover, setIsHoveredCover] = useState(false);
  
  const [loggedInUser, setLoggedInUser] = useState('');
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState('');
  const jwt = localStorage.getItem('accessToken');

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [bio, setBio] = useState('');
  const [links, setLinks] = useState([]);
  const [selectedProfileImage, setSelectedProfileImage] = useState(null);
  const [selectedCoverImage, setSelectedCoverImage] = useState(null);
  const [card, setCard] = useState('');

  // Function to toggle the visibility of the popup
  const togglePopUp = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };

  const toggleQRPopUp = () => {
    setIsQRPopUpOpen(!isQRPopUpOpen);
  };
  
  useEffect(() => {
    async function fetchData() {
      try {
        if (jwt && !loggedInUser) {
          const { data: userData, error: userError } = await supabase.auth.getUser(jwt);
          if (userData?.user) {
            setLoggedInUser(userData.user);
            setUserId(userData.user.id);
          }
        }
        
        if (jwt && userId) {
          const { data: cardData, error: cardError } = await supabase
            .from('cards')
            .select()
            .eq('user_id', userId);

          if (cardData && cardData.length > 0) {
            const cardInfo = cardData[0];
            setCard(cardInfo);
            setName(cardInfo.name || '');
            setLocation(cardInfo.location || '');
            setPhone(cardInfo.phone || '');
            setBio(cardInfo.bio || '');
            setSelectedProfileImage(cardInfo.profile_img_url || '');
            setSelectedCoverImage(cardInfo.bg_img_url || '');

            const linksArray = JSON.parse(cardInfo.selected_links || '[]');
            setLinks(linksArray);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    }

    fetchData();
  }, [jwt, userId]);

  const submitCard = async () => {
    const date = new Date().toLocaleDateString();
      const { data, error } = await supabase
        .from('cards')
        .upsert([
          {
            user_id: userId,
            email: loggedInUser.email,
            name,
            created_at: date,
            phone,
            location,
            bio,
            selected_links: links,
            profile_img_url: selectedProfileImage,
            bg_img_url: selectedCoverImage,
          },
        ])
        .eq('user_id', userId);

        console.log('Card updated successfully:', data);
        setSelectedProfileImage(data[0].profile_img_url);
        setSelectedCoverImage(data[0].bg_img_url);
        setCard(data[0]);

  };

    // Profile Imgage Change 
    const handleProfileImageChange = async (event) => {
      const image = event.target.files[0];
      setSelectedProfileImage(image);
      
      if (image) {
        try {
          // Upload the image to Supabase Storage
          const { data: uploadData, error: uploadError } = await supabase.storage
            .from('profile_images')
            .upload(`${loggedInUser.id}/${image.name}`, image);
    
          if (uploadError) {
            throw new Error(`Error uploading image: ${uploadError.message}`);
          }
    
          // Log the structure of the uploadData object
          // console.log('Upload Data:', uploadData);
    
          // Get the URL of the uploaded image
          const imageUrl = await supabase.storage
            .from('profile_images')
            .getPublicUrl(`${loggedInUser.id}/${image.name}`);
    
          if (!imageUrl) {
            throw new Error('Image URL is null or undefined');
          }
          
          // Update the user's record in the database with the new image URL
          const { data: updateData, error: updateError } = await supabase
            .from('cards')
            .update({ profile_img_url: imageUrl.data.publicUrl })
            .eq('user_id', loggedInUser.id);
    
          if (updateError) {
            throw new Error(`Error updating user record: ${updateError.message}`);
          }
  
          setSelectedProfileImage(imageUrl.data.publicUrl);
        } catch (error) {
          console.error(error.message);
        }
      }
    };
  
    // Cover Imgage Change 
    const handleCoverImageChange = async (event) => {
      const image = event.target.files[0];
        setSelectedCoverImage(image);
        
        if (image) {
          try {
            // Upload the image to Supabase Storage
            const { data: uploadData, error: uploadError } = await supabase.storage
              .from('cover_images')
              .upload(`${loggedInUser.id}/${image.name}`, image);
      
            if (uploadError) {
              throw new Error(`Error uploading image: ${uploadError.message}`);
            }
      
            // Log the structure of the uploadData object
            // console.log('Upload Data:', uploadData);
      
            // Get the URL of the uploaded image
            const imageUrl = await supabase.storage
              .from('cover_images')
              .getPublicUrl(`${loggedInUser.id}/${image.name}`);
      
            if (!imageUrl) {
              throw new Error('Image URL is null or undefined');
            }
            
            // Update the user's record in the database with the new image URL
            const { data: updateData, error: updateError } = await supabase
              .from('cards')
              .update({bg_img_url: imageUrl.data.publicUrl })
              .eq('user_id', loggedInUser.id);
      
            if (updateError) {
              throw new Error(`Error updating user record: ${updateError.message}`);
            }
    
            setSelectedCoverImage(imageUrl.data.publicUrl);
          } catch (error) {
            console.error(error.message);
          }
        }
    };

  const handleRemoveLink = (indexToRemove) => {
    setLinks(prevLinks => prevLinks.filter((_, index) => index !== indexToRemove));
  };

  const updateLinks = (newLinks) => {
    setLinks(newLinks);
  }
  
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='mt-2 flex flex-row items-center justify-around w-full'>
          <div className='w-full mx-10'>
            <div className='flex flex-row justify-between items-center'>
            {/* Photos */}
            <div class="flex flex-col items-center justify-center">
              <p className='mb-1 text-gray-600'>Profile Picture</p>
                <label htmlFor="profile-img-upload" className="flex flex-col items-center justify-center  rounded-full cursor-pointer bg-gray-50" >
                <div
                  className="w-36 h-36 border-2 border-gray-200 rounded-full overflow-hidden"
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setIsHoveredProfile(true)}
                  onMouseLeave={() => setIsHoveredProfile(false)}
                >
                  <img
                    src={selectedProfileImage || 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png'}
                    alt="Profile"
                    style={{
                      // cursor: loggedInUser.id === user.id ? "pointer" : "default",
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      filter: isHoveredProfile ? 'blur(2px)' : 'none',
                      transition: 'filter 0.3s ease',
                    }}
                  />
                  {isHoveredProfile ? (
                    <div
                      style={{
                        cursor: "pointer",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <Edit size={30} color="white" />
                    </div>
                  ) : null}
                </div>
              </label>
                <input
                  id="profile-img-upload"
                  type="file"
                  accept="image/jpeg, image/png, image/gif, image/svg+xml"
                  onChange={handleProfileImageChange}
                  style={{ display: 'none' }}
                />
            </div> 

            <div class="flex flex-col items-center justify-center w-3/5">
            <p className='mb-1 text-gray-600'>Cover Photo</p>
                <label htmlFor="cover-img-upload" className="flex flex-col items-center justify-center w-full h-44 border-2 border-gray-200 rounded-lg cursor-pointer bg-gray-50">
                <div 
                style={{ position: 'relative' }}
                onMouseEnter={() => setIsHoveredCover(true)}
                onMouseLeave={() => setIsHoveredCover(false)}
                class="flex flex-col items-center justify-center h-full w-full">
                  <img
                    src={selectedCoverImage || user.bg_img_url || 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png'}
                    className='rounded-md'
                    style={{
                      // cursor: loggedInUser.id === user.id ? "pointer" : "default",
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      filter: isHoveredCover ? 'blur(2px)' : 'none',
                      transition: 'filter 0.3s ease',
                    }}
                  />
                  {isHoveredCover ? (
                    <div
                      style={{
                        cursor: "pointer",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <Edit size={30} color="white" />
                    </div>
                  ) : null}
                </div>
              </label>
                <input
                  id="cover-img-upload"
                  type="file"
                  accept="image/jpeg, image/png, image/gif, image/svg+xml"
                  onChange={handleCoverImageChange}
                  style={{ display: 'none' }}
                />
            </div>  
            </div>
            {/* User Info */}
            <div className='mt-10'>
                <div class="grid gap-6 mb-6 md:grid-cols-3">
                    <div className='text-left'>
                        <label for="first_name" class="block mb-0.5 ml-0.5  text-sm font-medium text-gray-900">Name</label>
                        <input value={name} onChange={e => setName(e.target.value)} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                    <div className='text-left'>
                        <label for="location" class="block mb-0.5 ml-0.5 text-sm font-medium text-gray-900">Location</label>
                        <input value={location} onChange={e => setLocation(e.target.value)} type="text" id="location" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                    </div>    
                    <div className='text-left'>
                        <label for="phone" class="block mb-0.5 ml-0.5 text-sm font-medium text-gray-900">Phone</label>
                        <input value={phone} onChange={e => setPhone(e.target.value)} type="text" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                    </div>  
                </div>
                <div class="mb-6 text-left">
                    <label for="Bio" class="block mb-0.5 ml-0.5 text-sm font-medium text-gray-900">Bio</label>
                    <input value={bio} onChange={e => setBio(e.target.value)} type="text" id="Bio" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                </div>

                <div className='text-left '>
                  <p className='font-semibold'>Links</p>
                  <div className='w-full flex flex-wrap flex-row justify-start items-start mt-5'>
                    <a onClick={togglePopUp} className='mr-8 mb-2 flex flex-col flex-center items-center'>
                      <Plus className='h-20 w-20 p-3 hover:scale-95 duration-200 cursor-pointer bg-white rounded-xl border-2 border-gray-50 shadow-xl'/>
                    </a>
                    {
                      links.map((link, index) => (
                        <div key={index} className='mr-8 mb-2 flex flex-col flex-center items-center relative'>
                          <img src={socialMediaIcons[link.name]} className='h-20 w-20  bg-white rounded-xl border-2 border-gray-50 shadow-xl' />
                          <p className='text-xs mt-1'>{link.name}</p>
                          <button className="shadow-xl hover:scale-95 duration-200 cursor-pointer absolute top-0 right-0 mt-1 mr-1 p-1 text-red-600 rounded-full bg-white" onClick={() => handleRemoveLink(index)}>
                            <X className='h-4 w-4'/>
                          </button>
                        </div>
                      ))
                    }
                </div>
                </div>

                <div className='text-left'>
                  <button onClick={() => { submitCard(); toggleQRPopUp(); }} type="button" className="mt-5 my-5 py-2 w-1/4 shadow-md bg-[#14B8A6] text-white text-xl rounded-full focus:outline-none">
                    Save
                  </button>
                </div>

            </div>
    
          </div>
        {/* Preview */}
        <div className='border-2 border-gray-100 rounded-3xl shadow-2xl mr-10 min-w-[265px]'>
          <div className='flex flex-row justify-center items-center'>
          <div className='w-full'>
            <div className='relative'>
              <div  style={{ clipPath: 'ellipse(85% 67% at 78% 22%)'}} className='bg-[#013941] h-48 sm:rounded-3xl flex items-center justify-center relative overflow-hidden'>
                <div className='absolute bg-cover bg-cenwter w-full h-full' style={{ backgroundImage: `url(${ selectedCoverImage || card.bg_img_url || 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png'})` }}></div>
              </div>
            <div className='absolute left-0 bottom-0'>    
                <img className='h-20 w-20 ml-2 mb-5 border-4 border-white rounded-full' src={selectedProfileImage || card.profile_img_url || 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png'} alt="" />     
            </div>
          </div>
          <div className='px-2'>
          <div className='text-left px-1'>
            <h2 className='text-xl mb-2 font-semibold'>{ name || "Jared Dunn "}</h2>
            <div className='w-full text-sm text-gray-600'>
              <p>{location || 'San Fancisco, CA'}</p>
              <p>{bio || 'Works @ Piped Piper'}</p>
            </div>
          </div>

          <div className='w-full grid grid-cols-3 justify-center items-center gap-3 mt-5'>
          {!links || links.length === 0 ? (
            <a onClick={togglePopUp} className='flex flex-col flex-center items-center'>
              <Plus className='h-20 w-20 p-3 hover:scale-95 duration-200 cursor-pointer bg-white rounded-xl border-2 border-gray-50 shadow-xl'/>
            </a>
          ) : (
            links.map((link, index) => (
              <a key={index} className='flex flex-col flex-center items-center'>
                <img className='h-12 w-12 rounded-xl shadow-xl' src={socialMediaIcons[link.name]} alt={link.name} />
                <p className='text-xs mt-1'>{link.name}</p>
              </a>
            ))
          )}    
          </div>
          
          <div className='mb-5 flex flex-col items-center justify-center'>
            <div className='mt-5 w-4/5 text-center bg-[#013941] py-1 px-2 mx-2 text-md font-semibold text-white shadow-xl rounded-full'>Add Contact</div>
          </div>

          </div>
          </div>
        </div>
        </div>
        </div>
        
        {isPopUpOpen && <LinkSearch onClose={togglePopUp} updateLinks={updateLinks} />}
        {isQRPopUpOpen && <CardQRPopUp onCloseQR={toggleQRPopUp} cardId={card.card_id}/>}
    </div>
  )
}

export default CreateNewCardPersonal