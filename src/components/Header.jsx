import logo from '../images/logo-placeholder-image.png';
import { ButtonsContainer } from './ButtonsContainer';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center flex-col gap-3 py-2 bg-background-light md:flex-row md:justify-evenly">
      <div className='flex flex-col items-center md:flex-row'>
        <img src={logo} alt="logo" className="h-24 w-24 object-contain" />
        <p className="text-2xl font-semibold text-gray-50">VaultFit</p>
      </div>
      <ButtonsContainer />
    </header>
  );
};
