export interface Testimonial {
  id: string;
  name: string;
  event: string;
  review: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Imran - Joy Coffee Curing",
    event: "Wedding Decoration",
    review:
      "SNS Events transformed the wedding into a fairy tale. The wedding, floral arrangements, and stage design exceeded every expectation. Truly premium work!",
    rating: 5,
  },
  {
    id: "2",
    name: "Dr. Shamshuddini",
    event: "Reception Event",
    review:
      "From haldi to Reception, every detail was perfect. The marigold themes and traditional touches made our family celebration so memorable. Highly recommended!",
    rating: 5,
  },
  {
    id: "3",
    name: "CN Akhmal",
    event: "Corporate Anniversary",
    review:
      "Professional, creative, and on time. They understood our vision and delivered an elegant setup that impressed all our guests. Will book again!",
    rating: 5,
  },
  {
    id: "4",
    name: "Mr. Nazeer - Retired Sub Inspector",
    event: "Wedding Decoration",
    review:
      "The wedding decoration of my daughter were absolutely adorable. SNS Events made the wedding magical. Thank you for the beautiful memories!",
    rating: 5,
  },
];
