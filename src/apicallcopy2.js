require('./database')

const League = require('./models/League')

async function main(element) {
  const league = new League({
    league_id: element.league_id,
    name: element.name,
    type: element.type,
    country: element.country,
    country_code: element.country_code,
    season: element.season,
    season_start: element.season_start,
    season_end: element.season_end,
    logo: element.logo,
    flag: element.flag,
    standings: element.standings,
    is_current: element.is_current,
    coverage: [
      {
        standings: element.coverage.standings,
        fixtures: {
          events: element.coverage.fixtures.events,
          lineups: element.coverage.fixtures.lineups,
          statistics: element.coverage.fixtures.statistics,
          players_statistics: element.coverage.fixtures.players_statistics
        },
        players: element.coverage.players,
        topScorers: element.coverage.topScorers,
        predictions: element.coverage.predictions,
        odds: element.coverage.odds
      }
    ]
  })

  const leagueSaved = await league.save();
  return leagueSaved
}

var unirest = require("unirest");
var js = null;

var req = unirest("GET", "https://api-football-v1.p.rapidapi.com/v2/fixtures/live");

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
