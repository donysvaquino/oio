import { useEffect, useRef, useState } from "react";
import ".././Slider.css";

import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";
import slide5 from "../assets/slide5.png";

const slides = [slide1, slide2, slide3, slide4, slide5];
const initialSlide = 2;

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const currentSlideRef = useRef(initialSlide);
  const sliderRef = useRef(null);
  const slideRefs = useRef([]);

  const goToSlide = (index, behavior = "smooth") => {
    const slider = sliderRef.current;
    const slide = slideRefs.current[index];

    if (!slider || !slide) return;

    const left =
      slide.offsetLeft - (slider.clientWidth - slide.clientWidth) / 2;
    slider.scrollTo({ left, behavior });
    currentSlideRef.current = index;
    setCurrentSlide(index);
  };

  useEffect(() => {
    goToSlide(initialSlide, "instant");

    const centerCurrentSlide = () =>
      goToSlide(currentSlideRef.current, "instant");
    window.addEventListener("resize", centerCurrentSlide);

    return () => window.removeEventListener("resize", centerCurrentSlide);
  }, []);

  const updateCurrentSlide = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    const sliderCenter = slider.scrollLeft + slider.clientWidth / 2;
    const closestSlide = slideRefs.current.reduce(
      (closest, slide, index) => {
        const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
        const distance = Math.abs(sliderCenter - slideCenter);

        return distance < closest.distance ? { index, distance } : closest;
      },
      { index: 0, distance: Infinity },
    );

    currentSlideRef.current = closestSlide.index;
    setCurrentSlide(closestSlide.index);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft" && currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }

    if (event.key === "ArrowRight" && currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1);
    }
  };

  return (
    <section className="close-up" aria-labelledby="close-up-title">
      <h1 id="close-up-title">Um olhar mais aproximado</h1>
      <p>
        Lore, lorem, lorel lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
        lorem ipsum dolor Lore, lorem
      </p>

      <div className="slider">
        <button
          className="slider__control slider__control--previous"
          type="button"
          aria-label="Imagem anterior"
          disabled={currentSlide === 0}
          onClick={() => goToSlide(currentSlide - 1)}
        >
          <span aria-hidden="true">‹</span>
        </button>

        <div
          className="slider__viewport"
          ref={sliderRef}
          tabIndex="0"
          aria-label="Detalhes do OIO"
          onKeyDown={handleKeyDown}
          onScroll={updateCurrentSlide}
        >
          <ul className="slider__track">
            {slides.map((image, index) => (
              <li
                className="slider__slide"
                key={image}
                ref={(slide) => {
                  slideRefs.current[index] = slide;
                }}
                aria-label={`Imagem ${index + 1} de ${slides.length}`}
              >
                <img src={image} alt={`Detalhe do OIO ${index + 1}`} />
              </li>
            ))}
          </ul>
        </div>

        <button
          className="slider__control slider__control--next"
          type="button"
          aria-label="Próxima imagem"
          disabled={currentSlide === slides.length - 1}
          onClick={() => goToSlide(currentSlide + 1)}
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </section>
  );
}
