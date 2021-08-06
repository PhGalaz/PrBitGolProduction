const { Schema, model } = require('mongoose');

const leagueSchema = new Schema({
  league_id: Number,
  name: String,
  type: String,
  country: String,
  country_code: String,
  season: Number,
  season_start: Date,
  season_end: Date,
  logo: String,
  flag: String,
  standings: Number,
  is_current: Number,
  coverage: [
    {
      standings: Boolean,
      fixtures: {
        events: Boolean,
        lineups: Boolean,
        statistics: Boolean,
        players_statistics: Boolean
      },
      players: Boolean,
      topScorers: Boolean,
      predictions: Boolean,
      odds: Boolean
    }
  ]
})

module.exports = model('League', leagueSchema)
