import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    leagues: [],
    bets: [],
    fictures: {
      '647042': {
        fixture_id: '647842',
        event_timestamp: '1609280400',
        event_date: '2020-12-29T22:20:00+00:00',
        league_id: '3052',
        round: 'Upper Table Round - 5',
        homeTeam_id: '452',
        awayTeam_id: '1067',
        homeTeam: 'Tigre',
        awayTeam: 'Defensores De Belgrano',
        status: '2nd Half Started',
        statusShort: '2H',
        goalsHomeTeam: '0',
        goalsAwayTeam: '1',
        halftime_score: '0-0',
        final_score: null,
        penalty: '-',
        elapsed: '90',
        firstHalfStart: '1609280400',
        secondHalfStart: '1609284000'
      }
    },
    nowPlaying: [

    ],
    countries: {
      '1': 'Albania',
      '2': 'Algeria',
      '3': 'Andorra',
      '4': 'Angola',
      '5': 'Argentina',
      '6': 'Armenia',
      '7': 'Aruba',
      '8': 'Australia',
      '9': 'Austria',
      '10': 'Azerbaidjan',
      '11': 'Bahrain',
      '12': 'Bangladesh',
      '13': 'Barbados',
      '14': 'Belarus',
      '15': 'Belgium',
      '16': 'Belize',
      '17': 'Benin',
      '18': 'Bermuda',
      '19': 'Bhutan',
      '20': 'Bolivia',
      '21': 'Bosnia',
      '22': 'Botswana',
      '23': 'Brazil',
      '24': 'Bulgaria',
      '25': 'Burkina-Faso',
      '26': 'Burundi',
      '27': 'Cambodia',
      '28': 'Cameroon',
      '29': 'Canada',
      '30': 'Chile',
      '31': 'China',
      '32': 'Chinese-Taipei',
      '33': 'Colombia',
      '34': 'Congo-DR',
      '35': 'Costa-Rica',
      '36': 'Croatia',
      '37': 'Curacao',
      '38': 'Cyprus',
      '39': 'Czech-Republic',
      '40': 'Denmark',
      '41': 'Ecuador',
      '42': 'Egypt',
      '43': 'El-Salvador',
      '44': 'England',
      '45': 'Estonia',
      '46': 'Ethiopia',
      '47': 'Faroe-Islands',
      '48': 'Fiji',
      '49': 'Finland',
      '50': 'France',
      '51': 'Georgia',
      '52': 'Germany',
      '53': 'Ghana',
      '54': 'Greece',
      '55': 'Guadeloupe',
      '56': 'Guatemala',
      '57': 'Guinea',
      '58': 'Haiti',
      '59': 'Honduras',
      '60': 'Hong-Kong',
      '61': 'Hungary',
      '62': 'Iceland',
      '63': 'India',
      '64': 'Indonesia',
      '65': 'Iran',
      '66': 'Iraq',
      '67': 'Ireland',
      '68': 'Israel',
      '69': 'Italy',
      '70': 'Ivory-Coast',
      '71': 'Jamaica',
      '72': 'Japan',
      '73': 'Jordan',
      '74': 'Kazakhstan',
      '75': 'Kenya',
      '76': 'Kosovo',
      '77': 'Kuwait',
      '78': 'Kyrgyzstan',
      '79': 'Laos',
      '80': 'Latvia',
      '81': 'Lebanon',
      '82': 'Libya',
      '83': 'Lithuania',
      '84': 'Luxembourg',
      '85': 'Macedonia',
      '86': 'Malawi',
      '87': 'Malaysia',
      '88': 'Mali',
      '89': 'Malta',
      '90': 'Mexico',
      '91': 'Moldova',
      '92': 'Montenegro',
      '93': 'Morocco',
      '94': 'Myanmar',
      '95': 'Namibia',
      '96': 'Nepal',
      '97': 'Netherlands',
      '98': 'New-Zealand',
      '99': 'Nicaragua',
      '100': 'Nigeria',
      '101': 'Northern-Ireland',
      '102': 'Norway',
      '103': 'Oman',
      '104': 'Palestine',
      '105': 'Panama',
      '106': 'Paraguay',
      '107': 'Peru',
      '108': 'Poland',
      '109': 'Portugal',
      '110': 'Qatar',
      '111': 'Romania',
      '112': 'Russia',
      '113': 'Rwanda',
      '114': 'San-Marino',
      '115': 'Saudi-Arabia',
      '116': 'Scotland',
      '117': 'Senegal',
      '118': 'Serbia',
      '119': 'Singapore',
      '120': 'Slovakia',
      '121': 'Slovenia',
      '122': 'South-Africa',
      '123': 'South-Korea',
      '124': 'Spain',
      '125': 'Sudan',
      '126': 'Surinam',
      '127': 'Sweden',
      '128': 'Switzerland',
      '129': 'Syria',
      '130': 'Tajikistan',
      '131': 'Tanzania',
      '132': 'Thailand',
      '133': 'Trinidad-And-Tobago',
      '134': 'Tunisia',
      '135': 'Turkey',
      '136': 'Turkmenistan',
      '137': 'Uganda',
      '138': 'Ukraine',
      '139': 'United-Arab-Emirates',
      '140': 'Uruguay',
      '141': 'USA',
      '142': 'Uzbekistan',
      '143': 'Venezuela',
      '144': 'Vietnam',
      '145': 'Wales',
      '146': 'World',
      '147': 'Zambia',
      '148': 'Zimbabwe'
    },

    continentes: [
      {
        continente_id: 0,
        name: 'América',
        paises: [
          {
            pais_id: 30,
            equipos: [
              {
                team_id: 2325,
                name: 'Everton de Vina',
                code: null,
                logo: 'https://media.api-sports.io/football/teams/2325.png',
                country: 'Chile',
                is_national: false,
                founded: 1909,
                venue_name: 'Estadio Sausalito',
                venue_surface: 'grass',
                venue_address: 'Calle Padre Alberto Hurtado',
                venue_city: 'Viña del Mar',
                venue_capacity: 23360
              },
              {
                team_id: 2324,
                name: 'Universidad de Concepcion',
                code: null,
                logo: 'https://media.api-sports.io/football/teams/2324.png',
                country: 'Chile',
                is_national: false,
                founded: 1994,
                venue_name: 'Estadio Municipal Alcaldesa Ester Roa Rebolledo',
                venue_surface: 'grass',
                venue_address: 'Avenida Ignacio Collao esq. Calle Tegualda',
                venue_city: 'Concepción',
                venue_capacity: 33000
              },
              {
                team_id: 2320,
                name: "O'Higgins",
                code: null,
                logo: 'https://media.api-sports.io/football/teams/2320.png',
                country: 'Chile',
                is_national: false,
                founded: 1955,
                venue_name: 'Estadio El Teniente',
                venue_surface: 'grass',
                venue_address: 'Avenida Capitán Ramón Freire',
                venue_city: 'Rancagua',
                venue_capacity: 14450
              },
              {
                team_id: 2326,
                name: 'Union La Calera',
                code: null,
                logo: 'https://media.api-sports.io/football/teams/2326.png',
                country: 'Chile',
                is_national: false,
                founded: 1954,
                venue_name: 'Estadio Municipal Nicolás Chahuán Nazar',
                venue_surface: 'grass',
                venue_address: 'Calle General Esmeralda esq. Calle Baquedano',
                venue_city: 'La Calera',
                venue_capacity: 15000
              },
              {
                team_id: 2327,
                name: 'Antofagasta',
                code: null,
                logo: 'https://media.api-sports.io/football/teams/2327.png',
                country: 'Chile',
                is_national: false,
                founded: 1966,
                venue_name: 'Estadio Regional Calvo y Bascuñán',
                venue_surface: 'grass',
                venue_address: 'Avenida Angamos',
                venue_city: 'Antofagasta',
                venue_capacity: 21178
              },
              {
                team_id: 2330,
                name: 'Coquimbo Unido',
                code: null,
                logo: 'https://media.api-sports.io/football/teams/2330.png',
                country: 'Chile',
                is_national: false,
                founded: 1957,
                venue_name: 'Estadio Bicentenario Francisco Sánchez Rumoroso',
                venue_surface: 'grass',
                venue_address: 'Calle Pedro de Valdivia',
                venue_city: 'Coquimbo',
                venue_capacity: 18750
              },
              {
                team_id: 2329,
                name: 'A. Italiano',
                code: null,
                logo: 'https://media.api-sports.io/football/teams/2329.png',
                country: 'Chile',
                is_national: false,
                founded: 1910,
                venue_name: 'Estadio Bicentenario Municipal de La Florida',
                venue_surface: 'artificial turf',
                venue_address: 'Calle Enrique Olivares 1003, La Florida',
                venue_city: 'Santiago de Chile',
                venue_capacity: 12000
              },
              {
                team_id: 2331,
                name: 'Cobresal',
                code: null,
                logo: 'https://media.api-sports.io/football/teams/2331.png',
                country: 'Chile',
                is_national: false,
                founded: 1979,
                venue_name: 'Estadio El Cobre',
                venue_surface: 'grass',
                venue_address: 'Avenida Arqueros 2500',
                venue_city: 'El Salvador, Diego de Almagro',
                venue_capacity: 20752
              },
              {
                team_id: 2333,
                name: 'Santiago Wanderers',
                code: null,
                logo: 'https://media.api-sports.io/football/teams/2333.png',
                country: 'Chile',
                is_national: false,
                founded: 1892,
                venue_name: 'Estadio Elías Figueroa Brander',
                venue_surface: 'grass',
                venue_address: 'Avenida Guillermo González de Hontaneda, Playa Ancha',
                venue_city: 'Valparaíso',
                venue_capacity: 21113
              },
              {
                team_id: 2994,
                name: 'U. Catolica',
                code: null,
                logo: 'https://media.api-sports.io/football/teams/2994.png',
                country: 'Chile',
                is_national: false,
                founded: 1937,
                venue_name: 'Estadio San Carlos de Apoquindo',
                venue_surface: 'grass',
                venue_address: 'Camino Las Flores 13000, sector San Carlos de Apoquindo, Las Condes',
                venue_city: 'Santiago de Chile',
                venue_capacity: 18044
              },
              {
                team_id: 2328,
                name: 'Huachipato',
                code: null,
                logo: 'https://media.api-sports.io/football/teams/2328.png',
                country: 'Chile',
                is_national: false,
                founded: 1947,
                venue_name: 'Estadio CAP',
                venue_surface: 'grass',
                venue_address: 'Avenida Desiderio García 909, Las Higueras',
                venue_city: 'Talcahuano',
                venue_capacity: 10579
              },
              {
                team_id: 2323,
                name: 'Universidad de Chile',
                code: null,
                logo: 'https://media.api-sports.io/football/teams/2323.png',
                country: 'Chile',
                is_national: false,
                founded: 1927,
                venue_name: 'Estadio Nacional Julio Martínez Prádanos',
                venue_surface: 'grass',
                venue_address: 'Avenida Grecia 2001, Ñuñoa',
                venue_city: 'Santiago de Chile',
                venue_capacity: 48665
              },
              {
                team_id: 2321,
                name: 'Union Espanola',
                code: null,
                logo: 'https://media.api-sports.io/football/teams/2321.png',
                country: 'Chile',
                is_national: false,
                founded: 1897,
                venue_name: 'Estadio Santa Laura-Universidad SEK',
                venue_surface: 'grass',
                venue_address: 'Avenida Huanuco esq. Santa Laura',
                venue_city: 'Santiago de Chile',
                venue_capacity: 28500
              },
              {
                team_id: 2319,
                name: 'Deportes Iquique',
                code: null,
                logo: 'https://media.api-sports.io/football/teams/2319.png',
                country: 'Chile',
                is_national: false,
                founded: 1978,
                venue_name: 'Estadio Tierra de Campeones',
                venue_surface: 'grass',
                venue_address: 'Avenida Soldado Pedro Prado con Avenida Tadeo Haenke',
                venue_city: 'Iquique',
                venue_capacity: 12000
              },
              {
                team_id: 2315,
                name: 'Colo Colo',
                code: null,
                logo: 'https://media.api-sports.io/football/teams/2315.png',
                country: 'Chile',
                is_national: false,
                founded: 1925,
                venue_name: 'Estadio Monumental David Arellano',
                venue_surface: 'grass',
                venue_address: 'Avenida Marathon 5300, Macul',
                venue_city: 'Santiago de Chile',
                venue_capacity: 47017
              },
              {
                team_id: 2318,
                name: 'Palestino',
                code: null,
                logo: 'https://media.api-sports.io/football/teams/2318.png',
                country: 'Chile',
                is_national: false,
                founded: 1920,
                venue_name: 'Estadio Municipal de La Cisterna',
                venue_surface: 'grass',
                venue_address: 'Avenida El Parrón 999, La Cisterna',
                venue_city: 'Santiago de Chile',
                venue_capacity: 12000
              },
              {
                team_id: 2316,
                name: 'Curico Unido',
                code: null,
                logo: 'https://media.api-sports.io/football/teams/2316.png',
                country: 'Chile',
                is_national: false,
                founded: 1973,
                venue_name: 'Estadio Bicentenario La Granja',
                venue_surface: 'grass',
                venue_address: 'Avenida Alesandri con Calle El Boldo',
                venue_city: 'Curicó',
                venue_capacity: 12000
              },
              {
                team_id: 2341,
                name: 'D. La Serena',
                code: null,
                logo: 'https://media.api-sports.io/football/teams/2341.png',
                country: 'Chile',
                is_national: false,
                founded: 1955,
                venue_name: 'Estadio La Portada de La Serena',
                venue_surface: 'grass',
                venue_address: 'Avenida Amunátegui y Avenida José Manuel Balmaceda',
                venue_city: 'La Serena',
                venue_capacity: 18500
              }
            ],
            ligas: [
              {
                league_id: 1342,
                name: 'Primera Division',
                type: 'League',
                country: 'Chile',
                country_code: 'CL',
                season: 2020,
                season_start: '2020-01-24',
                season_end: '2021-01-31',
                logo: 'https://media.api-sports.io/football/leagues/265.png',
                flag: 'https://media.api-sports.io/flags/cl.svg',
                standings: 1,
                is_current: 1,
                coverage: [Object]
              },
              {
                league_id: 1369,
                name: 'Primera B',
                type: 'League',
                country: 'Chile',
                country_code: 'CL',
                season: 2020,
                season_start: '2020-02-22',
                season_end: '2021-01-17',
                logo: 'https://media.api-sports.io/football/leagues/266.png',
                flag: 'https://media.api-sports.io/flags/cl.svg',
                standings: 1,
                is_current: 1,
                coverage: [Object]
              }
            ]
          }
        ],
        ligas: [
          {
              league_id: 2719,
              name: '1. Liga Classic - Group 3',
              type: 'Cup',
              country: 'Switzerland',
              country_code: 'CH',
              season: 2020,
              season_start: '2020-08-15',
              season_end: '2021-05-29',
              logo: 'https://media.api-sports.io/football/leagues/601.png',
              flag: 'https://media.api-sports.io/flags/ch.svg',
              standings: 1,
              is_current: 1,
              coverage: {
                standings: true,
                fixtures: [Object],
                players: false,
                topScorers: false,
                predictions: true,
                odds: false
              }
            },
            {
              league_id: 2725,
              name: 'Community Shield',
              type: 'Cup',
              country: 'England',
              country_code: 'GB',
              season: 2020,
              season_start: '2020-08-29',
              season_end: '2020-08-29',
              logo: 'https://media.api-sports.io/football/leagues/528.png',
              flag: 'https://media.api-sports.io/flags/gb.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: false,
                topScorers: false,
                predictions: true,
                odds: false
              }
            },
            {
              league_id: 2731,
              name: 'League Cup',
              type: 'Cup',
              country: 'United-Arab-Emirates',
              country_code: 'AE',
              season: 2020,
              season_start: '2020-10-08',
              season_end: '2021-01-26',
              logo: 'https://media.api-sports.io/football/leagues/302.png',
              flag: 'https://media.api-sports.io/flags/ae.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: false,
                topScorers: false,
                predictions: true,
                odds: false
              }
            },
            {
              league_id: 2739,
              name: 'Cup',
              type: 'Cup',
              country: 'Belgium',
              country_code: 'BE',
              season: 2020,
              season_start: '2020-08-23',
              season_end: '2021-01-10',
              logo: 'https://media.api-sports.io/football/leagues/147.png',
              flag: 'https://media.api-sports.io/flags/be.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: true,
                topScorers: true,
                predictions: true,
                odds: false
              }
            },
            {
              league_id: 2749,
              name: 'KNVB Beker',
              type: 'Cup',
              country: 'Netherlands',
              country_code: 'NL',
              season: 2020,
              season_start: '2020-08-29',
              season_end: '2021-01-19',
              logo: 'https://media.api-sports.io/football/leagues/90.png',
              flag: 'https://media.api-sports.io/flags/nl.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: true,
                topScorers: true,
                predictions: true,
                odds: true
              }
            },
            {
              league_id: 2750,
              name: 'Super Cup',
              type: 'Cup',
              country: 'Portugal',
              country_code: 'PT',
              season: 2020,
              season_start: '2020-12-23',
              season_end: '2020-12-23',
              logo: 'https://media.api-sports.io/football/leagues/550.png',
              flag: 'https://media.api-sports.io/flags/pt.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: false,
                topScorers: false,
                predictions: true,
                odds: true
              }
            },
            {
              league_id: 2751,
              name: 'Super Cup',
              type: 'Cup',
              country: 'Germany',
              country_code: 'DE',
              season: 2020,
              season_start: '2020-09-30',
              season_end: '2020-09-30',
              logo: 'https://media.api-sports.io/football/leagues/529.png',
              flag: 'https://media.api-sports.io/flags/de.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: false,
                topScorers: false,
                predictions: true,
                odds: false
              }
            },
            {
              league_id: 2771,
              name: 'UEFA Champions League',
              type: 'Cup',
              country: 'World',
              country_code: null,
              season: 2020,
              season_start: '2020-08-08',
              season_end: '2021-03-17',
              logo: 'https://media.api-sports.io/football/leagues/2.png',
              flag: null,
              standings: 1,
              is_current: 1,
              coverage: {
                standings: true,
                fixtures: [Object],
                players: true,
                topScorers: true,
                predictions: true,
                odds: true
              }
            },
            {
              league_id: 2772,
              name: 'League Cup',
              type: 'Cup',
              country: 'Scotland',
              country_code: 'GB',
              season: 2020,
              season_start: '2020-10-06',
              season_end: '2021-01-23',
              logo: 'https://media.api-sports.io/football/leagues/185.png',
              flag: 'https://media.api-sports.io/flags/gb.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: true,
                topScorers: true,
                predictions: true,
                odds: true
              }
            },
            {
              league_id: 2773,
              name: 'Super Cup',
              type: 'Cup',
              country: 'Armenia',
              country_code: 'AM',
              season: 2020,
              season_start: '2020-08-09',
              season_end: '2020-08-09',
              logo: 'https://media.api-sports.io/football/leagues/654.png',
              flag: 'https://media.api-sports.io/flags/am.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: false,
                topScorers: false,
                predictions: true,
                odds: false
              }
            },
            {
              league_id: 2775,
              name: 'Super Cup',
              type: 'Cup',
              country: 'Bulgaria',
              country_code: 'BG',
              season: 2020,
              season_start: '2020-08-02',
              season_end: '2020-08-02',
              logo: 'https://media.api-sports.io/football/leagues/656.png',
              flag: 'https://media.api-sports.io/flags/bg.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: false,
                topScorers: false,
                predictions: true,
                odds: false
              }
            },
            {
              league_id: 2777,
              name: 'UEFA Europa League',
              type: 'Cup',
              country: 'World',
              country_code: null,
              season: 2020,
              season_start: '2020-08-18',
              season_end: '2021-02-25',
              logo: 'https://media.api-sports.io/football/leagues/3.png',
              flag: null,
              standings: 1,
              is_current: 1,
              coverage: {
                standings: true,
                fixtures: [Object],
                players: true,
                topScorers: true,
                predictions: true,
                odds: true
              }
            },
            {
              league_id: 2781,
              name: 'League Cup',
              type: 'Cup',
              country: 'England',
              country_code: 'GB',
              season: 2020,
              season_start: '2020-08-29',
              season_end: '2020-12-22',
              logo: 'https://media.api-sports.io/football/leagues/48.png',
              flag: 'https://media.api-sports.io/flags/gb.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: true,
                topScorers: true,
                predictions: true,
                odds: true
              }
            },
            {
              league_id: 2782,
              name: 'Cup',
              type: 'Cup',
              country: 'Latvia',
              country_code: 'LV',
              season: 2020,
              season_start: '2020-07-23',
              season_end: '2020-11-08',
              logo: 'https://media.api-sports.io/football/leagues/658.png',
              flag: 'https://media.api-sports.io/flags/lv.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: false,
                topScorers: false,
                predictions: true,
                odds: false
              }
            },
            {
              league_id: 2783,
              name: 'Super Cup',
              type: 'Cup',
              country: 'Israel',
              country_code: 'IL',
              season: 2020,
              season_start: '2020-08-08',
              season_end: '2020-08-13',
              logo: 'https://media.api-sports.io/football/leagues/659.png',
              flag: 'https://media.api-sports.io/flags/il.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: false,
                topScorers: false,
                predictions: true,
                odds: false
              }
            },
            {
              league_id: 2785,
              name: 'Cup',
              type: 'Cup',
              country: 'Lithuania',
              country_code: 'LT',
              season: 2020,
              season_start: '2020-06-16',
              season_end: '2020-10-24',
              logo: 'https://media.api-sports.io/football/leagues/661.png',
              flag: 'https://media.api-sports.io/flags/lt.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: false,
                topScorers: false,
                predictions: true,
                odds: false
              }
            },
            {
              league_id: 2786,
              name: 'Copa por México',
              type: 'Cup',
              country: 'Mexico',
              country_code: 'MX',
              season: 2020,
              season_start: '2020-07-04',
              season_end: '2020-07-20',
              logo: 'https://media.api-sports.io/football/leagues/662.png',
              flag: 'https://media.api-sports.io/flags/mx.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: false,
                topScorers: false,
                predictions: true,
                odds: false
              }
            },
            {
              league_id: 2787,
              name: 'Super Cup',
              type: 'Cup',
              country: 'Russia',
              country_code: 'RU',
              season: 2020,
              season_start: '2020-08-07',
              season_end: '2020-08-07',
              logo: 'https://media.api-sports.io/football/leagues/663.png',
              flag: 'https://media.api-sports.io/flags/ru.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: false,
                topScorers: false,
                predictions: true,
                odds: false
              }
            },
            {
              league_id: 2791,
              name: 'FA Cup',
              type: 'Cup',
              country: 'England',
              country_code: 'GB',
              season: 2020,
              season_start: '2020-08-31',
              season_end: '2021-01-09',
              logo: 'https://media.api-sports.io/football/leagues/45.png',
              flag: 'https://media.api-sports.io/flags/gb.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: true,
                topScorers: true,
                predictions: true,
                odds: false
              }
            }
        ]
      },
      {
        continente_id: 1,
        name: 'Europa',
        ligas: [
          {
              league_id: 403,
              name: 'Euro Championship',
              type: 'Cup',
              country: 'World',
              country_code: null,
              season: 2020,
              season_start: '2019-03-21',
              season_end: '2020-11-12',
              logo: 'https://media.api-sports.io/football/leagues/4.png',
              flag: null,
              standings: 1,
              is_current: 1,
              coverage: {
                standings: true,
                fixtures: [Object],
                players: true,
                topScorers: true,
                predictions: true,
                odds: false
              }
            },
            {
              league_id: 1030,
              name: 'African Nations Championship',
              type: 'Cup',
              country: 'World',
              country_code: null,
              season: 2020,
              season_start: '2019-04-20',
              season_end: '2020-04-15',
              logo: 'https://media.api-sports.io/football/leagues/19.png',
              flag: null,
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: false,
                topScorers: false,
                predictions: true,
                odds: false
              }
            },
            {
              league_id: 2840,
              name: 'Cupa',
              type: 'Cup',
              country: 'Moldova',
              country_code: 'MD',
              season: 2020,
              season_start: '2020-08-08',
              season_end: '2020-10-28',
              logo: 'https://media.api-sports.io/football/leagues/674.png',
              flag: 'https://media.api-sports.io/flags/md.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: false,
                topScorers: false,
                predictions: true,
                odds: false
              }
            },
            {
              league_id: 2844,
              name: 'Super Cup',
              type: 'Cup',
              country: 'Ukraine',
              country_code: 'UA',
              season: 2020,
              season_start: '2020-08-25',
              season_end: '2020-08-25',
              logo: 'https://media.api-sports.io/football/leagues/678.png',
              flag: 'https://media.api-sports.io/flags/ua.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: false,
                topScorers: false,
                predictions: true,
                odds: false
              }
            },
            {
              league_id: 2846,
              name: 'Cup',
              type: 'Cup',
              country: 'Slovakia',
              country_code: 'SK',
              season: 2020,
              season_start: '2020-07-25',
              season_end: '2020-10-28',
              logo: 'https://media.api-sports.io/football/leagues/680.png',
              flag: 'https://media.api-sports.io/flags/sk.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: true,
                topScorers: true,
                predictions: true,
                odds: false
              }
            },
            {
              league_id: 2873,
              name: 'FA Cup',
              type: 'Cup',
              country: 'China',
              country_code: 'CN',
              season: 2020,
              season_start: '2020-09-18',
              season_end: '2020-12-19',
              logo: 'https://media.api-sports.io/football/leagues/171.png',
              flag: 'https://media.api-sports.io/flags/cn.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: false,
                topScorers: false,
                predictions: true,
                odds: true
              }
            },
            {
              league_id: 2941,
              name: 'Coppa Italia',
              type: 'Cup',
              country: 'Italy',
              country_code: 'IT',
              season: 2020,
              season_start: '2020-09-22',
              season_end: '2021-01-13',
              logo: 'https://media.api-sports.io/football/leagues/137.png',
              flag: 'https://media.api-sports.io/flags/it.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: true,
                topScorers: true,
                predictions: true,
                odds: false
              }
            },
            {
              league_id: 2947,
              name: 'Magyar Kupa',
              type: 'Cup',
              country: 'Hungary',
              country_code: 'HU',
              season: 2020,
              season_start: '2020-09-18',
              season_end: '2021-02-10',
              logo: 'https://media.api-sports.io/football/leagues/273.png',
              flag: 'https://media.api-sports.io/flags/hu.svg',
              standings: 0,
              is_current: 1,
              coverage: {
                standings: false,
                fixtures: [Object],
                players: true,
                topScorers: true,
                predictions: true,
                odds: false
              }
            }
          ]
      },
      {
        continente_id: 2,
        name: 'África',
        ligas: [
          {
            league_id: 2806,
            name: 'Cup',
            type: 'Cup',
            country: 'Slovenia',
            country_code: 'SI',
            season: 2020,
            season_start: '2020-09-02',
            season_end: '2020-10-22',
            logo: 'https://media.api-sports.io/football/leagues/375.png',
            flag: 'https://media.api-sports.io/flags/si.svg',
            standings: 0,
            is_current: 1,
            coverage: {
              standings: false,
              fixtures: [Object],
              players: true,
              topScorers: true,
              predictions: true,
              odds: false
            }
          },
          {
            league_id: 2807,
            name: 'Friendlies Women',
            type: 'Cup',
            country: 'World',
            country_code: null,
            season: 2020,
            season_start: '2020-01-14',
            season_end: '2020-12-02',
            logo: 'https://media.api-sports.io/football/leagues/666.png',
            flag: null,
            standings: 0,
            is_current: 1,
            coverage: {
              standings: false,
              fixtures: [Object],
              players: false,
              topScorers: false,
              predictions: true,
              odds: false
            }
          },
          {
            league_id: 2808,
            name: 'Friendlies Clubs',
            type: 'Cup',
            country: 'World',
            country_code: null,
            season: 2020,
            season_start: '2020-01-07',
            season_end: '2020-09-26',
            logo: 'https://media.api-sports.io/football/leagues/667.png',
            flag: null,
            standings: 0,
            is_current: 1,
            coverage: {
              standings: false,
              fixtures: [Object],
              players: false,
              topScorers: false,
              predictions: true,
              odds: false
            }
          },
          {
            league_id: 2809,
            name: 'UEFA Super Cup',
            type: 'Cup',
            country: 'World',
            country_code: null,
            season: 2020,
            season_start: '2020-09-24',
            season_end: '2020-09-24',
            logo: 'https://media.api-sports.io/football/leagues/531.png',
            flag: null,
            standings: 0,
            is_current: 1,
            coverage: {
              standings: false,
              fixtures: [Object],
              players: true,
              topScorers: true,
              predictions: true,
              odds: false
            }
          },
          {
            league_id: 2811,
            name: 'Cup',
            type: 'Cup',
            country: 'Croatia',
            country_code: 'HR',
            season: 2020,
            season_start: '2020-09-08',
            season_end: '2021-03-03',
            logo: 'https://media.api-sports.io/football/leagues/212.png',
            flag: 'https://media.api-sports.io/flags/hr.svg',
            standings: 0,
            is_current: 1,
            coverage: {
              standings: false,
              fixtures: [Object],
              players: false,
              topScorers: false,
              predictions: true,
              odds: true
            }
          },
          {
            league_id: 2838,
            name: 'David Kipiani Cup',
            type: 'Cup',
            country: 'Georgia',
            country_code: 'GE',
            season: 2020,
            season_start: '2020-08-20',
            season_end: '2020-11-25',
            logo: 'https://media.api-sports.io/football/leagues/672.png',
            flag: 'https://media.api-sports.io/flags/ge.svg',
            standings: 0,
            is_current: 1,
            coverage: {
              standings: false,
              fixtures: [Object],
              players: false,
              topScorers: false,
              predictions: true,
              odds: false
            }
          }
        ]
      },
      {
        continente_id: 3,
        name: 'Asia',
        ligas: [
          {
            league_id: 2792,
            name: 'EFL Trophy',
            type: 'Cup',
            country: 'England',
            country_code: 'GB',
            season: 2020,
            season_start: '2020-09-01',
            season_end: '2021-01-13',
            logo: 'https://media.api-sports.io/football/leagues/46.png',
            flag: 'https://media.api-sports.io/flags/gb.svg',
            standings: 0,
            is_current: 1,
            coverage: {
              standings: false,
              fixtures: [Object],
              players: false,
              topScorers: false,
              predictions: true,
              odds: true
            }
          },
          {
            league_id: 2813,
            name: 'Cup',
            type: 'Cup',
            country: 'Bulgaria',
            country_code: 'BG',
            season: 2020,
            season_start: '2020-08-02',
            season_end: '2021-03-02',
            logo: 'https://media.api-sports.io/football/leagues/174.png',
            flag: 'https://media.api-sports.io/flags/bg.svg',
            standings: 0,
            is_current: 1,
            coverage: {
              standings: false,
              fixtures: [Object],
              players: false,
              topScorers: false,
              predictions: true,
              odds: false
            }
          },
          {
            league_id: 2819,
            name: 'Cupa României',
            type: 'Cup',
            country: 'Romania',
            country_code: 'RO',
            season: 2020,
            season_start: '2020-09-09',
            season_end: '2020-11-28',
            logo: 'https://media.api-sports.io/football/leagues/285.png',
            flag: 'https://media.api-sports.io/flags/ro.svg',
            standings: 0,
            is_current: 1,
            coverage: {
              standings: false,
              fixtures: [Object],
              players: false,
              topScorers: false,
              predictions: true,
              odds: false
            }
          },
          {
            league_id: 2824,
            name: 'Schweizer Pokal',
            type: 'Cup',
            country: 'Switzerland',
            country_code: 'CH',
            season: 2020,
            season_start: '2020-08-29',
            season_end: '2021-02-10',
            logo: 'https://media.api-sports.io/football/leagues/209.png',
            flag: 'https://media.api-sports.io/flags/ch.svg',
            standings: 0,
            is_current: 1,
            coverage: {
              standings: false,
              fixtures: [Object],
              players: true,
              topScorers: true,
              predictions: true,
              odds: false
            }
          },
          {
            league_id: 2836,
            name: 'Community Shield Women',
            type: 'Cup',
            country: 'England',
            country_code: 'GB',
            season: 2020,
            season_start: '2020-08-29',
            season_end: '2020-08-29',
            logo: 'https://media.api-sports.io/football/leagues/670.png',
            flag: 'https://media.api-sports.io/flags/gb.svg',
            standings: 0,
            is_current: 1,
            coverage: {
              standings: false,
              fixtures: [Object],
              players: false,
              topScorers: false,
              predictions: true,
              odds: false
            }
          },
          {
            league_id: 2800,
            name: 'FA Trophy',
            type: 'Cup',
            country: 'England',
            country_code: 'GB',
            season: 2020,
            season_start: '2020-09-26',
            season_end: '2020-12-26',
            logo: 'https://media.api-sports.io/football/leagues/47.png',
            flag: 'https://media.api-sports.io/flags/gb.svg',
            standings: 0,
            is_current: 1,
            coverage: {
              standings: false,
              fixtures: [Object],
              players: true,
              topScorers: true,
              predictions: true,
              odds: true
            }
          },
          {
            league_id: 2802,
            name: 'Cup',
            type: 'Cup',
            country: 'Ukraine',
            country_code: 'UA',
            season: 2020,
            season_start: '2020-08-26',
            season_end: '2021-03-03',
            logo: 'https://media.api-sports.io/football/leagues/335.png',
            flag: 'https://media.api-sports.io/flags/ua.svg',
            standings: 0,
            is_current: 1,
            coverage: {
              standings: false,
              fixtures: [Object],
              players: true,
              topScorers: true,
              predictions: true,
              odds: true
            }
          },
          {
            league_id: 2805,
            name: 'DBU Pokalen',
            type: 'Cup',
            country: 'Denmark',
            country_code: 'DK',
            season: 2020,
            season_start: '2020-09-01',
            season_end: '2021-03-10',
            logo: 'https://media.api-sports.io/football/leagues/121.png',
            flag: 'https://media.api-sports.io/flags/dk.svg',
            standings: 0,
            is_current: 1,
            coverage: {
              standings: false,
              fixtures: [Object],
              players: false,
              topScorers: false,
              predictions: true,
              odds: true
            }
          }
        ]
      }
    ],
    baseURL: 'http://localhost:3000',
    wholebody: 12,
    drawer: false,
    showNavbar: true,
    showligas: false,
    showcampeonatos: false,
    showequipos: false,
    showpaises: false,
    lastScrollPosition: 0
  },
  mutations: {
    bets(state, res){
      const bets = res.data.bets
      state.bets = bets
    },
    nowPlaying(state, res){
      const fixtures = res.data.livegames
      console.log(fixtures);
      state.nowPlaying = fixtures
    },
    leagues(state, res){
      state.leagues = res.data.leagues
    },
    sDrawer(state){
      state.drawer = !state.drawer
      if(state.drawer){
        state.wholebody = 9
      } else {
        state.wholebody = 12
      }
    },
    setshowNavbar(state, value){
      state.showNavbar = value
    },
    setlastScrollPosition(state, value){
      state.lastScrollPosition = value
    },
    setshowligas(state, value){
      state.showligas = value
    },
    setshowcampeonatos(state, value){
      state.showcampeonatos = value
    },
    setshowequipos(state, value){
      state.showequipos = value
    },
    setshowpaises(state, value){
      state.showpaises = value
    },
    mouseOver(state, x){
        if(x == 1){
          if (state.showligas == true){
            document.getElementById("tab1").style.background = "rgba(255,255,255,.05)"
          } else {
            state.showligas = !state.showligas;
          }
        }
        else if (x == 2) {
          if (state.showcampeonatos == true){
            document.getElementById("tab2").style.background = "rgba(255,255,255,.05)"
          } else {
            state.showcampeonatos = !state.showcampeonatos;
          }
        }
        else if (x == 3) {
          if (state.showequipos == true){
            document.getElementById("tab3").style.background = "rgba(255,255,255,.05)"
          } else {
            state.showequipos = !state.showequipos;
          }
        }
        else if (x == 4) {
          if (state.showpaises == true){
            document.getElementById("tab4").style.background = "rgba(255,255,255,.05)"
          } else {
            state.showpaises = !state.showpaises;
          }
        }
      },
    leaveOver(state, x){
        if(x == 0){
          state.showligas == false
          state.showcampeonatos == false
          state.showequipos == false
          state.showpaises == false
        }
        if(x == 1){
          if (state.showligas == true){
            state.showligas = false;
            document.getElementById("tab1").style.background = ""
          }
        }
        else if (x == 2) {
          if (state.showcampeonatos == true){
            state.showcampeonatos = false;
            document.getElementById("tab2").style.background = ""
          }
        }
        else if (x == 3) {
          if (state.showequipos == true){
            state.showequipos = false;
            document.getElementById("tab3").style.background = ""
          }
        }
        else if (x == 4) {
          if (state.showpaises == true){
            state.showpaises = false;
            document.getElementById("tab4").style.background = ""
          }
        }
      },
      onScroll (state) {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop

        if (currentScrollPosition < 1) {
            state.showNavbar = true
          }

          if (currentScrollPosition != 0 && (state.showligas == false && state.showcampeonatos == false && state.showequipos == false && state.showpaises == false)) {
               state.showNavbar = false
            }
          if (currentScrollPosition != 0 && (state.showligas == true || state.showcampeonatos == true || state.showequipos == true || state.showpaises == true)) {
              document.documentElement.scrollTop = state.lastScrollPosition
              return
            }

        state.lastScrollPosition = currentScrollPosition
      }
    },
  actions: {

  },
  getters: {
  },
  modules: {
  }
})
