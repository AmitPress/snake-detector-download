import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './Carousel.css'
export const Carousel = () => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
    return (<>
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide"><img className='image' src="/assets/loading.jpg" alt="Splash" /></div>
                <div className="embla__slide"><img className='image' src="/assets/home.jpg" alt="Home" /></div>
                <div className="embla__slide"><img className='image' src="/assets/result.jpg" alt="Result" /></div>
            </div>
        </div>
    </>)
}