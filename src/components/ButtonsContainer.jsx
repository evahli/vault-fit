import { Link } from 'react-router';
import { Button } from './ui/button';

export const ButtonsContainer = () => {
  return (
    <div className='flex items-center gap-3'>
      <Button asChild className="bg-transparent border-2 border-gold-light text-gold-light hover:bg-gold-light hover:text-background rounded-full transition-all hover:scale-105">
        <Link to="/take-a-tour">Take a Tour</Link>
      </Button>
      <Button asChild className="bg-gold-light text-background hover:bg-gold-warm rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
        <Link to="/booking">Book Now</Link>
      </Button>
    </div>
  );
};