// Octokit.js
// https://github.com/octokit/core.js#readme
const { Octokit } = require("@octokit/core");
const octokit = new Octokit({
  auth: ''
})

// await octokit.request('GET /user', {})

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