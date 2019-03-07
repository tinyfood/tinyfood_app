import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      cartTotal: 0,
      cart: {},
      startahub: [
        {
          id: 1,
          name: "Roles that define a food hub system",
          uniquetag: "roles",
          text: "this is the text rolesthis is the text rolesthis is the text rolesthis is the text rolesthis is the text roles.<br></br>this is the text rolesthis is the text rolesthis is the text rolesthis is the text rolesthis is the text roles this is the text rolesthis is the text rolesthis is the text roles.",
          update: "Mar 5 2019",
          author: "greg",
          validated: "true",
          lang: "eng"
        },
        {
          id: 2,
          name: "Food hub manager responsibilities & tinyfood org first year best practices",
          uniquetag: "job",
          text: "We are working to provide this free software to organizations that already have a food distribution program and are beninning to develpp more local foodshed awareness.   Tiny Food's goal of supporting new farmers is built into the DNA of this project. We would like to see you do well for your own health while earning good and reliable pay for your farming labor and vison.",
          update: "Mar 5 2019",
          author: "greg",
          validated: "true",
          lang: "eng"
        },
        {
          id: 2,
          name: "Best practices in \'shared shopping'\ collaboration with friends and neighbors.",
          uniquetag: "shared shopping",
          text: "shared shopping is a version of a food hub where there is not much direct interaction with farmers. Food can be listed beforehand or members of your hub are notified such that new items are available for their food box later that week.",
          update: "Mar 5 2019",
          author: "greg",
          validated: "true",
          lang: "eng"
        },
        {
          id: 4,
          name: "Shamba kwa dawa na matundi kwa shillingi Leo, Afya Kesho",
          uniquetag: "job",
          text: "Iko na wewe kwa matundi ya shamba ayya jamii sana. MAtundi diversification afya ya future secure.",
          update: "Mar 5 2019",
          author: "greg",
          validated: "true",
          lang: "swa"
        },
      ],
      kbitems: [
        {
          id: 1,
          name: 'Hugelkultur mushroom and perennials gardens',
          uniquetag: "hugels",
          category: 'farming_styles',
          img: 'arugula.jpg',
          producer: 'greg',
          validated: 'true',
          short: 'this is some short text',
          description: "this is long text.this is long text.this is long text.this is long text.this is long text.this is long text.this is long text.      this is long text.this is long text.this is long text.this is long text.this is long text.this is long text.          this is long text.this is long text.this is long text.this is long text.this is long text.."
        },
        {
          id: 2,
          name: 'Wind and hail resistant garden-scaping',
          uniquetag: "mountainclimateminded",
          category: 'farming_styles',
          img: 'uploads/prepared_for_you.png',
          producer: 'greg',
          validated: 'true',
          short: 'thdsfdis is some short text',
          description: "thdsfsdfdis is long text.this is long text.this is long text.this is long text.this is long text.this is long text.this is long text.      this is long text.this is long text.this is long text.this is long text.this is long text.this is long text.          this is long text.this is long text.this is long text.this is long text.this is long text.."
        },
        {
          id: 3,
          name: 'Garden Design Context',
          uniquetag: "context",
          category: 'philosophy',
          img: 'context.png',
          producer: 'greg',
          validated: 'true',
          short: 'Every location has a history. Soil can be remediated, look for natural patterns of water flow.',
          description: "  Try to learn about past uses of the land you are considering working for farming. Does the soil need to           be built up?  Is there evidence of past erosion? Are there any natural throughfares like wildlife corridors through the land? Simple observations during rain and melt events can help prevent losses."
        },
        {
          id: 4,
          name: 'Seasonal cycle of small farming',
          uniquetag: "context",
          category: 'philosophy',
          img: 'lettuce.png',
          producer: 'greg',
          validated: 'true',
          short: ' d dffd sydsddis is some short text',
          description: "retr4h dedsg sfsdfdis is long text.this is long text.this is long text.this is long text.this is long text.this is long text.this is long text.      this is long text.this is long text.this is long text.this is long text.this is long text.this is long text.          this is long text.this is long text.this is long text.this is long text.this is long text.."
        },
        {
          id: 5,
          name: 'Committing to making healthy food choices',
          uniquetag: "context",
          category: 'health',
          img: 'basil.png',
          producer: 'greg',
          validated: 'true',
          short: 'its a challenge but we are here for you. To encourage you and work together to make it more possible for more people.',
          description: "retr4h dedsg sfsdfdis is long text.this is long text.this is long text.this is long text.this is long text.this is long text.this is long text.      this is long text.this is long text.this is long text.this is long text.this is long text.this is long text.          this is long text.this is long text.this is long text.this is long text.this is long text.."
        },
        {          
          id: 6,
          name: 'Square foot gardening',
          uniquetag: "context",
          category: 'gardening',
          img: 'squarefootg.png',
          producer: 'greg',
          validated: 'true',
          short: 'Planning multiple uses, cycling areas of garden space, root depth and plant compatibilites.',
          description: "Companion planting, and Integrated Pest Management theory suggest that it is always smart to consider plant synergies, companion, and plant guild compatibilites.",
        },
        {
          id: 7,
          name: 'Hoop house/ cold frame/ greenhouse design review',
          uniquetag: "context",
          category: 'alpine region',
          img: 'greenhouse_coldframe.png',
          producer: 'greg',
          validated: 'true',
          short: 'a  ad dffd sydsddis is some short text',
          description: "retr4h dedsg sfsdfdis is long text.this is long text.this is long text.this is long text.this is long text.this is long text.this is long text.      this is long text.this is long text.this is long text.this is long text.this is long text.this is long text.          this is long text.this is long text.this is long text.this is long text.this is long text.."
        },
        {
          id: 8,
          name: 'Biodynamic Gardeing',
          uniquetag: "context",
          category: 'health',
          img: 'basil.png',
          producer: 'greg',
          validated: 'true', 
          short: 'ydsddis is some short text',
          tags: 'Fukiokia method, biointensive, traditional farming philosophies.',
          description: "retr4h dedsg sfsdfdis is long text.this is long text.this is long text.this is long text.this is long text.this is long text.this is long text.      this is long text.this is long text.this is long text.this is long text.this is long text.this is long text.          this is long text.this is long text.this is long text.this is long text.this is long text.."
        },
        {
          id: 9,
          name: 'Keeping your soil & garden non-toxic',
          uniquetag: "context",
          category: 'health',
          img: 'basil.png',
          producer: 'greg',
          validated: 'true', 
          short: 'ydsddis is some short text',
          tags: 'Fukiokia method, biointensive, traditional farming philosophies.',
          description: "retr4h dedsg sfsdfdis is long text.this is long text.this is long text.this is long text.this is long text.this is long text.this is long text.      this is long text.this is long text.this is long text.this is long text.this is long text.this is long text.          this is long text.this is long text.this is long text.this is long text.this is long text.."
        },
        {

          id: 10,
          name: 'Worm and Mushroom Composting',
          uniquetag: "context",
          category: 'gardens',
          img: 'worms.png',
          producer: 'greg',
          validated: 'true', 
          short: 'ydsddis is some short text',
          tags: 'Vermiculture is a very satisfying composting endeavor',
          description: "retr4h dedsg sfsdfdis is long text.this is long text.this is long text.this is long text.this is long text.this is long text.this is long text.      this is long text.this is long text.this is long text.this is long text.this is long text.this is long text.          this is long text.this is long text.this is long text.this is long text.this is long text.."
        },
        {
          id: 11,
          name: 'Cob oven making',
          uniquetag: "context",
          category: 'hearth',
          img: 'basil.png',
          producer: 'greg',
          validated: 'true', 
          short: 'ydsddis is some short text',
          tags: 'Fukiokia method, biointensive, traditional farming philosophies.',
          description: "retr4h dedsg sfsdfdis is long text.this is long text.this is long text.this is long text.this is long text.this is long text.this is long text.      this is long text.this is long text.this is long text.this is long text.this is long text.this is long text.          this is long text.this is long text.this is long text.this is long text.this is long text.."
        },
        {
          id: 12,
          name: 'Hugelkultur gardens',
          uniquetag: "context",
          category: 'gardening',
          img: 'basil.png',
          producer: 'greg',
          validated: 'true', 
          short: 'Hulgelkultur encourages us to compost old tree rot rather than burning it. Turns out, that fungus is actually pretty smart and does some great things once allowed to grow into the soil.',
          tags: 'myco and forest garden stewardship farming philosophies reviewed.',
          description: "retr4h dedsg sfsdfdis is long text.this is long text.this is long text.this is long text.this is long text.this is long text.this is long text.      this is long text.this is long text.this is long text.this is long text.this is long text.this is long text.          this is long text.this is long text.this is long text.this is long text.this is long text.."
        },
        {          
          id: 13,
          name: 'Solar DC Microgrid Design',
          uniquetag: "context",
          category: 'renewables',
          img: 'basil.png',
          producer: 'greg',
          validated: 'true', 
          short: 'DC power is safer and more suited for low cost, small solar installations.',
          tags: 'This exploration of DC microgrids shows how well suited a small mircogrid- ( imagine a flashlight with a built in solar panel and its battery as a small solar microgrid, expand out from there.. ) . SCD Hub helped to lead a clinic on this subhect on sept 22 2018 with Boulder Colorado\'s own Solutios Voyage organization sharing some promotional support -thank you! review of possibilities around small home and office wiring systems. Since so many of our electronic items are DC powered, why invert them with power adapters? convenienve, maybe, but the benefits of making the switch may be artfully astounding.',
          description: "retr dedsg sfsdfdis is long text.this is long text.this is long text.this is long text.this is long text.this is long text.this is long text.      this is long text.this is long text.this is long text.this is long text.this is long text.this is long text.          this is long text.this is long text.this is long text.this is long text.this is long text.."
        },
        {
          id: 14,
          name: 'How to Form a Food Hub, Functions of a food hub',
          uniquetag: "context",
          category: 'food hubs',
          img: 'whales_and_fisherman.png',
          producer: 'greg',
          validated: 'true', 
          short: 'forming a food hub is simple, Tiny food helps provide necessary structure.',
          tags: 'food hub, forming a food hub, virtual food hub, food hub manager, food hub delivery, door dash, uber eats',
          description: "You will notice that tiny food provides a \'shared shopping'\ listing in the header to allow people ( like myself ), who live in areas where there are not many farmers but many supermarket store options ( too many for one person), you can form a new tiny food page dedicated to your group. It does not have to be visible to the world like our demo. Tiny Food provides a free software package which is designed to install quickly with the use of the \'Netlify Install\' button, so that you may take a look and show your frieds while having a unique URL and private setup to begin discussing with potential users of your food hub."
        },
        {
          id: 15,
          name: '90 Day Organic food family challenge',
          uniquetag: "context",
          category: 'gardening',
          img: 'basil.png',
          producer: 'greg',
          validated: 'true',
          short: 'Our first challenge to the general communty is the Family Food Challenge  From Silent Spring of 1969 to the Californa Farm Workers strike, how pesticides effect people and ecosystms, how organic movement has empowered people to have a voice, develop altertatives.  How fragile ecological systems are effected by herbicide and pesticide overuse in modern industrial agriculture\'s standard approaches.',
          tags: 'rachael carlson, Jose Mendes, organic food, ecosystem health, food hub delivery, door dash, uber eats',
          description: "You will notice that tiny food provides a \'shared shopping'\ listing in the header to allow people ( like myself ), who live in areas where there are not many farmers but many supermarket store options ( too many for one person), you can form a new tiny food page dedicated to your group. It does not have to be visible to the world like our demo. Tiny Food provides a free software package which is designed to install quickly with the use of the \'Netlify Install\' button, so that you may take a look and show your frieds while having a unique URL and private setup to begin discussing with potential users of your food hub."

        },
        {
          id: 16,
          name: 'Philosophical choices by gardening approach',
          uniquetag: "context",
          category: 'health',
          img: 'tor_users.png',
          producer: 'greg',
          validated: 'true', 
          short: 'ydsddis is some short text',
          tags: 'Fukiokia method, biointensive, traditional farming philosophies.',
          description: "Double digging your garden is great if you dont have the common mountain problem of too many large rocks!.           Its always best to figure out what nature has up for us and work with those patterns. If you have a huge rock in the area            here you plan to garden, maybe your design can be adapted to make use of the unique natural feature that the earth has            provided us!?  MAybe the stone could be used in a thermal design.. There are many possibilities.  By working the soil            with composts you have created, you are developing a local library of biota especially suited to fight off diseas in             your garden."
        }
      ],
      products: [
        {
          id: 1,
          name: 'Arugula (1 lb.)',
          price: 3.99,
          category: 'produce',
          farmdirect: true,
          sale: true,
          org: true,
          img: 'arugula.jpg',
          producer: 'greg',
          distance: '10'
        },
        {
          id: 2,
          name: 'Beets (2 lb.)',
          price: 2.99,
          category: 'produce',
          farmdirect: false,
          sale: true,
          org: true,
          img: 'beetroot-1.jpg',
          producer: 'greg',
          distance: '10'
        },
        {
          id: 3,
          name: 'Kale (1 lb.)',
          price: 2.99,
          category: 'produce',
          farmdirect: true,
          sale: true,
          org: true,
          article: 'greens',
          img: 'kale.jpg',
          producer: 'greg',
          distance: '10'

        },
        {
          id: 4,
          name: 'Piglets',
          price: 90.00,
          category: 'farm',
          farmdirect: false,
          sale: true,
          org: true,
          img: 'piglets.jpg',
          producer: 'greg',
          distance: '10'
        },
        {
          id: 5,
          name: 'Swiss Chard (1 lb.)',
          price: 2.99,
          category: 'staples',
          farmdirect: true,
          sale: false,
          org: true,
          img: 'chard.jpg',
          producer: 'greg',
          distance: '10'
        },
        {
          id: 6,
          name: 'Plums (2 lb. basket)',
          price: 2.99,
          category: 'produce',
          farmdirect: true,
          sale: true,
          org: false,
          img: 'plums.jpg',
          producer: 'greg',
          farmdirect: 'true',
          distance: '10'
        },
        {
          id: 7,          
          name: 'Strawberries (1 lb. basket)',
          price: 29.99,
          category: 'produce',
          farmdirect: true,
          sale: true,
          org: true,
          img: 'strawberries.jpg',
          producer: 'greg',
          farmdirect: 'true',
          distance: '10'
        },
        {
          id: 8,          
          name: 'Peaches (1 lb. basket)',
          price: 2.99,
          category: 'produce',
          farmdirect: true,
          sale: true,
          org: true,
          img: 'peaches.jpg',
          producer: 'greg',
          farmdirect: 'true',
          distance: '10'
        },
        {          
          id: 9,
          name: 'Collard Greens (1 lb.)',
          price: 1.99,
          category: 'produce',
          farmdirect: true,
          sale: true,
          org: true,
          img: 'collardgreens.jpg',
          producer: 'greg',
          farmdirect: 'true',
          distance: '10',
          source: '274 Organics',
          desc: 'these greens are delicate and delicious, grown at 8400 foot elevation'
        },
        {
          id: 10,          
          name: 'Mizuna Mustard Greens (1 lb.)',
          price: 1.99,
          category: 'staples',
          farmdirect: true,
          sale: true,
          org: true,
          img: 'mizuna.png',
          producer: 'greg',
          farmdirect: 'true',
          distance: '15',
          source: '274 Organics',
          desc: 'these greens are delicate and delicious, grown at 8400 foot elevation'
        },
        {
          id: 11,
          name: 'Basil ( 1 oz.)',
          price: 3.99,
          category: 'produce',
          farmdirect: true,
          sale: true,
          org: true,
          img: 'basil.jpg',
          producer: 'greg',
          farmdirect: 'true',
          distance: '10'
        },
        {
          id: 12,          
          name: 'Lettuce ( ~1 lb head.)',
          price: 1.79,
          category: 'produce',
          farmdirect: true,
          sale: true,
          org: true,
          img: 'lettuce.jpg',
          producer: 'greg',
          farmdirect: 'true',
          distance: '10'
        },
        {
          id: 13,          
          name: 'Fresh Rosemary Herbs ( 0.5 oz)',
          price: 2.99,
          category: 'herbs',
          farmdirect: true,
          sale: false,
          org: true,
          img: 'rosemary.jpg',
          producer: 'greg',
          farmdirect: 'true',
          distance: '10'
        },
        {
          id: 14,
          name: 'Snow Peas ( 1 lb.)',
          price: 4.99,
          category: 'staples',
          farmdirect: true,
          sale: true,
          org: true,
          img: 'snowpeas.jpg',
          producer: 'greg',
          farmdirect: "true",
          distance: '10'
        }
      ],
      farmers: [
        {
          name: 'Woody',
          business: 'Magnolia Grown Meats',
          region: 'Colorado Front Range' ,
          farming_style: 'meat production',
          address: '',
          email: '',
          phone: '',
          insta: 'magnoliagrownbeef',
          liason: 'geog',
          seasonal_orders_avail: 'geoghub'
        },
        {
          name: 'greg',
          business: '274 Organics',
          region: 'Colorado Front Range' ,
          farming_style: 'medicinals',
          address: '',
          email: '',
          phone: '',
          insta: 'ecocitylearningportal',
          liason: 'geog',
          seasonal_orders_avail: 'geoghub'
        },
        {
          name: 'farmerX',
          business: 'X Organics',
          region: 'Colorado Mountains' ,
          farming_style: 'potatoes and corn',
          address: '',
          email: '',
          phone: '',
          insta: '',
          liason: 'geog',
          seasonal_orders_avail: 'geoghub'
        },
        {
          name: 'farmerY',
          business: 'Y Organics',
          region: 'Colorado Front Range' ,
          farming_style: 'hemp cbd',
          address: '',
          email: '',
          phone: '',
          insta: '',
          liason: 'geog',
          seasonal_orders_avail: 'geoghub'
        },
        {
          name: 'farmerZ',
          business: 'Z Organics',
          region: 'Colorado Front Range' ,
          farming_style: 'hemp cbd',
          address: '',
          email: '',
          phone: '',
          insta: '',
          liason: 'geog',
          seasonal_orders_avail: 'geoghub'
        }
      ],
      selling_style: [
        {
          name: 'Woody',
          farming_style: 'meat production',
          sales: 'pay before hub dropoff',
          seasonal_orders_avail: 'true'
        }
      ],
      customer: [
        {
          name: 'Geog',
          business: 'SCD Hub',
          region: 'Colorado Front Range' ,
          farming_style: 'medicinals,herbs,seeds,',
          address: '274 W. Spring St, Nederland, CO 80466',
          email: 'greg@scdhub.org',
          phone: '303 720 6790',
          insta: 'ecocitylearningportal',
          faceyboo: 'ecocity',
          liason: 'reid',
          driver: 'reid',
          seasonal_orders_avail: 'geoghub'
        }
      ],
      orders: [
        {
          orderID: '0000001',
          region: 'Colorado Front Range' ,
          farming_style: 'medicinals,herbs,seeds,',
          address: '274 W. Spring St, Nederland, CO 80466',
          email: 'greg@scdhub.org',
          phone: '303 720 6790',
          insta: 'ecocitylearningportal',
          faceyboo: 'ecocity',
          liason: 'reid',
          driver: 'reid',
          seasonal_orders_avail: 'geoghub'
        }
      ],
      order_items: [
        {
          itemID: '0000001',
          orderID: '0000001',
          name: 'perch',
          source: '420 Anglers',
          amount: '2 lb',
          price: '$4'
        },
        {
          itemID: '0000002',
          orderID: '0000001',
          name: 'beef prime cut',
          source: 'Woody',
          amount: '3 lb',
          price: '$45'
        }
      ]
    },
    getters: {
      startahub: state => filter(state.startahub, 'validated', 'true'),
      kbitems: state => filter(state.kbitems, 'validated', 'true'),
      produce: state => filter(state.products, 'category', 'produce'),
      herbs: state => filter(state.products, 'category', 'herbs'),
      medicinals: state => filter(state.products, 'category', 'medicinals'),
      meats: state => filter(state.products, 'category', 'meats'),
      farm: state => filter(state.products, 'category', 'farm'),
      staples: state => filter(state.products, 'category', 'staples'),
      sale: state => filter(state.products, 'sale', true),
      org: state => filter(state.products, 'org', true),
      farmdirect: state => filter(state.products, 'farmdirect', true),
      pvol: state => filter(state.products, 'pvol', true)

    },
    mutations: {
      switchSale: state => {
        state.sale = !state.sale;
      },
      switchFarmdirect: state => {
        state.farmdirect = !state.farmdirect;
      },
      switchOrg: state => {
        state.org = !state.org;
      },
      switchPvol: state => {
        state.pvol = !state.pvol;
      },
      clearCartCount: state => {
        state.cartTotal = 0;
      },
      clearCartContents: state => {
        state.cart = {};
      },
      addItem: (state, item) => {
        state.cartTotal++;
        if (item.name in state.cart) {
          state.cart[item.name].count++;
        } else {
          let stateItem = Object.assign({}, item);
          stateItem.count = 1;
          state.cart[item.name] = stateItem;
        }
      }
    }
  });
};

export default createStore;

//helper
const filter = (array, key, value) => array.filter(item => item[key] === value);
