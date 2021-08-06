require('./database')

const League = require('./models/League')

async function main(element) {

  })

  const leagueSaved = await league.save();
  return leagueSaved
}

var unirest = require("unirest");
var js = null;

var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/fixtures/date/2021-01-17");

req.headers({
	"x-rapidapi-key": "43dea35be8msh72fd9cb56f52a00p1a8f28jsn9827228c9bce",
	"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	js = res.body.api;

  console.log(js)

});
