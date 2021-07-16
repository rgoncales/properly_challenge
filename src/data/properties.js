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
  priceHistory: [
    {
      price: 300000,
      soldOn: new Date(),
      listedOn: new Date(),
    },
  ],
}

const p2 = {
  _id: 'p2_zxczxczxc',
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
  priceHistory: [
    {
      price: 300000,
      soldOn: new Date(),
      listedOn: new Date(),
    },
  ],
}

const p3 = {
  _id: 'p3_zxczxczxc',
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
  priceHistory: [
    {
      price: 300000,
      soldOn: new Date(),
      listedOn: new Date(),
    },
  ],
}

const p4 = {
  _id: 'p4_zxczxczxc',
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
  priceHistory: [
    {
      price: 300000,
      soldOn: new Date(),
      listedOn: new Date(),
    },
  ],
}

export default {
  list: [p1, p2, p3, p4],
}
