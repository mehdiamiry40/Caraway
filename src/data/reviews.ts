export interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
  car: string;
}

export const reviews: Review[] = [
  {
    name: "Jason M.",
    location: "Chermside",
    rating: 5,
    text: "Dead Commodore in the carport — they quoted over the phone and stuck to it at pickup. Cash before the truck left.",
    car: "2009 Holden Commodore",
  },
  {
    name: "Sarah K.",
    location: "Ipswich",
    rating: 5,
    text: "Written off in a bingle. Same-day pickup, no haggling on the day.",
    car: "2014 Toyota Camry",
  },
  {
    name: "Derek T.",
    location: "Capalaba",
    rating: 4,
    text: "Other place tried to chip the price when they arrived. These guys matched what they said. Took a star off because traffic made them 20 min late — still solid.",
    car: "2006 Ford Falcon",
  },
  {
    name: "Priya S.",
    location: "Sunnybank",
    rating: 5,
    text: "Scrap Mazda sitting a year. $950, gone in under an hour. Fine by me.",
    car: "2005 Mazda 3",
  },
  {
    name: "Michael B.",
    location: "North Lakes",
    rating: 5,
    text: "Couldn't move it privately. They did the transfer paperwork — I didn't have to queue at Transport.",
    car: "2011 Nissan Dualis",
  },
];
