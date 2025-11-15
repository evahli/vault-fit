import { ButtonsContainer } from '@/components/ButtonsContainer';
import { ImageCarousel } from '@/components/imageCarousel';
import { InfoCards } from '@/components/InfoCards';
import { IntroText } from '@/components/IntroText';


export const Homepage = () => {
  return (
    <>
      <div className='h-screen overflow-y-auto'>
        <IntroText />
        <ImageCarousel />
        <InfoCards />
      </div>
    </>
  );
};
