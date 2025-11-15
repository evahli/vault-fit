import { Link } from 'react-router';
import { Button } from './ui/button';

export const ButtonsContainer = () => {
  return (
    <>
      <div className='flex flex-col gap-2 justify-center md:flex-row'>
        <Button asChild className="text-xl bg-gold-light text-black rounded-full">
          <Link to="/booking">Book now</Link>
        </Button>
        <Button asChild className="text-xl bg-gold-light text-black rounded-full">
          <Link to="/take-a-tour">Take the tour</Link>
        </Button>
      </div>
    </>
  );
};
