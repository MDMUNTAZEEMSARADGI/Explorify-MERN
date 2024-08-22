import tourImg01 from "../images/tour-img01.jpeg";
import tourImg02 from "../images/tour-img02.jpeg";
import tourImg03 from "../images/tour-img03.jpeg";
// import tourImg04 from "../images/tour-img04.jpeg";
import tourImg05 from "../images/tour-img05.jpeg";
import tourImg06 from "../images/tour-img06.jpeg";
import tourImg07 from "../images/tour-img07.jpeg";
import tourImg08 from "../images/tour-img08.jpeg";
import tourImg09 from "../images/tour-img09.jpeg";
import tourImg10 from "../images/tour-img10.jpeg";
import tourImg11 from "../images/tour-img11.jpeg";
import tourImg12 from "../images/tour-img12.jpeg";

const tours = [
  {
    id: "01",
    title: "Gulbarga Fort",
    city: "Gulbarga",
    distance: 300,
    address: 'Somewhere',
    price: 99,
    maxGroupSize: 10,
    desc: "The Gulbarga Fort, also known as the Kalaburagi Fort, is a historic monument located in Kalaburagi, Karnataka. Built during the 14th century by the Bahmani Sultanate, it served as a stronghold for various dynasties including the Bahmanis, the Adil Shahis, and the Bijapur Sultanate. The fort exhibits a fusion of Hindu and Islamic architectural styles, featuring imposing walls, bastions, and majestic gateways. Within its precincts lie several structures including mosques, palaces, and granaries. The fort stands as a testament to the region's rich history and cultural heritage, attracting visitors with its architectural grandeur and historical significance.",
    reviews: [
      {
        name: "shifa",
        rating: 4.6,
      },
      {
        name: "shifa1",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Dargah Hazrat Khwaja Bandanawaz",
    city: "Gulbarga",
    distance: 400,
    address: 'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "The KBN Darga in Gulbarga, Karnataka, is a revered Islamic shrine dedicated to Khwaja Banda Nawaz Gesu Daraz, a renowned Sufi saint of the 14th century. It is a place of spiritual significance and pilgrimage for followers of Sufism and Islam. The darga's architecture showcases a blend of Indo-Islamic styles, with ornate domes, minarets, and intricate calligraphy adorning its structures. Devotees gather here to seek blessings, offer prayers, and participate in religious rituals. The darga hosts annual Urs celebrations, commemorating the saint's death anniversary, drawing devotees from diverse backgrounds to partake in the spiritual atmosphere and seek solace in their faith.",
    reviews: [
      {
        name: "muntazeem",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Shree Sharana Basaveshwara Temple",
    city: "Gulbarga",
    distance: 500,
    address: 'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "The Sharan Basaveshwar Temple in Gulbarga, Karnataka, is a significant pilgrimage site dedicated to Lord Basaveshwara, a revered saint, philosopher, and social reformer of the 12th century. Constructed in the Chalukyan architectural style, it features intricate carvings and a majestic tower. Devotees flock here to seek blessings and pay homage to Basaveshwara, known for his teachings on social equality, compassion, and devotion. The temple holds religious festivals, attracting devotees from far and wide. It stands as a symbol of spiritual enlightenment and communal harmony, embodying the principles espoused by Basaveshwara through the ages.",
    reviews: [
      {
        name: "Muntaeem",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Malkhed fort",
    city: "Yadgir",
    distance: 500,
    address: 'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "The Malkhed Fort, situated in Yadgir district, Karnataka, is an ancient fortress with a rich historical legacy dating back to the Rashtrakuta and Chalukya dynasties. Strategically positioned atop a hill, it served as a military stronghold and administrative center for various rulers including the Chalukyas, Kalachuris, and later the Bahmani Sultanate. The fort boasts impressive architecture, with fortified walls, bastions, and gateways still standing today. Within its precincts are remnants of palaces, temples, and reservoirs, offering glimpses into its glorious past. The Malkhed Fort stands as a symbol of the region's resilience and strategic importance throughout the centuries.",
    reviews: [
      {
        name: "Spoorti",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: true,
  },
  {
    id: "05",
    title: "Koil Sagar Lake View",
    city: "Yadgir",
    distance: 500,
    address: 'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "Koil Sagar Lake, nestled in Yadgir district, Karnataka, is a serene reservoir renowned for its scenic beauty and tranquil ambiance. Created by the construction of the Koil Sagar Dam across the Bhima River, it serves as a vital water source for irrigation and local communities. The lake's expansive waters and lush surroundings attract visitors seeking relaxation and picturesque views. Boating facilities offer leisurely rides, allowing visitors to immerse themselves in the idyllic landscape. With its verdant shores and shimmering waters, Koil Sagar Lake provides a peaceful retreat amidst nature's bounty, offering solace and respite from the hustle and bustle of daily life.",
    reviews: [
      {
        name: "spoorti",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
  {
    id: "06",
    title: "Shri Kshetra Kuruvapur",
    city: "Raichur",
    distance: 500,
    address: 'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "Shri Kshetra Kuruvapur, located in Raichur district, Karnataka, is a sacred pilgrimage site revered by devotees of Lord Shiva. Situated on an island amidst the Krishna River, it holds immense spiritual significance and historical importance. Legend has it that Lord Brahma himself established the Linga of Lord Mallikarjuna here, making it a revered place of worship. The island is dotted with temples, including the Mallikarjuna Temple, attracting pilgrims who seek blessings and spiritual solace. The tranquil surroundings and religious fervor make Shri Kshetra Kuruvapur a haven for devotees, where faith intertwines with the natural beauty of the riverine landscape.",
    reviews: [
      {
        name: "shifaa",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg09,
    featured: false,
  },
  {
    id: "07",
    title: "Gurdwara Sri Nanak Jhira Sahib",
    city: "Bidar",
    distance: 500,
    address: 'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "Gurdwara Sri Nanak Jhira Sahib, situated in Bidar district, Karnataka, is a sacred Sikh shrine dedicated to Guru Nanak Dev Ji, the founder of Sikhism. It holds a special place in Sikh history and folklore, as it commemorates Guru Nanak Dev Ji's visit to the site during his travels. The gurdwara is renowned for its natural spring, known as Nanak Jhira believed to have been created by Guru Nanak Dev Ji's touch. Pilgrims from across the globe visit to pay homage, seek blessings, and partake in the langar, a community kitchen serving free meals regardless of caste, creed, or religion.",
    reviews: [
      {
        name: "spoorti",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "08",
    title: "Sri Kshetra Jharni Narasimha Mandir",
    city: "Bidar",
    distance: 500,
    address: 'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "Sri Kshetra Jharni Narasimha Mandir, located in Bidar district, Karnataka, is a revered Hindu temple dedicated to Lord Narasimha, an incarnation of Lord Vishnu. The temple is renowned for its unique setting amidst a rocky cave, with a natural spring flowing nearby, adding to its mystical aura. Devotees believe that the deity here fulfills wishes and offers protection from evil forces. The temple complex includes shrines dedicated to other deities, enhancing its spiritual significance. Pilgrims visit throughout the year to seek blessings, participate in rituals, and experience the divine presence amidst the tranquil surroundings of Jharni Narasimha Mandir.",
    reviews: [





    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
  {
    id: "09",
    title: "Mahmood Gawaan Masjid and Madarsa",
    city: "Bidar",
    distance: 500,
    address: 'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "The Mahmood Gawaan Masjid and Madarsa, located in Bidar district, Karnataka, is a historical Islamic monument dating back to the Bahmani Sultanate era. Built by Mahmood Gawan, a prominent statesman and scholar, it exemplifies exquisite Persian-inspired architecture with intricate carvings and elegant domes. The complex served as a center for Islamic education, attracting scholars and students from far and wide. Today, it stands as a testament to the region's rich cultural heritage and architectural prowess. Visitors marvel at its grandeur and historical significance, while the madarsa continues to impart knowledge and perpetuate the legacy of Mahmood Gawan.",
    reviews: [
      {
        name: "Spoorti",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: true,
  },
  {
    id: "10",
    title: "Sanapur Lake",
    city: "Koppal",
    distance: 500,
    address: 'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "Sanapur Lake, nestled in Koppal district, Karnataka, is a serene reservoir known for its natural beauty and tranquil atmosphere. Formed by the construction of a check dam across the Sanapur stream, it serves as a picturesque destination for nature lovers and outdoor enthusiasts. Surrounded by rocky hills and lush greenery, the lake offers stunning panoramic views and opportunities for activities such as boating and picnicking. Visitors can also enjoy birdwatching, as the lake attracts various avian species. With its idyllic setting and refreshing ambiance, Sanapur Lake provides a peaceful retreat amidst the scenic landscapes of Koppal district.",
    reviews: [
      {
        name: "Spoorti",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg10,
    featured: true,
  },
  {
    id: "11",
    title: "Group of Monuments at Hampi",
    city: "Ballari",
    distance: 500,
    address: 'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "The Group of Monuments at Hampi, a UNESCO World Heritage Site, is a sprawling complex in Karnataka, India, showcasing the architectural marvels of the Vijayanagara Empire. Hampi served as the capital of the empire during its zenith in the 14th-16th centuries. The site features numerous temples, shrines, palaces, and other structures, each adorned with intricate carvings and sculptures, reflecting the grandeur of the Vijayanagara architecture. Key attractions include the Virupaksha Temple, Vittala Temple with its iconic stone chariot, Lotus Mahal, and the Elephant Stables. Hampi's ruins stand as a testament to its rich cultural heritage and draw visitors from around the world.",
    reviews: [
      {
        name: "Spoorti",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg11,
    featured: true,
  },
  {
    id: "12",
    title: "Ballari Fort",
    city: "Ballari",
    distance: 500,
    address: 'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "The Ballari Fort, also known as the Bellary Fort, is a historic fortress situated in Ballari, Karnataka. Built atop a granite hill during the Vijayanagara Empire's reign, it served as a strategic stronghold for various rulers including the Nayakas, Hyder Ali, and the British. The fort features impressive ramparts, bastions, and gateways, showcasing a blend of Hindu and Islamic architectural elements. Within its precincts lie remnants of temples, mosques, granaries, and royal residences, offering insights into the region's rich history. Today, the fort stands as a symbol of Ballari's heritage and resilience, attracting visitors with its majestic ruins and panoramic views.",
    reviews: [
      {
        name: "Spoorti",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg12,
    featured: true,
  },

];

export default tours;
