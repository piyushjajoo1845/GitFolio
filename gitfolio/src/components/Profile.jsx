import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { fetchGitHubUser } from '../services/githubApi';

const Profile = () => {

    const {state} = useLocation();
    const username = state?.username;

    const[profile , setProfile] = useState(null);
    const [loading , setLoading] = useState(true);
    const [error ,setError] = useState("");

    useEffect(() => {
      if(!username){
        setError("No Github username provided");

      }

      async function loadProfile(){
        try{
          const data = await fetchGitHubUser(username);
          setProfile(data);
        }catch(err){
          setError(err.message);
        }finally{
          setLoading(false);
        }
      }


      loadProfile();
    } , [username]);

    if (loading) {
    return <p className="text-center mt-20">Loading profile...</p>;
  }

  if (error) {
    return <p className="text-center mt-20 text-red-500">{error}</p>;
  }
  return (
    <div className='flex flex-col md:flex-row'>


      <div>
        <h1 className='text-white'>
          {profile.name}
        </h1>

        <p className='text-white'>
          {profile.bio}
        </p>
      </div>
      <div>
        <img 
        className='rounded-full'
        src={profile.avatar_url} 
        alt="avatar" />
      </div>

      
    </div>
    
  );
}

export default Profile