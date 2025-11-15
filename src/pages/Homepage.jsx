import { ButtonsContainer } from '@/components/ButtonsContainer';
import { FAQSection } from '@/components/FAQSection';
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
        <FAQSection />
      </div>
    </>
  );
};
