import {useLocation } from 'react-router-dom';
import { fetchUserProfile , fetchUserRepos} from '../services/githubApi.js';

import React, { useEffect, useState } from 'react'

const Profile = () => {
  const location = useLocation();
  const { username } = location.state;

  const [userData , setUserData] = useState(null);
  const [repos ,setRepos] = useState([]);
  const[loading , setLoading] = useState(true);
  const [error , setError] = useState(null);



  useEffect(() => {
    async function loadData() {
      try{
        setLoading(true);

        // fetch user profile
        const user = await fetchUserProfile(username);
        setUserData(user);

        // fetch user repos
        const userRepos = await fetchUserRepos(username);
        setRepos(userRepos);

        setLoading(false);
      }catch (err){
        setError(err.message);
        setLoading(false);
      }
    }
    loadData();

  } , [username]);

  //Show loading state
  if(loading){
    return(
      <div className='flex items-center justify-center min-h-screen'>
        <p className='text-white text-xl'>Loading...</p>
      </div>
    )
  }

  //show error state
  if(error){
    return(
      <div className='flex items-center justify-center min-h-screen'>
        <p className='text-red-500 text-xl'></p>
      </div>
    )
  }
  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen bg-black text-white p-8'>
      {/* Profile Section */}
      <div className='flex flex-col md:flex-row gap-8 items-center'>
        {/* Left: Avatar */}
        <img 
          src={userData.avatar_url} 
          alt={userData.name}
          className='w-48 h-48 rounded-full border-4 border-purple-500'
        />
        
        {/* Right: User Info */}
        <div>
          <h1 className='text-4xl font-bold'>{userData.name || userData.login}</h1>
          <p className='text-gray-400 mt-2'>{userData.bio}</p>
          <div className='flex gap-4 mt-4'>
            <span>📍 {userData.location}</span>
            <span>⭐ {userData.followers} followers</span>
            <span>📦 {userData.public_repos} repos</span>
          </div>
        </div>
      </div>

      {/* Repositories Section */}
      <div className='mt-12 w-full max-w-4xl'>
        <h2 className='text-3xl font-bold mb-6'>Repositories ({repos.length})</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {repos.slice(0, 6).map(repo => (
            <div key={repo.id} className='border border-gray-700 rounded-lg p-4 bg-gray-900'>
              <h3 className='text-xl font-semibold text-purple-400'>{repo.name}</h3>
              <p className='text-gray-400 text-sm mt-2'>{repo.description || "No description"}</p>
              <div className='flex gap-4 mt-4 text-sm'>
                <span>⭐ {repo.stargazers_count}</span>
                <span>🍴 {repo.forks_count}</span>
                {repo.language && <span>💻 {repo.language}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  
  );
}

export default Profile