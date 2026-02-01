import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@components/shadcn/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

export async function getImages() {
    let images = import.meta.glob<{ default: ImageMetadata }>("@content/flyer/*.{jpeg,jpg,png}");
    

    const resolvedImages = await Promise.all(
      Object.values(images).map((image) => image().then((mod) => mod.default))
    );

    resolvedImages.sort(() => Math.random() - 0.5);
    return resolvedImages;
  }

const images = await getImages();

export default function EventCarousel() {
  return (
    <Carousel className="w-full max-w-xl" opts={{loop: true, align: "center"}}>
      <CarouselContent>
         {Array.from({ length: images.length }).map((_, index) => (
             <Carousel className="w-full max-w-xl" opts={{loop: true, align: "center",}} plugins={[Autoplay({delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })]}>
               <img 
                      src={images[index].src}
                      alt={`Flyer`}
                      loading="lazy"
                      className="rounded-xl"
                    />
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
