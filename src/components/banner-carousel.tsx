import { Carousel } from "./ui/carousel";
import Image from "next/image";

const banners = [
  { src: "/globe.svg", alt: "Banner 1" },
  { src: "/next.svg", alt: "Banner 2" },
  { src: "/vercel.svg", alt: "Banner 3" },
];

export default function BannerCarousel() {
  return (
    <Carousel className="w-full h-48 mb-6">
      {banners.map((b, i) => (
        <Image key={i} src={b.src} alt={b.alt} className="object-contain h-full w-full" width={600} height={192} />
      ))}
    </Carousel>
  );
}
