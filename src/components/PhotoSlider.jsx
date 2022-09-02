import { useState } from "react";

import { Slide } from "react-slideshow-image";

const slideImages = [
  {
    url: "./BlueB.jpeg",
  },
  {
    url: "./BrownBeltPromo.png",
  },
  {
    url: "./leg4.jpg",
  },
  {
    url: "./leg3.jpg",
  },
  {
    url: "./leg2.jpg",
  },
  {
    url: "./leg1.jpg",
  },
  {
    url: "./maroon.jpg",
  },
];

export default function PhotoSlider() {
  return (
    <>
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center pb-10">
          <div className="lg:max-w-lg lg:w-1/2 md:w-1/2 w-5/6">
          
              <Slide>
                {slideImages.map((slideImage, index) => (
                  <div class="carousel-inner relative w-full overflow-hidden">
                    <div class="carousel-item active float-left w-full">
                      <img
                        src={slideImage.url}
                        // class="block w-full md:h-96 md:w-full"
                        class="object-contain w-full h-96"
                        alt="Wild Landscape"
                      />
                    </div>
                  </div>
                ))}
              </Slide>
          </div>
          <div className="p-2 mb-0 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="border-double border-2 border-white-500">
            <div className="lg:flex sm:flex-wrap">
              <div className="p-2 w-full">
                <a
                  href="https://www.instagram.com/jakebohland_mmbjj/"
                  target="_blank"
                  rel="noopener"
                >
                  <div className="bg-blue-500 rounded flex p-4 h-full items-center">
                    <img
                      src="./instagram.png"
                      alt="The logo icon for insta(OG)"
                      title="Insta"
                      className="w-6 h-6 flex-shrink-0 mr-4"
                    />
                    <span className="title-font font-medium text-white">
                      jakebohland_mmbjj
                    </span>
                  </div>
                </a>
              </div>
              <div className="p-2 w-full">
                <a
                  href="https://rgpleasanton.com/"
                  target="_blank"
                  rel="noopener"
                >
                  <div className="bg-red-500 rounded flex p-4 h-full items-center">
                    <img
                      src="./RGPLogo.jpeg"
                      alt="PDF"
                      title="Resume"
                      className="w-6 h-6 flex-shrink-0 mr-4"
                    />
                    <span className="title-font font-medium text-white">
                      Ralph Gracie Pleasanton 
                    </span>
                  </div>
                </a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div
      id="carouselExampleIndicators"
      class="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div class="carousel-inner relative w-full overflow-hidden">
        <div class="carousel-item active float-left w-full">
          <img
            src="./BlueB.jpeg"
            // class="block w-full md:h-96 md:w-full"
            class="object-contain w-full h-96"
            alt="Wild Landscape"
          />
        </div>
        <div class="carousel-item float-left w-full">
          <img
            src="./BrownBeltPromo.png"
            // class="block w-full md:h-96 md:w-full"
            class="object-contain w-full h-96"
            alt="Wild Landscape"
          />
        </div>
        <div class="carousel-item float-left w-full">
          <img 
            src="./7am.png"
            // class="block w-full" 
            class="object-contain w-full h-96"
            alt="Camera" />
        </div>
        <div class="carousel-item float-left w-full">
          <img
            src="./GymOG.png"
            // class="block w-full"
            class="object-contain w-full h-96"
            alt="Exotic Fruits"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon inline-block bg-blue-500 bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon inline-block bg-red-500 bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div> */}
    </>
  );
}
