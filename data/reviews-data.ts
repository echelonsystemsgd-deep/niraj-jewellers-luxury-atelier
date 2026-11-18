export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  text: string;
  verified: boolean;
}

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Priya & Rajan Patel",
    location: "Southall, London",
    rating: 5,
    date: "November 2024",
    service: "Complete Bespoke 22ct Bridal Suite",
    text: "Viky at Niraj Jewellers is in a league of his own. We spent weeks in central London jewellery shops being quoted astronomical prices with zero transparency. Viky sat down with us in Hayes, weighed the gold in front of us, 3D CAD printed my dream choker, and delivered a 22ct masterpiece under budget. True old-school honesty.",
    verified: true,
  },
  {
    id: "rev-2",
    author: "Devinder Singh",
    location: "Hayes, Middlesex",
    rating: 5,
    date: "October 2024",
    service: "Same-Day 18ct Ring Resizing & Polishing",
    text: "My grandfather's signet ring needed sizing down and the claw needed rebuild. Most shops wanted 3 weeks and to ship it out to Birmingham. Viky resized it right here in the Hayes workshop in 4 hours while I had lunch down the road. Immaculate finish and fair workshop pricing.",
    verified: true,
  },
  {
    id: "rev-3",
    author: "Ananya & Tariq Sharma",
    location: "Ealing, London",
    rating: 5,
    date: "December 2024",
    service: "GIA Certified 2.2ct Oval Engagement Ring",
    text: "Cannot recommend Niraj Jewellers enough. We brought in an Instagram reference video and Viky hand-selected three GIA diamonds for us to view under the loupe. No pushy retail tactics. The ring is breathtaking. Viky is our family jeweller for life.",
    verified: true,
  },
  {
    id: "rev-4",
    author: "Kavita M.",
    location: "Harrow, London",
    rating: 5,
    date: "September 2024",
    service: "24ct Bullion Bars & Exchange",
    text: "Transparent live bullion rates without hidden trading margins. As a regular gold buyer, having Viky directly on WhatsApp gives me peace of mind. All gold stamped with official UK assay hallmarks.",
    verified: true,
  },
  {
    id: "rev-5",
    author: "Harpreet Kaur",
    location: "Slough, Berkshire",
    rating: 5,
    date: "January 2025",
    service: "Custom 22ct Heavy Kada",
    text: "Ordered a custom 90g solid 22ct lion-head kada. The weight, deep engraving, and finish exceeded all expectations. Niraj Jewellers carries on the authentic goldsmithing traditions that are impossible to find elsewhere in London.",
    verified: true,
  },
];
