import type { GalleryCategory } from "@/lib/constants";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "All">;
  height: "short" | "medium" | "tall";
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "1",
    src:"/gallery/Haldi-2.png",
    alt: "Haldi ceremony floral setup",
    category: "Haldi",
    height: "tall",
  },
  {
    id: "2",
    src: "/gallery/Wedding.jpeg",
    alt: "Wedding mandap decoration",
    category: "Wedding",
    height: "medium",
  },
  {
    id: "3",
    src: "/gallery/Birthday.jpeg",
    alt: "Birthday party balloon decor",
    category: "Birthday",
    height: "short",
  },
  {
    id: "4",
    src: "/gallery/Reception-4.jpg",
    alt: "Reception table setting",
    category: "Reception",
    height: "medium",
  },
  {
    id: "5",
    src: "/gallery/Haldi-3.png",
    alt: "Mehendi event decoration",
    category: "Haldi",
    height: "short",
  },
  {
    id: "6",
    src: "/gallery/Wedding1.jpeg",
    alt: "Wedding stage floral backdrop",
    category: "Wedding",
    height: "tall",
  },
  {
    id: "7",
    src: "/gallery/Reception-2.png",
    alt: "Outdoor wedding reception",
    category: "Reception",
    height: "medium",
  },
  {
    id: "8",
    src: "/gallery/Mehendi.jpeg",
    alt: "Indian Mehendi celebration decor",
    category: "Mehendi",
    height: "tall",
  },
  {
    id: "9",
    src: "/gallery/Wedding-2.png",
    alt: "Traditional Indian wedding decor",
    category: "Wedding",
    height: "short",
  },
  {
    id: "10",
    src: "/gallery/reception.jpeg",
    alt: "Elegant reception hall",
    category: "Reception",
    height: "medium",
  },
  {
    id: "11",
    src: "/gallery/Wedding-1.jpeg",
    alt: "Wedding arrangement",
    category: "Wedding",
    height: "medium",
  },
  {
    id: "12",
    src: "/gallery/Corporate.png",
    alt: "Corporate Anniversary",
    category: "Corporate Anniversary",
    height: "short",
  },
];
