import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { BackButton } from './BackButton';

export const TakeATour = () => {
  return (
    <>
      <div className="w-full max-w-xs mx-auto">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              {' '}
              <div className="p-4 space-y-2 bg-gray-200 rounded">
                Slide 1
              </div>{' '}
            </CarouselItem>
            <CarouselItem>
              {' '}
              <div className="p-4 bg-gray-200 rounded">Slide 2</div>{' '}
            </CarouselItem>
            <CarouselItem>
              {' '}
              <div className="p-4 bg-gray-200 rounded">Slide 3</div>{' '}
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className='className="max-w-prose mx-auto px-10 mt-8 space-y-2 text-gray-700 leading-loose"'>
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
