
const MY_KEY = process.env.REACT_APP_API_KEY
const { Octokit } = require("@octokit/core");
const octokit = new Octokit({
  auth: '${MY_KEY}'
})



const getMembers = async () => {
  try {
    const response = 
      await octokit.request('GET /users{?since,per_page}', {per_page:10});
      console.log(response.data)
      if (!response.ok) {
      console.log(response.status)
      throw new Error(response.status)
    }
    const data = await response.json()
    return data
  }
  catch (error) {
    console.log(error.message)
  }
}

export { getMembers }