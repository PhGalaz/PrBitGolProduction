const axios = require('axios').default;





async function api(url){
  const resp = await axios.get(url, {
    headers: {
      "x-rapidapi-key": "43dea35be8msh72fd9cb56f52a00p1a8f28jsn9827228c9bce",
    	"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    	"useQueryString": true
    }
  })
  .then((res) => {
    return res.data.api
  })
  .catch((error) => {
    console.error(error)
  })
  return resp
}




module.exports = {
  api: api
}
