import placeholder from '../images/placeholder-image-carousel.jpg';

export const TourCard = () => {
  return (
    <>
      <div className="h-screen overflow-y-auto flex flex-col">
        <img src={placeholder} alt="placeholder" width="300px" height="200px" className='items-center'/>
        <h2 className='text-left'>Heading</h2>
        <p className='text-left'>Description</p>
      </div>
    </>
  );
};
