const { Router } = require('express');
const router = Router();
const faker = require('faker');
const api = require('../ApiCall.js');
require('../database')


const Bet = require('../models/Bet');
const League = require('../models/League');
const Fixture = require('../models/Fixture');
const Live = require('../models/Live');

router.get('/newbet', async (req, res) => {
  const fixture = await Fixture.findOne({fixture_id: 328344});
  await Bet.create({
    bet_id: faker.random.number(),
    init_tx: faker.random.word(),
    init_amount: 20000,
    taken_amount: 15000,
    fixture_id: 328344,
    fixture: fixture,
    type: 'evslv',
    factor: 3,
    status: 'open'
  });
  res.json('new bet created!');
});

router.get('/leagues', async (req, res) => {
  const leagues = await League.find();
  res.json({ leagues });
});

router.get('/live', async (req, res) => {
  const livegames = await Live.find();
  res.json({ livegames });
});

router.get('/bets', async (req, res) => {
  const bets = await Bet.find();
  res.json({ bets });
});

async function myFunction () {
    const delit = await Live.deleteMany();
    const livegames = await api.api('https://api-football-v1.p.rapidapi.com/v2/fixtures/live');
    for (let livegame of livegames.fixtures) {
      await Live.create({
          fixture_id: livegame.fixture_id,
          league_id: livegame.league_id,
          league: livegame.league,
          event_date: livegame.event_date,
          event_timestamp: livegame.event_timestamp,
          firstHalfStart: livegame.firstHalfStart,
          secondHalfStart: livegame.secondHalfStart,
          round: livegame.round,
          status: livegame.status,
          statusShort: livegame.statusShort,
          elapsed: livegame.elapsed,
          venue: livegame.venue,
          referee: livegame.referee,
          homeTeam: livegame.homeTeam,
          awayTeam: livegame.awayTeam,
          goalsHomeTeam: livegame.goalsHomeTeam,
          goalsAwayTeam: livegame.goalsAwayTeam,
          score: livegame.score
      })
  }
}

var interval = setInterval(function () { myFunction(); }, 1200000);

module.exports = router;
