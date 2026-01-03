

async function fetchUserProfile(username){
    try{
        const url = `https://api.github.com/users/${username}`;

        const response = await fetch(url);
        if(!response.ok){
            throw new Error('User not found: ${username}');
        }
        const data = await response.json();

        return data;

    } catch (error){
            console.error("Error fetching user profile:" , error.message);
            throw error;
    }
    
}


async function fetchUserRepos(username){
    try{
        const url = `https://api.github.com/users/${username}/repos?per_page=30&sort=updated`;

        const response = await fetch(url);

        if(!response.ok){
            throw new Error(`Failed to fetch repos for ${username}`);
        }

        const repos = await response.json();

        return repos;
    }catch(error){
        console.error("Error fetching user repos:" , error.message);
        throw error;
    }
}

export { fetchUserProfile  , fetchUserRepos};