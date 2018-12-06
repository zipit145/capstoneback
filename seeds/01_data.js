
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('data').del()
    .then( () => {
      // Inserts seed entries
      return knex('data').insert([
        {
          name: 'Ben',
          favorite_animal: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Mammals/A-G/cheetah-running.adapt.945.1.jpg',
          previous_occupation: 'Sales Associate',
          home_townlat: 39.7392,
          home_townlong: 104.9903,
          superpower:'night vision in day time'
      },
      {
          name: 'Andrew Pedersen',
          favorite_animal: 'http://www.funnyjunksite.com/pictures/wp-content/uploads/2015/08/Funny-Llama-Picture.jpg (222 kB)',
          previous_occupation: 'Bartender',
          home_townlat: 30.4383,
          home_townlong: 84.2807,
          superpower: 'Can dunk basketball from halfcourt underwater'
      },
      {
          name: 'Grant Fogle',
          favorite_animal: 'https://media.mnn.com/assets/images/2017/01/sleeping-bear-log.jpg.838x0_q80.jpg',
          previous_occupation: 'SEO Account Dude',
          home_townlat: 39.5186,
          home_townlong: 104.7614,
          superpower: 'always 5 minutes late'
      },
      {
          name: 'Sir. Phiillip Hengemuhle the First',
          favorite_animal: 'http://infoweasels.com/whatcat.jpg',
          previous_occupation: 'Dancer',
          home_townlat: 40.0150,
          home_townlong: 105.2705,
          superpower: 'Sub-par speling'
      },
      {
          name: 'Jess',
          favorite_animal: 'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2018/03/baby_platypuses.jpg?itok=KL69Np6v&fc=50,50',
          previous_occupation: 'Wellsite Geologist',
          home_townlat: 32.768799,
          home_townlong: -97.309341,
          superpower: 'can walk real slow'
      },
      {
          name: 'Meredith',
          favorite_animal: 'https://photos.app.goo.gl/pVpPAWQSEb8arWpH7',
          previous_occupation: 'Paleontologist',
          home_townlat: 29.7604,
          home_townlong: 95.3698,
          superpower: 'Can communicate with rocks.'
      },
      {
          name: 'Ryan St.Germain',
          favorite_animal: 'https://www.shoreupdate.com/wp-content/uploads/awpcp/images/mayhemsk9corps-758aa434-large.jpg',
          previous_occupation: 'Line',
          home_townlat: 39.7294,
          home_townlong: 104.8319,
          superpower: 'Able to get any snack from the snack tree'
      },
      {
          name: 'Kate',
          favorite_animal: 'https://images.pexels.com/photos/53001/cougar-mountain-lion-puma-concolor-big-cat-53001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          previous_occupation: 'Event Manager',
          home_townlat: 35.0844,
          home_townlong: 106.6504,
          superpower: 'Can read the minds of houseflies'
      },
      {
          name: 'Trey',
          favorite_animal: 'https://images-na.ssl-images-amazon.com/images/I/61irQrNjgnL._SY679_.jpg (33 kB)',
          previous_occupation: 'General Manager',
          home_townlat: 37.2638,
          home_townlong: 122.0230,
          superpower: 'super deaf'
      },
      {
          name: 'Brandon RedShirt',
          favorite_animal: 'https://images.unsplash.com/photo-1510853675132-58241c941e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9774e7d1ebaa9ac28f3259d4101b1854&auto=format&fit=crop&w=2305&q=80',
          previous_occupation: 'Aircraft Mechanic',
          home_townlat: 39.7293989,
          home_townlong: 104.9930793,
          superpower: 'Being able to remember the 57th word of every song heard.'
      },
      {
          name: 'Sonja',
          favorite_animal: 'https://i0.wp.com/www.wagpets.com/wp-content/uploads/2017/11/the-pug-rose-ears.jpeg?w=960&ssl=1',
          previous_occupation: 'Marketing Manager',
          home_townlat: 36.407249,
          home_townlong: 105.573067,
          superpower: 'can understand the inner workings of butter'
      },
      {
          name: 'Beef', 
          favorite_animal: 'https://palsawa.com/img/Jukcg.jpg',
          previous_occupation: 'Rock Climbing Instructor',
          home_townlat: 45.0586,
          home_townlong: 92.1724,
          superpower: 'Fly, but only two feet off the ground'
      },
      {
          name: 'Charity Van Buren',
          favorite_animal: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bradypus.jpg/1024px-Bradypus.jpg',
          previous_occupation: 'Homemaker',
          home_townlat: 40.5853,
          home_townlong: 105.0844,
          superpower: 'I can drink a pot of tea in 2 minutes flat.'
      },
      {
          name: 'DeBronis Warren',
          favorite_animal: 'https://cdn.images.express.co.uk/img/dynamic/galleries/x701/156708.jpg',
          previous_occupation: 'Military',
          home_townlat: 39.9526,
          home_townlong: 75.1652,
          superpower: "Can give off heat rays only when it's sunny and hot"
      },
      {
          name: 'Reid Garner',
          favorite_animal: 'https://takeshape-prod.imgix.net/207c4ff8-bdf4-4529-970e-b992d4539152/dev/2ea87773-8dde-4724-a03c-bab1190a7a04/John%20Marais-%20Murembo.jpg?auto=compress%2Cformat',
          previous_occupation: 'Bartender',
          home_townlat: 33.209,
          home_townlong: 87.569,
          superpower: 'Being able to always tell the color of the next gumball to pop out of the machine'
      },
      {
          name: 'Gary Anderson',
          favorite_animal: 'https://i.imgur.com/lrKyf3y.gif',
          previous_occupation: 'United States Navy',
          home_townlat: 40.9478,
          home_townlong: 90.3712,
          superpower: 'sleep on command'
      },
      {
          name: 'Evan Young',
          favorite_animal: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcJFlfaSP80DfWerdu2nIaBu8W5zBP7GA0qz_Vv-CwHwi-dcz9',
          previous_occupation: 'Stay at home kid',
          home_townlat: 33.4251,
          home_townlong:  94.0477,
          superpower: 'Can spawn a single ant'
      },
      {
          name: 'Josh Scala',
          favorite_animal: 'https://secure.img1-fg.wfcdn.com/im/38103834/resize-h600%5Ecompr-r85/2804/28041725/%2527Proportions+of+the+Human+Figure+%2528Vitruvian+Man%2529%2527+by+Leonardo+Da+Vinci+Graphic+Art+on+Wrapped+Canvas.jpg',
          previous_occupation: 'Applications Engineer',
          home_townlat: 40.959471,
          home_townlong: 74.125202,
          superpower: 'Can telekinetically move rubbage, but only between two trash recepticles.'
      }
 
      ])
    })
}
