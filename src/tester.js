var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v2/fixtures/live',
  headers: {
    'x-rapidapi-key': '43dea35be8msh72fd9cb56f52a00p1a8f28jsn9827228c9bce',
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
