import { Button } from './ui/button';
import stepsInformation from '../data/stepsInformation.json';
import { InfoCard } from './InfoCard';

export const InfoCards = () => {
  return (
    <>
      <div className='flex flex-col gap-4 items-center pt-4 m-4'>
        {stepsInformation.map((step) => (
          <InfoCard
            key={step.id}
            stepNumber={step.stepNumber}
            desc={step.stepDescription}
          />
        ))}
      </div>
    </>
  );
};
