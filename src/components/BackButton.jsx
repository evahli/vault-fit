import { Link } from 'react-router';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

export const BackButton = () => {
  return (
    <div>
      <Button asChild className="text-gold-light text-xl font-semibold">
        <Link to="/">
          <ArrowLeft className="h-4 w-4" />
          Back to Homepage
        </Link>
      </Button>
    </div>
  );
};
