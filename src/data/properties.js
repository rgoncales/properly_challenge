const p1 = {
  _id: 'p1_zxczxczxc',
  price: 500000,
  address: '123 Elm St.',
  city: 'Toronto',
  state: 'ON',
  postalCode: 'M4P 1Y8',
  numOfBedrooms: 2,
  numOfBathrooms: 1,
  size: 600,
  maintenanceCost: 750,
  listedOn: new Date(),
  listingAgent: '123asd123asd123asd', //random Id for now
  description: `
    Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy 
    smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or 
    to eat: it was a hobbit-hole, and that means comfort.
    It had a perfectly round door like a porthole, painted green, with a shiny 
    yellow brass knob in the exact middle. The door opened on to a tube-shaped 
    hall like a tunnel: a very comfortable tunnel without smoke, with panelled 
    walls, and floors tiled and carpeted, provided with polished chairs, and 
    lots and lots of pegs for hats and coats—the hobbit was fond of visitors. 
    The tunnel wound on and on, going fairly but not quite straight into the 
    side of the hill—The Hill, as all the people for many miles round called 
    it—and many little round doors opened out of it, first on one side and then
    on another. No going upstairs for the hobbit: bedrooms, bathrooms, cellars, 
    pantries (lots of these), wardrobes (he had whole rooms devoted to clothes),
    kitchens, dining-rooms, all were on the same floor, and indeed on the same 
    passage. The best rooms were all on the left-hand side (going in), for 
    these were the only ones to have windows, deep-set round windows looking 
    over his garden, and meadows beyond, sloping down to the river.
  `,
  pictures: [
    'https://media.fromthegrapevine.com/assets/images/2015/3/hobbit-house.jpg.480x0_q71_crop-scale.jpg',
    'https://apilgriminnarnia.files.wordpress.com/2012/12/bag-end-inside-hobbit.jpg',
    'https://i.pinimg.com/originals/f7/ca/8e/f7ca8ebdb7ae3e114f000e00f8a1c85f.jpg',
  ],
  //priceHistory: [
  //  {
  //    price: 300000,
  //    soldOn: new Date(),
  //    listedOn: new Date(),
  //  },
  //],
}

const p2 = {
  _id: 'p2_zxczxczxc',
  price: 800000,
  address: '50 Caradhras SW',
  city: 'Western Slopes',
  state: 'Misty Mountains',
  postalCode: 'M2W 2C5',
  numOfBedrooms: 3,
  numOfBathrooms: 2,
  size: 4000,
  maintenanceCost: 1500,
  listedOn: new Date(),
  listingAgent: '123asd123asd123asd', //random Id for now
  description: `
    The famed Mines of Moria, a location that rose to prominence in the years after the filming of the Lord of the Rings Trilogy, is now available for purchase. Beloved for its rich history, unparalleled architecture, and sheer vastness, the Mines of Moria is not for the faint of heart. This is an amazing opportunity for an individual who is interested in fixing up and restoring an incredible pieceof history to its former glory. Utilises ancient Elven and Dwarves technology for the front door, is riddle-protected and inlaid with ithildin, allowing it to automatically light up to welcome you home. Perfect for an individual who enjoys literally living in the dark, living off-grid, and traversing the vast and seemingly endless exploration opportunities Moria has to offer. No plumbing, but has a well located in the Chamber of Mazarbul. 
  `,
  pictures: [
    'https://i.redd.it/s5cxusqafc241.jpg',
    'https://i.pinimg.com/originals/c1/8e/ca/c18ecaa0a6bec922cd2c5260ab2ec169.jpg',
    'https://lentenlordoftherings.files.wordpress.com/2015/02/moria_gate.jpg',
  ],
}

const p3 = {
  _id: 'p3_zxczxczxc',
  price: 1000000,
  address: '1 Isengard Plaza',
  city: 'Nan Curunír',
  state: 'Gondor',
  postalCode: 'G1N 8I0',
  numOfBedrooms: 4,
  numOfBathrooms: 3,
  size: 3000,
  maintenanceCost: 600000,
  listedOn: new Date(),
  listingAgent: '123asd123asd123asd', //random Id for now
  description: `
    A robust fortress that once housed Saruman the White, Isengard can now be yours! There is no need to defeat the great White Wizard or the orcs that once resided there, a devastating flood has stripped it down to its bare bones and awaits a new occupant. Despite its extensive water damage, Isengard has an incredible view of the Misty Mountains and Westemnet, the ultimate location for an outdoors enthusiast. The main residence, also known as the Tower of Orthanc, is located at the centre of Isengard and provides a panoramic view of its surroundings. The tower also utilises cutting-edge security technology that makes it effectively impenetrable. 
  `,
  pictures: [
    'https://miro.medium.com/max/600/1*1kCNdOayi5rTBVoYhb_7AA.jpeg',
    'https://i.pinimg.com/originals/d4/95/3e/d4953ed041cdf5d9240e1e9d911a7348.jpg',
    'https://thumbs.gfycat.com/VerifiablePrestigiousAustrianpinscher-max-1mb.gif',
  ],
}

const p4 = {
  _id: 'p4_zxczxczxc',
  price: 50000,
  address: '4 Dirt Road W.',
  city: 'Mordor',
  state: 'ME',
  postalCode: 'M4P 1Y8',
  numOfBedrooms: 2,
  numOfBathrooms: 4,
  size: 300,
  maintenanceCost: 3000,
  listedOn: '2021-07-18T04:13:27.213Z',
  listingAgent: '123asd123asd123asd', //random Id for now
  description: `
    Basement in Mordor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `,
  pictures: [
    'https://static0.srcdn.com/wordpress/wp-content/uploads/2019/08/Lord-of-the-Rings-Eye-of-Sauron-Mordor.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5',
    'https://i.pinimg.com/originals/f6/36/07/f636074385edd911c47baa2097a2dbe8.jpg',
    'https://i.pinimg.com/originals/64/14/58/641458c0b4e5414d3509c43add593748.png',
  ],
}

const p5 = {
  _id: 'p5_zxczxczxc',
  price: 200000,
  address: '13 Floating Dock',
  city: 'Laketown',
  state: 'ME',
  postalCode: 'M4P 1Y8',
  numOfBedrooms: 1,
  numOfBathrooms: 1,
  size: 800,
  maintenanceCost: 300,
  listedOn: '2021-07-18T04:13:27.213Z',
  listingAgent: '123asd123asd123asd', //random Id for now
  description: `
    Wood shack in Laketown. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `,
  pictures: [
    'https://evermotion.org/files/publications_images/slider__1231_2.jpg',
    'https://i.ytimg.com/vi/hWwiw45Ycx0/maxresdefault.jpg',
    'https://www.setdecorators.org/sites/setdecorators/information/thumbnails_399_264/H_18_Bard_workshop_ph.jpg',
  ],
}

const p6 = {
  _id: 'p6_zxczxczxc',
  price: 750000,
  address: '23 Theoden St.',
  city: 'Edoras',
  state: 'Rohan',
  postalCode: 'M4P 1Y8',
  numOfBedrooms: 5,
  numOfBathrooms: 5,
  size: 2000,
  maintenanceCost: 450,
  listedOn: '2021-07-18T04:13:27.213Z',
  listingAgent: '123asd123asd123asd', //random Id for now
  description: `
    Cottage in Rohan. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `,
  pictures: [
    'https://images.squarespace-cdn.com/content/v1/5c87064065a7075137b3a44a/1591000887293-96QJQ0NI3M0T84GN0NBP/Edoras+New+Zealand+Lord+of+the+Rings+filming+locations?format=500w',
    'https://i.pinimg.com/originals/30/43/74/304374d8fb25ab8555082d6a14160ad8.jpg',
    'https://resources.stuff.co.nz/content/dam/images/1/h/f/u/k/1/image.related.StuffLandscapeSixteenByNine.710x400.1hfu7v.png/1603155930917.jpg?format=pjpg&optimize=medium',
  ],
}

const p7 = {
  _id: 'p7_zxczxczxc',
  price: 500000,
  address: '23 Theoden St.',
  city: 'Minas Tirith',
  state: 'Gondor',
  postalCode: 'M4P 1Y8',
  numOfBedrooms: 2,
  numOfBathrooms: 2,
  size: 700,
  maintenanceCost: 750,
  listedOn: '2021-07-18T04:13:27.213Z',
  listingAgent: '123asd123asd123asd', //random Id for now
  description: `
    Apartment in Minas Tirith. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `,
  pictures: [
    'https://images.adsttc.com/media/images/55c5/e792/e58e/ce67/c100/018d/newsletter/lkz26jhrfekub0ze5ftt.jpg?1439033231',
    'https://i.quotev.com/img/q/u/17/9/13/s7hptdjlhv.jpg',
    'https://live.staticflickr.com/3765/10565678803_2a6bc6827d_b.jpg',
  ],
}

export default {
  list: [p1, p2, p3, p4, p5, p6, p7],
}
