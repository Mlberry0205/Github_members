
const MY_KEY = process.env.REACT_APP_API_KEY;
const { Octokit } = require("@octokit/core");
const octokit = new Octokit({
  auth: `token ${MY_KEY}`
});

const getMembers = async () => {
  try {
    const response = await octokit.request('GET /users{?since,per_page}', {per_page:10});
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

getMembers()
  .then(data => console.log(data))
  .catch(error => console.error(error));
   console.log(getMembers())



const getSingleMember = async (username) => {
  try {
    const response = await octokit.request(`GET /users/${username}`);
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

getSingleMember()
  .then(data => console.log(data))
  .catch(error => console.error(error));
   console.log(getMembers())
  

export { getMembers, getSingleMember };

