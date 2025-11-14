import logo from '../images/logo-placeholder-image.png';

export const Header = () => {
  return (
    <header className='sticky top-0 z-50 flex items-center justify-center gap-3 py-2 bg-gray-700 shadow-sm'>
      <img src={logo} alt="logo" className='h-24 w-24 object-contain' />
      <p className='text-2xl font-semibold text-gray-50'>VaultFit</p>
    </header>
  );
};