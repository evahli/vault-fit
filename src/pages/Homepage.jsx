import { ButtonsContainer } from '@/components/ButtonsContainer';
import { InfoCards } from '@/components/InfoCards';
import { TakeATour } from '@/components/TakeATour';

export const Homepage = () => {
  return (
    <>
      <div className='h-screen overflow-y-auto'>
        <ButtonsContainer />  
        <TakeATour />
        <InfoCards />
        <p>Challo</p>
      </div>
    </>
  );
};
