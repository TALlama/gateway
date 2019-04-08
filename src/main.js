import "@fortawesome/fontawesome-free/css/all.css";
import Vue from 'vue/dist/vue.common.js';

import './style/cascadia.scss'
import CpCharacter from './components/cp-character.vue'
import CpEpisode from './components/cp-episode.vue'

var app = new Vue({
  el: '#app',
  components: {
    CpCharacter,
    CpEpisode
  },
  props: [
    'focusedEpisode',
    'focusedCharacter',
  ],
  data: {
    message: 'Hello Vue!',
    characters: [
      {
        name: 'Josephine',
        desc: 'an incarnate djinn in the service of the church',
        player: 'Seth A. Roby',
        portraitUrl: "images/josephine.jpg",
        values: {
          Freedom: {rating: 10, statement: 'from the petty desires of the present'},
          Progress: {rating: 6, statement: 'runs in circles'},
          Faith: {rating: 8, statement: 'belief in things not seen'},
          Justice: {rating: 6, statement: 'cannot weigh the infinite past'},
          Loyalty: {rating: 4, statement: 'ignores the wider picture'},
          Power: {rating: 8, statement: 'the only thing everyone understands'}
        },
        relationships: {
          Alyx: {rating: 6, statement: 'is good at her job'},
          Kord: {rating: 8, statement: 'hides behind masks'},
          Mutt: {rating: 10, statement: 'will find his way, eventually'},
          Victoria: {rating: 6, statement: 'misses the forest for the trees'},
          Cardinal: {rating: 8, statement: 'my guide'},
          Hope: {rating: 6, statement: 'a beacon'},
          Cillian: {rating: 6, statement: 'deplorable and depraved'},
        },
        distinctions: {
          'Aetherial Native': {sfx: [
            'Gain a PP when you point out that humanity is weird'
          ]},
          'Spy': {sfx: [
            'Spend a PP to have a contact'
          ]},
          'Sins of the Past': {sfx: [
            'Add a d6 to the Doom Pool to know a dark secret'
          ]}
        },
        resources: {
          "Salish tribes": {rating: 8, sfx: []},
          "Tesla's Lab": {rating: 8, sfx: [
            'Constructs: Add a d6 and step up a die when using to make assets'
          ]},
        },
        powersets: {
          'Djinn': {
            limits: ['Gain a PP and shutdown the powerset if someone uses your true name'],
            sfx: ['Nonhuman: Spend a PP to ignore poison or disease'],
            powers: {
              'Fire control': {
                rating: 6,
                sfx: ['Unfettered: Double a die, but if you fail add a complication of that die size']
              },
              'Flight': {rating: 8},
              'Spirit Sense': {rating: 8},
              'Shapeshift': {rating: 10}
            }
          }
        },
        milestones: {
          "How Far I'll Go": {
            1: '...',
            3: 'Give something valuable to the Resistance',
            10: 'Decide to join the Resistance or undermine it',
          },
        }
      },
      {
        name: 'Victoria',
        desc: 'a lady of science and rebellion',
        player: 'David Burk',
        portraitUrl: "images/victoria.jpg",
        values: {
          Freedom: {rating: 8, statement: 'the right of all sentient beings'},
          Progress: {rating: 12, statement: 'progress is impossible without change, and those who cannot change their mind cannot change anything'},
          Faith: {rating: 4, statement: "what the mind doesn't understand it worships or fears"},
          Justice: {rating: 6, statement: 'there is no crueler tyranny than that which is perpetuated under the shield of law'},
          Loyalty: {rating: 6, statement: "if you give loyalty, you'll get it back"},
          Power: {rating: 6, statement: 'knowledge is power'}
        },
        relationships: {
          Alyx: {rating: 8, statement: 'an interesting colleage'},
          Josephine: {rating: 10, statement: 'a gateway to a wider world'},
          Kord: {rating: 6, statement: "world's okayest employee"},
          Mutt: {rating: 10, statement: "I'd take a bullet for you. Not in the head, though; the leg or something"},
          Tesla: {rating: 4, statement: 'my mentor'},
          Cardinal: {rating: 8, statement: 'a good brother'},
          Hope: {rating: 6, statement: 'love conquers all'},
          Roosevelt: {rating: 4, statement: 'the start of a new future'},
          Earp: {rating: 4, statement: 'tough but fair'},
        },
        distinctions: {
          'Mad Scientist': {sfx: [
            'Gear stockpile: spend a PP for a d8 asset',
            'The Madness Place: gain a d8 complication and a PP',
          ]},
          'Connections': {sfx: [
            'Turn off connections to double an effect die'
          ]},
          'Captain': {sfx: []}
        },
        resources: {
          "Tesla's Lab": {rating: 6, sfx: []},
          "Rapscallion": {rating: 10, sfx: [
            'Cloud generator: step down to give a d8 complication to your enemies'
          ]},
          "The Resistance": {rating: 6, sfx: [
            'Gain a PP, add a d8 complication'
          ]},
        },
        powersets: {
          'Gear': {
            limits: ["Shutdown power set and gain 1 PP; test to recover"],
            powers: {
              'Lightning gun': {
                rating: 8,
                sfx: ['Area effect: add a d6 and keep second effect die']
              },
              'Aetheric antenna': {rating: 6}
            }
          }
        },
        milestones: {
          'A Better Future': {
            1: 'Advance your studies at an inappropriate time',
            3: 'Disrupt your research to help someone in need',
            10: 'Publicly sacrifice one: Science or the Resistance',
          }
        }
      },
      {
        name: 'Kord',
        desc: 'double agent or turncoat',
        player: 'Andrew Ardisone',
        portraitUrl: "images/kord.jpg",
        values: {
          Freedom: {rating: 4, statement: "it's nothing but a chance to be better"},
          Progress: {rating: 6, statement: 'to move forward sometimes you need to take a step back'},
          Faith: {rating: 6, statement: "inspires yet also binds"},
          Justice: {rating: 6, statement: 'punishment is justice for the unjust'},
          Loyalty: {rating: 12, statement: "All for One and One for All"},
          Power: {rating: 8, statement: 'lets you shape the world'}
        },
        relationships: {
          Alyx: {rating: 10, statement: 'a spark of life amonst the death'},
          Josephine: {rating: 8, statement: 'bound to the job'},
          Mutt: {rating: 8, statement: "a straight shooter"},
          Victoria: {rating: 8, statement: "the Mark"},
          Walter: {rating: 10, statement: 'chasing his approval'},
          Cardinal: {rating: 6, statement: 'provides absolution'},
          Cillian: {rating: 6, statement: 'is on the take'},
        },
        distinctions: {
          'Military training': {sfx: [
            'Versatile: Split power trait die into two dice, stepped back by one; or three dice, stepped back by two',
          ]},
          'Army Brat': {sfx: []},
          'Spycraft': {sfx: [
            'Afflict: add d6 and step up your effect die when inflicting mental complications on a target'
          ]}
        },
        resources: {
          "Marine Corps": {rating: 8, sfx: []},
        },
        powersets: {
          'Gravity Anima': {
            limits: ["Conscious activation"],
            powers: {
              'Manipulate gravity': {
                rating: 10,
                sfx: [
                  'Area effect: add a d6 and keep second effect die',
                  "Unleashed: step up ...or... double die for one role, but on a failure add a complication of the power's rating",
                ]
              },
              'Flight': {
                rating: 8,
                sfx: ['Focus: replace two of the same die with a stepped up die']
              }
            }
          }
        },
        milestones: {
          'Infiltrator': {
            1: '...',
            3: 'Hide my identity',
            10: '...',
          }
        }
      },
      {
        name: 'Alyx',
        desc: 'detective and ghost-talker',
        player: 'Sam Smith',
        portraitUrl: "images/alyx.jpg",
        values: {
          Freedom: {rating: 8, statement: "is the mission"},
          Progress: {rating: 8, statement: "for the masses"},
          Faith: {rating: 6, statement: "is for those who need hope"},
          Justice: {rating: 6, statement: "will come later"},
          Loyalty: {rating: 4, statement: "is debilitating"},
          Power: {rating: 10, statement: 'is a tool'}
        },
        relationships: {
          Josephine: {rating: 6, statement: 'unknown entity'},
          Kord: {rating: 10, statement: 'warm, inside and out'},
          Mutt: {rating: 6, statement: "this could end badly"},
          Victoria: {rating: 6, statement: "nothing more than a scientist"},
          'Dr. Anderson': {rating: 6, statement: 'trusted teacher'},
          Cardinal: {rating: 4, statement: 'needs to meet Hope'},
          Cillian: {rating: 6, statement: 'useful contact'},
        },
        distinctions: {
          'Medical examiner': {sfx: []},
          'Detached': {sfx: [
            'Get a PP when your emotionless response earns a negative reaction'
          ]},
          'Detective': {sfx: []},
        },
        resources: {
          "Lamar": {rating: 6, sfx: []},
          "The Resistance": {rating: 8, sfx: [
            "Gain a PP when someone recognizes you as a rebel"
          ]},
          "Detective Rothchild": {rating: 6, sfx: []},
        },
        powersets: {
          'Necromancy Anima': {
            limits: ["Uncontrollable: Change any of these powers into a complication to gain 1 PP. Activate a spoiler or remove the complication to recover the power."],
            powers: {
              'Raise dead': {
                rating: 10,
                sfx: [
                  "Step back this trait to step up the effect die",
                  "Earn a PP to add a complication",
                  'Spend a PP to give 1 1d8 "Fear" complication to another character',
                ]
              },
              'Decay': {
                rating: 10,
                sfx: [
                  "Spend a PP to step up this ability",
                  "Turn a Doom Pool die into a complication",
                  "Spend a PP to push a living being using their life energy",
                ]
              }
            }
          },
          'Gear': {
            limits: ["Shutdown power set and gain 1 PP; test to recover"],
            powers: {
              "Medical Examiner's Credentials": {
                rating: 6,
              }
            }
          }
        },
        milestones: {
          'Death detective': {
            1: 'Protect your image',
            3: 'Solve a case',
            10: 'Tell Kord about your abilities',
          },
        }
      },
      {
        name: 'Mutt',
        desc: 'gun for hire',
        player: 'Morgan Stites',
        portraitUrl: "images/mutt.jpg",
        values: {
          Freedom: {rating: 6, statement: "I don't think I'll let you arrest us today"},
          Progress: {rating: 6, statement: "If we're gonna have a future in this town, it's gotta have some law and order"},
          Faith: {rating: 4, statement: "Already got a guilty conscience. Might as well have the money, too"},
          Justice: {rating: 10, statement: "The Law is coming and Hell's coming with me!"},
          Loyalty: {rating: 8, statement: "I'm your Huckleberry"},
          Power: {rating: 8, statement: "You gonna do somethin' or just stand there and bleed?"}
        },
        relationships: {
          Alyx: {rating: 10, statement: "knows where the bodies are buried"},
          Kord: {rating: 6, statement: 'falls in line'},
          Victoria: {rating: 6, statement: "Crazy Aunt Vic"},
          Josephine: {rating: 8, statement: 'respected grandmother'},
          'Wyatt Earp': {rating: 8, statement: 'the father I never had'},
          'Chief Bone Feather': {rating: 6, statement: 'Can he forgive me?'},
        },
        distinctions: {
          'Lawdog': {sfx: []},
          'Pickpocket': {sfx: [
            '...d8 complication dealing with street urchins'
          ]},
          'Slow to anger, slower to calm': {sfx: [
            'Unleashed: step up for one roll, but a failure gains a d8 complication'
          ]},
        },
        resources: {
          "Wyatt Earp's Peacemaker": {rating: 8, sfx: []},
          "Uncle Bat": {rating: 4, sfx: []},
        },
        powersets: {
          'Air Anima': {
            limits: ["Growing Dread: Both 1 and 2 on your dice count as spoilers when using these powers"],
            powers: {
              'Bullet Bender': {
                rating: 12,
                sfx: [
                  "Earn a PP when you run out of ammo at an inopportune moment",
                  "Spend a PP to reroll a pool that includes Bullet Bender",
                ]
              },
              'Lightning': {
                rating: 10,
                sfx: [
                  "Immunity: spend a PP to ignore complications from electricity",
                  "Dangerous: Add a d6 to your dice pool for an attack and step back highest die in pool by one. Step up the effect die by one",
                ]
              },
              'Levitation': {
                rating: 10,
                sfx: []
              }
            }
          },
        },
        milestones: {
          'Justiciarius': {
            1: 'declare that something is just or unjust',
            3: 'take a complication because the alternative is unjust',
            10: 'lay down your life for a just cause, or allow justice to be thwarted to complete an adventure',
          }
        }
      }
    ],
    episodes: [
      {
        id: 's1e1',
        season: 1,
        episode: 1,
        title: 'Pilot',
        airdate: '2019-01-28',
        summary: 'A yote is missing, and everyone is on the hunt. Kord murdered to get it; Alyx is tracking the murderer. Victoria wants the technology; Mutt just wants a paycheck. And Josephine seems to be playing all sides.',
        podcastUrl: 'https://github.com/TALlama/gateway/blob/master/docs/audio/s1e1.m4a?raw=true',
      },
      {
        id: 's1e2',
        season: 1,
        episode: 2,
        title: 'Train Job',
        airdate: '2019-02-04',
        summary: "Victoria has a contact coming in on the evening train, but she's not going to make it.",
        podcastUrl: 'https://github.com/TALlama/gateway/blob/master/docs/audio/s1e2.m4a?raw=true',
      },
      {
        id: 's1e3',
        season: 1,
        episode: 3,
        title: 'Silence Through the Rift',
        airdate: '2019-03-04',
        summary: "Monsters attacks Seattle, prompting various opportunities.",
        podcastUrl: 'https://github.com/TALlama/gateway/blob/master/docs/audio/s1e3.m4a?raw=true',
      },
      {
        id: 's1e4',
        season: 1,
        episode: 4,
        title: 'The Cardinal',
        airdate: '2019-04-01',
        summary: "Everyone gets in trouble at the Cathedral.",
        podcastUrl: 'https://github.com/TALlama/gateway/blob/master/docs/audio/s1e4.m4a?raw=true',
      },
    ]
  },
  computed: {
    seasons: (state) => state.episodes.map(e => e.episode === 1 ? e : null).filter(e => e != null)
  },
  methods: {
    isCharacterFocused(character) {
      return this.focusedCharacter == character;
    },
    showCharacter: function(character) {
      this.focusedCharacter = character;
    },
    
    isEpisodeFocused(episode) {
      return this.focusedEpisode == episode;
    },
    showEpisode: function(episode) {
      this.focusedEpisode = episode;
    }
  }
});
