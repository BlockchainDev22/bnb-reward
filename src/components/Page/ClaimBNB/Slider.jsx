import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";

const Slider = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img src="/assets/img/slider/banner.jpg" alt="slider-1" />
          </div>
          <div className="embla__slide">
            <img src="/assets/img/slider/product.jpg" alt="slider-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
