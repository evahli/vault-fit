import { ButtonsContainer } from '@/components/ButtonsContainer';
import { ImageCarousel } from '@/components/imageCarousel';
import { InfoCards } from '@/components/InfoCards';


export const Homepage = () => {
  return (
    <>
      <div className='h-screen overflow-y-auto'>
        <ButtonsContainer />  
        <ImageCarousel />
        <InfoCards />
      </div>
    </>
  );
};
