import { FAQSection } from '@/components/FAQSection';
import { ImageCarousel } from '@/components/ImageCarousel';
import { InfoCards } from '@/components/InfoCards';
import { IntroText } from '@/components/IntroText';
import { Pricing } from '@/components/Pricing';


export const Homepage = () => {
  return (
    <>
      <div className='h-screen overflow-y-auto'>
        <IntroText />
        <ImageCarousel />
        <InfoCards />
        <Pricing />
        <FAQSection />
      </div>
    </>
  );
};
