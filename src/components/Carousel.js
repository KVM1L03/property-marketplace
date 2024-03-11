import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const CarouselComponent = ({ images }) => (
    <Carousel width={800}>
        {images.map((image, index) => (
            <div key={index}>
            <img src={image} alt='' className='rounded-lg '/>
        </div>
        ))}
    </Carousel>
);

export default CarouselComponent;