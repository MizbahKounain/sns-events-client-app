export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: "haldi",
    title: "Haldi Decoration",
    description:
      "Radiant marigold mandaps, golden drapes, and traditional accents for a vibrant haldi celebration.",
    image: "/gallery/Haldi-1.png",
  },
  {
    id: "mehendi",
    title: "Mehendi Decoration",
    description:
      "Colorful floral swings, bohemian drapes, and dreamy lighting for unforgettable mehendi nights.",
    image: "/gallery/Mehendi.png",
  },
  {
    id: "wedding",
    title: "Wedding Decoration",
    description:
      "Royal stage backdrops, crystal décor, and cinematic floral designs for your dream wedding.",
    image: "/gallery/Wedding.jpeg",
  },
  {
    id: "reception",
    title: "Reception Decoration",
    description:
      "Luxury tablescapes, neon accents, and grand entrance décor for a glamorous reception.",
    image: "/gallery/Reception.png",
  },
  {
    id: "Catering",
    title: "Delightful Catering Services",
    description:
      "Beautifully organized celebrations paired with delightful catering.",
    image: "/gallery/Catering.png",
  },
  {
    id: "birthday",
    title: "Birthday Decoration",
    description:
      "Themed balloon arches, LED walls, and playful premium setups for all ages.",
    image: "/gallery/Birthday1.png",
  },

];
