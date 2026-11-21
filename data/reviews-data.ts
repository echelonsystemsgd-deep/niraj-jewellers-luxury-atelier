export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  text: string;
  verified: boolean;
  avatarUrl?: string;
  source?: "Google" | "Atelier Showroom";
}

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "gmb-1",
    author: "Lisa Kishtwari",
    location: "Google Verified Client",
    rating: 5,
    date: "11 months ago",
    service: "Bespoke Jewellery & Nose Stud Fitting",
    text: "Very happy with my new nose stud! It's beautiful and also has an excellent fastening on the back so that it doesn't fall out. Very friendly and helpful service. I shall be returning!",
    verified: true,
    avatarUrl: "/images/avatars/avatar-1.svg",
    source: "Google",
  },
  {
    id: "gmb-2",
    author: "Peter O'Reilly",
    location: "Google Verified Client",
    rating: 5,
    date: "A year ago",
    service: "Custom Blend of 3 Wedding Rings",
    text: "Struggled to find a jeweller who would blend 3 wedding rings. Niraj Jewellers were really helpful and crafted exactly what we needed. Highly recommend.",
    verified: true,
    avatarUrl: "/images/avatars/avatar-2.svg",
    source: "Google",
  },
  {
    id: "gmb-3",
    author: "Charanjit Singh",
    location: "Google Verified Client",
    rating: 5,
    date: "Longstanding Client",
    service: "Gold Jewellery & Bespoke Trading",
    text: "I'm happy with the services to give me a great deal on my gold jewellery. I definitely recommend Niraj Jewellers to anyone looking for trusted craftsmanship.",
    verified: true,
    avatarUrl: "/images/avatars/avatar-3.svg",
    source: "Google",
  },
  {
    id: "gmb-4",
    author: "Kryz Woodhouse",
    location: "Google Verified Client",
    rating: 5,
    date: "Verified Review",
    service: "Jewellery Repair & Goldsmith Service",
    text: "Very friendly professional service from the workshop team. Excellent attention to detail and honest advice.",
    verified: true,
    avatarUrl: "/images/avatars/avatar-4.svg",
    source: "Google",
  },
  {
    id: "gmb-5",
    author: "Kamal Bhangoo",
    location: "Google Verified Client",
    rating: 5,
    date: "Verified Review",
    service: "Gold Chains & Asian Jewellery",
    text: "Reasonable prices, excellent advice on gold purity, and very trustworthy service in Hayes.",
    verified: true,
    avatarUrl: "/images/avatars/avatar-1.svg",
    source: "Google",
  },
  {
    id: "rev-1",
    author: "Priya & Rajan Patel",
    location: "Southall, London",
    rating: 5,
    date: "November 2024",
    service: "Complete Bespoke 22ct Bridal Suite",
    text: "The master goldsmith at Niraj Jewellers Ltd is in a league of his own. We spent weeks in central London jewellery shops being quoted astronomical prices with zero transparency. The team sat down with us in Hayes, weighed the gold in front of us, 3D CAD printed my dream choker, and delivered a 22ct masterpiece under budget. True old-school honesty.",
    verified: true,
    avatarUrl: "/images/avatars/avatar-1.svg",
    source: "Atelier Showroom",
  },
  {
    id: "rev-2",
    author: "Devinder Singh",
    location: "Hayes, Middlesex",
    rating: 5,
    date: "October 2024",
    service: "Same-Day 18ct Ring Resizing & Polishing",
    text: "My grandfather's signet ring needed sizing down and the claw needed rebuild. Most shops wanted 3 weeks and to ship it out to Birmingham. The goldsmith resized it right here in the Hayes workshop in 4 hours while I had lunch down the road. Immaculate finish and fair workshop pricing.",
    verified: true,
    avatarUrl: "/images/avatars/avatar-2.svg",
    source: "Atelier Showroom",
  },
  {
    id: "rev-3",
    author: "Ananya & Tariq Sharma",
    location: "Ealing, London",
    rating: 5,
    date: "December 2024",
    service: "GIA Certified 2.2ct Oval Engagement Ring",
    text: "Cannot recommend Niraj Jewellers Ltd enough. We brought in an Instagram reference video and the atelier team hand-selected three GIA diamonds for us to view under the loupe. No pushy retail tactics. The ring is breathtaking. Niraj Jewellers is our family jeweller for life.",
    verified: true,
    avatarUrl: "/images/avatars/avatar-3.svg",
    source: "Atelier Showroom",
  },
];
