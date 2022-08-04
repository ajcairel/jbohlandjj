export default function Welcome() {
    return (
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center pb-10">
        <div className="lg:max-w-lg lg:w-1/2 md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="./Jake.png"
            />
          </div>
          <div className="mb-0 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black text-center">
              Jake Bohland
              <br className="hidden lg:inline-block" />
            </h1>
            <h3 className="sm:text-4xl text-xl mb-4 font-medium text-white text-center">
              Brown Belt under Marcio Morera
            </h3>
            <p className="mb-8 leading-relaxed text-black">
              I like to eat apples.
            </p>
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
                      Instagram
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
      </section>
    );
  }
  