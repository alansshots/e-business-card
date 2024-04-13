import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Edit } from 'react-feather';
import supabase from '../../config/supabaseClient'

import LinkSearch from '../../components/dashboardComponents/LinksSearchPoUp'

import Background from '../../assets/bgprofile.jpg';
import GitHub from '../../assets/GitHubLogo.png';
import Profile from '../../assets/profile.jpg';
import { data } from 'autoprefixer';

function CreateNewCardPersonal() {
  const navigate = useNavigate();
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
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

  useEffect(() => {
    async function getLoggedInUser() {
      if (jwt) {
        const { data, error } = await supabase.auth.getUser(jwt);
        if (data?.user) {
          setLoggedInUser(data.user);
          console.log(data.user);
        }
      }
    }
    async function getUserCard() {
      try {
        let { data, error } = await supabase
          .from('cards')
          .select()
          .eq('user_id', userId);
    
        if (error) {
          throw error;
        }
    
        if (data) {
          setCard(data);
          console.log(data);
        }
      } catch (error) {
        console.error('Error fetching user cards:', error.message);
        // Handle the error here, such as displaying an error message to the user
      }
    }

    
    if (jwt && !loggedInUser) {
      getLoggedInUser();

      getUserCard(); 
    }
    
  }, [jwt]);
  

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

    // Profile Imgage Change 
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
 
   useEffect(() => {
     async function getUserData() {
       const { data, error } = await supabase.auth.getUser(jwt);
       if (data?.user) {
         setUserId(data.user.id);
       }
     }
   
     const fetchUser = async () => {
       // Wait for userId to be set
       if (userId) {
         const { data: user, error } = await supabase
           .from('users')
           .select()
           .eq('id', userId);
   
         if (user) {
           setUser(user[0]);
         }
       }
     };

     const fetchCard = async () => {
      try {
        let { data, error } = await supabase
          .from('cards')
          .select()
          .eq('user_id', userId);
    
        if (error) {
          throw error;
        }
    
        if (data && data.length > 0) {
          const cardData = data[0];
          setCard(cardData);
          console.log(cardData);
    
          // Parse the JSON string into an array
          const linksArray = JSON.parse(cardData.selected_links);
          setLinks(linksArray);
          console.log(links);
        }
      } catch (error) {
        console.error('Error fetching user cards:', error.message);
        // Handle the error here, such as displaying an error message to the user
      }
    };

     if (jwt) {
       // First, get user data from auth
       getUserData();
       
       // Then, fetch user data from the database
       fetchUser();

       fetchCard();
     }
   }, [jwt, userId,]);  // Added userId as a dependency

  //   //  if (!title || salary === null || !industry || !location) {
  //   //    console.error('Error: Title, salary, industry, and location cannot be null.');
  //   //    // Handle the error state, for example, show an error message to the user
  //   //    setErrorVisible(true);
  //   //    setTimeout(() => {
  //   //      setErrorVisible(false);
  //   //    }, 5000);
  //   //    return;
  //   //  }

   async function submitCard() {
    const date = new Date().toLocaleDateString();
    try {
      const { data, error } = await supabase
        .from('cards')
        .update([
          {  
            user_id: userId,
            name: name,
            created_at: date,
            phone: phone,
            location: location,
            bio: bio,
            profile_img_url: selectedProfileImage,
            bg_img_url: selectedCoverImage,
          },
        ])
        .eq('user_id', userId);
  
      if (error) {
        throw new Error(`Error creating new card: ${error.message}`);
      }
  
      console.log('New card created successfully:', data);
  
      // Update state variables with new image URLs and other data
      setSelectedProfileImage(data[0].profile_img_url);
      setSelectedCoverImage(data[0].bg_img_url);
      setCard(data[0]);
  
    } catch (error) {
      console.error('Error creating new card:', error);
      // Handle error state
    }
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
                    src={card.profile_img_url || selectedProfileImage || user.profile_image_url || 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png'}
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
              { loggedInUser.id === user.id && (
                <input
                  id="profile-img-upload"
                  type="file"
                  accept="image/jpeg, image/png, image/gif, image/svg+xml"
                  onChange={handleProfileImageChange}
                  style={{ display: 'none' }}
                />
              )}
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
                    src={card.bg_img_url || selectedCoverImage || user.bg_img_url}
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
              { loggedInUser.id === user.id && (
                <input
                  id="cover-img-upload"
                  type="file"
                  accept="image/jpeg, image/png, image/gif, image/svg+xml"
                  onChange={handleCoverImageChange}
                  style={{ display: 'none' }}
                />
              )}
              
            </div>  
            </div>
            {/* User Info */}
            <form className='mt-10'>
                <div class="grid gap-6 mb-6 md:grid-cols-3">
                    <div className='text-left'>
                        <label for="first_name" class="block mb-0.5 ml-0.5  text-sm font-medium text-gray-900">Name</label>
                        <input placeholder={name} value={name} onChange={e => setName(e.target.value)} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5" required />
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
                        <div key={index} className='mr-8 mb-2 flex flex-col flex-center items-center'>
                          <a href={link.url} className='h-20 w-20 p-3 hover:scale-95 duration-200 cursor-pointer bg-white rounded-xl border-2 border-gray-50 shadow-xl'>
                            {link.name}
                          </a>
                        </div>
                      ))
                    }
                </div>
                </div>

                <div className='text-left'>
                  <button onClick={submitCard} type='button' className="mt-5 my-5 py-2 w-1/4 shadow-md bg-[#14B8A6] text-white text-xl rounded-full focus:outline-none focus:ring ">
                    Save
                  </button>
                </div>

            </form>
    
          </div>
        {/* Preview */}
        <div className='border-2 border-gray-100 rounded-3xl shadow-2xl mr-10 min-w-[265px]'>
          <div className='flex flex-row justify-center items-center'>
          <div className='w-full'>
            <div className='relative'>
              <div  style={{ clipPath: 'ellipse(85% 67% at 78% 22%)'}} className='bg-[#013941] h-48 sm:rounded-3xl flex items-center justify-center relative overflow-hidden'>
                <div className='absolute bg-cover bg-cenwter w-full h-full' style={{ backgroundImage: `url(${ card.bg_img_url || selectedCoverImage || 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png'})` }}></div>
              </div>
            <div className='absolute left-0 bottom-0'>    
                <img className='h-20 w-20 ml-2 mb-5 border-4 border-white rounded-full' src={card.profile_img_url || selectedProfileImage || 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png'} alt="" />     
            </div>
          </div>
          <div className='px-2'>
          <div className='text-left px-1'>
            <h2 className='text-xl mb-2 font-semibold'>{name || name || "Jared Dunn "}</h2>
            <div className='w-full text-sm text-gray-600'>
              <p>{location || location || 'San Fancisco, CA'}</p>
              <p>{bio || bio || 'Works @ Piped Piper'}</p>
            </div>
          </div>
            <div className='w-full flex flex-wrap flex-row justify-start items-center mt-5 ml-3'>
              {!links || links.length === 0 ? (
                    <a onClick={togglePopUp} className='mr-8 mb-2 flex flex-col flex-center items-center'>
                      <Plus className='h-20 w-20 p-3 hover:scale-95 duration-200 cursor-pointer bg-white rounded-xl border-2 border-gray-50 shadow-xl'/>
                    </a>
                  ) : (
                    links.map((link, index) => (
                      <a key={index} className='mx-4 mb-2 flex flex-col flex-center items-center'>
                      <img className='h-12 w-12  rounded-xl shadow-xl' src={GitHub} alt={link.name} />
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
        
        {isPopUpOpen && <LinkSearch onClose={togglePopUp} />}
    </div>
  )
}

export default CreateNewCardPersonal