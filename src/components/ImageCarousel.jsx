import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import placeholder from '../images/placeholder-image-carousel.jpg';

export const ImageCarousel = () => {
  return (
    <>
      <div className='w-screen m-4'>
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            <CarouselItem>
              <img src={placeholder} alt="placeholder" className='rounded-2xl'/>
              <p className="text-center pt-4">Description of first image</p>
            </CarouselItem>
            <CarouselItem>
              <img src={placeholder} alt="placeholder" className='rounded-2xl'/>
              <p className="text-center pt-4">Description of second image</p>
            </CarouselItem>
            <CarouselItem>
              <img src={placeholder} alt="placeholder" className='rounded-2xl'/>
              <p className="text-center pt-4">Description of third image</p>
            </CarouselItem>
            <CarouselItem>
              <img src={placeholder} alt="placeholder" className='rounded-2xl'/>
              <p className="text-center pt-4">Description of fourth image</p>
            </CarouselItem>
            <CarouselItem>
              <img src={placeholder} alt="placeholder" className='rounded-2xl'/>
              <p className="text-center pt-4">Description of fifth image</p>
            </CarouselItem>
            <CarouselItem>
              <img src={placeholder} alt="placeholder" className='rounded-2xl'/>
              <p className="text-center pt-4">Description of sixth image</p>
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious/>
          <CarouselNext/>
        </Carousel>
      </div>
      <div className='className="max-w-prose mx-auto px-10 mt-8 space-y-2 text--text leading-loose"'>
        <p>Our gym is the best gym</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          eum adipisci inventore delectus sit alias fugiat vero assumenda
          facilis dolorem commodi blanditiis reiciendis minima, quaerat atque
          quidem. Ducimus, esse expedita.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          temporibus odit perspiciatis in eum fugiat cupiditate voluptatibus
          minus ut repudiandae aliquid, sit doloremque deserunt optio, quos
          reprehenderit? Labore, fugit iusto!
        </p>
      </div>
    </>
  );
};
