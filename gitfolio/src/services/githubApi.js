const BASE_URL = "https://api.github.com";


export async function fetchGitHubUser(username){
    const response = await fetch(`${BASE_URL}/users/${username}`);

    if(!response.ok){
        throw new Error("Github user not found");
    }

    return response.json();
}