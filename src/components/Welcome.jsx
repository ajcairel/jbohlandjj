import { Slide } from "react-slideshow-image";

export default function Welcome() {
  const slideImages = [
    {
      url: "./Jake.png",
    },
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
      url: "./leg4.jpg",
    },
  ];
  return (
    <section id="about">
      <div className="container mx-auto flex py-10 md:flex-row flex-col items-center pb-10">
        <div className="mb-0 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:text-left mb-16 md:mb-0 items-center text-center">
          <img
            href="#about"
            className="h-48 w-48"
            src="./RG+Logo.png"
            alt="Workflow"
          />
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black text-center">
            Jake Bohland
            <br className="hidden lg:inline-block" />
          </h1>
          <h3 className="sm:text-4xl text-xl mb-4 font-medium text-white text-center">
            Marcio Moreira Brown Belt
          </h3>
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
                    // className="object-cover object-center rounded"
                    // alt="hero"
                  />
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </section>
  );
}
