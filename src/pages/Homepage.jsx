import { ButtonsContainer } from '@/components/ButtonsContainer';
import { TakeATour } from '@/components/TakeATour';

export const Homepage = () => {
  return (
    <>
      <div className='h-screen overflow-y-auto'>
        <ButtonsContainer />  
        <TakeATour />      
        <p>Challo</p>
      </div>
    </>
  );
};
