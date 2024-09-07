export default function ChooseUs() {
    return (
      <div className="bg-yellow-50 p-8 animate-fade-in">
        <h2 className="text-center text-3xl font-bold mb-8 animate-fade-up relative">
          <span className="inline-block animate-fade-up-delay">Designing</span>{" "}
          <span className="inline-block animate-fade-up-delay-200">Spaces</span>{" "}
          <span className="inline-block animate-fade-up-delay-400">for</span>{" "}
          <span className="inline-block animate-fade-up-delay-600">Inspired</span>{" "}
          <span className="inline-block animate-fade-up-delay-800">Living</span>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary" />
        </h2>
        <div className="space-y-8">
          <div className="flex flex-col items-center md:flex-row md:space-x-8 animate-fade-in">
            <div className="md:w-1/2 animate-fade-up-delay">
              <h3 className="text-xl font-semibold mb-4 relative">
                <span className="inline-block animate-fade-up-delay">Curating</span>{" "}
                <span className="inline-block animate-fade-up-delay-200">Timeless</span>{" "}
                <span className="inline-block animate-fade-up-delay-400">Interiors</span>
                <div className="absolute bottom-0 left-0 w-16 h-1 bg-primary" />
              </h3>
              <p className="mb-4 animate-fade-up-delay-600">
                Our team of experienced designers specializes in crafting beautiful and functional spaces that reflect
                your unique style. From classic elegance to modern minimalism, we'll work with you to bring your vision to
                life.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center animate-fade-up-delay-800">
              <img
                src="/placeholder.svg"
                alt="Curating Timeless Interiors"
                className="rounded-lg shadow-lg"
                width="300"
                height="300"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row md:flex-row-reverse md:space-x-8 animate-fade-in">
            <div className="md:w-1/2 animate-fade-up-delay">
              <h3 className="text-xl font-semibold mb-4 relative">
                <span className="inline-block animate-fade-up-delay">Elevating</span>{" "}
                <span className="inline-block animate-fade-up-delay-200">Your</span>{" "}
                <span className="inline-block animate-fade-up-delay-400">Living</span>{" "}
                <span className="inline-block animate-fade-up-delay-600">Experience</span>
                <div className="absolute bottom-0 left-0 w-16 h-1 bg-primary" />
              </h3>
              <p className="mb-4 animate-fade-up-delay-800">
                Our innovative design solutions are tailored to enhance your daily life. From cozy nooks to open-concept
                layouts, we'll create spaces that inspire and energize you.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center animate-fade-up-delay">
              <img
                src="/placeholder.svg"
                alt="Elevating Your Living Experience"
                className="rounded-lg shadow-lg"
                width="300"
                height="300"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row md:space-x-8 animate-fade-in">
            <div className="md:w-1/2 animate-fade-up-delay">
              <h3 className="text-xl font-semibold mb-4 relative">
                <span className="inline-block animate-fade-up-delay">Sustainable</span>{" "}
                <span className="inline-block animate-fade-up-delay-200">Design</span>{" "}
                <span className="inline-block animate-fade-up-delay-400">for</span>{" "}
                <span className="inline-block animate-fade-up-delay-600">a</span>{" "}
                <span className="inline-block animate-fade-up-delay-800">Greener</span>{" "}
                <span className="inline-block animate-fade-up-delay-1000">Future</span>
                <div className="absolute bottom-0 left-0 w-16 h-1 bg-primary" />
              </h3>
              <p className="mb-4 animate-fade-up-delay-1200">
                We believe in creating spaces that are not only beautiful, but also environmentally responsible. Our
                sustainable design approach incorporates eco-friendly materials and energy-efficient solutions to reduce
                your carbon footprint.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center animate-fade-up-delay">
              <img
                src="/placeholder.svg"
                alt="Sustainable Design for a Greener Future"
                className="rounded-lg shadow-lg"
                width="300"
                height="300"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row md:flex-row-reverse md:space-x-8 animate-fade-in">
            <div className="md:w-1/2 animate-fade-up-delay">
              <h3 className="text-xl font-semibold mb-4 relative">
                <span className="inline-block animate-fade-up-delay">Personalized</span>{" "}
                <span className="inline-block animate-fade-up-delay-200">Design</span>{" "}
                <span className="inline-block animate-fade-up-delay-400">for</span>{" "}
                <span className="inline-block animate-fade-up-delay-600">Your</span>{" "}
                <span className="inline-block animate-fade-up-delay-800">Unique</span>{" "}
                <span className="inline-block animate-fade-up-delay-1000">Style</span>
                <div className="absolute bottom-0 left-0 w-16 h-1 bg-primary" />
              </h3>
              <p className="mb-4 animate-fade-up-delay-1200">
                We believe that your home should be a reflection of your personality. Our team of designers will work
                closely with you to understand your preferences and create a space that is truly one-of-a-kind.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center animate-fade-up-delay">
              <img
                src="/placeholder.svg"
                alt="Personalized Design for Your Unique Style"
                className="rounded-lg shadow-lg"
                width="300"
                height="300"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  