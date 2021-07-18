const p1 = {
  _id: 'p1_zxczxczxc',
  price: 500000,
  address: '123 Elm St.',
  city: 'Toronto',
  state: 'ON',
  postalCode: 'M4P 1Y8',
  numOfBedrooms: 3,
  numOfBathrooms: 4,
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
  price: 1000000,
  address: 'Southwest of Caradhras',
  city: 'Western Slopes',
  state: 'Misty Mountains',
  postalCode: 'M2W 2C5',
  numOfBedrooms: 867,
  numOfBathrooms: 0,
  size: '2000',
  maintenanceCost: 50000000000,
  listedOn: new Date(),
  listingAgent: '123asd123asd123asd', //random Id for now
  description: `
    The famed Mines of Moria, a location that rose to prominence in the years after the filming of the Lord of the Rings Trilogy, is now available for purchase. Beloved for its rich history, unparalleled architecture, and sheer vastness, the Mines of Moria is not for the faint of heart. This is an amazing opportunity for an individual who is interested in fixing up and restoring an incredible pieceof history to its former glory. Utilises ancient Elven and Dwarves technology for the front door, is riddle-protected and inlaid with ithildin, allowing it to automatically light up to welcome you home. Perfect for an individual who enjoys literally living in the dark, living off-grid, and traversing the vast and seemingly endless exploration opportunities Moria has to offer. No plumbing, but has a well located in the Chamber of Mazarbul. 
  `,
  pictures: [
    'https://www.giantbomb.com/a/uploads/scale_medium/0/118/795059-moria_gate_1024.jpg',
    'https://static.wikia.nocookie.net/lotr/images/0/03/Most.jpg/revision/latest?cb=20150331200614&path-prefix=pl',
    'https://static.wikia.nocookie.net/lotr/images/f/fc/Dwarrowdelf_LoTR.png/revision/latest/scale-to-width-down/1000?cb=20130821170001&fbclid=IwAR09q9AjzsKwrYFkw9iNTeGNxFxySNZzHiYLtUdh7bQKaLL73Ts-5Y7FzLw',
  ],
}

const p3 = {
  _id: 'p3_zxczxczxc',
  price: 950000,
  address: 'Isengard',
  city: 'Nan Curunír',
  state: 'Gondor',
  postalCode: 'G1N 8I0',
  numOfBedrooms: 10,
  numOfBathrooms: 15,
  size: '3000',
  maintenanceCost: 600000,
  listedOn: new Date(),
  listingAgent: '123asd123asd123asd', //random Id for now
  description: `
    A robust fortress that once housed Saruman the White, Isengard can now be yours! There is no need to defeat the great White Wizard or the orcs that once resided there, a devastating flood has stripped it down to its bare bones and awaits a new occupant. Despite its extensive water damage, Isengard has an incredible view of the Misty Mountains and Westemnet, the ultimate location for an outdoors enthusiast. The main residence, also known as the Tower of Orthanc, is located at the centre of Isengard and provides a panoramic view of its surroundings. The tower also utilises cutting-edge security technology that makes it effectively impenetrable. 
  `,
  pictures: [
    'https://static.wikia.nocookie.net/lotr/images/0/03/Isengard_before.jpeg/revision/latest/scale-to-width-down/1000?cb=20210116223946',
    'https://static.wikia.nocookie.net/lotr/images/0/0c/Isengard_after.jpeg/revision/latest/scale-to-width-down/700?cb=20181209004208',
    'https://thumbs.gfycat.com/VerifiablePrestigiousAustrianpinscher-max-1mb.gif',
  ],
}

const p4 = {
  _id: 'p4_zxczxczxc',
  price: 500000,
  address: '4 Elm St.',
  city: 'Toronto',
  state: 'ON',
  postalCode: 'M4P 1Y8',
  numOfBedrooms: 3,
  numOfBathrooms: 4,
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
}

export default {
  list: [p1, p2, p3, p4],
}
