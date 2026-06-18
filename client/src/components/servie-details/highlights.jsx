import Image from "next/image";


const Highlights = ({ data }) => {

  const { title, subtitle, description, images } = data;

  return (
    <section
      id="service-detail-gallery"
      className="relative w-full bg-white py-30 px-10 md:px-20 overflow-x-hidden min-h-screen"
    >
      {/* Heading */}
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-16">
        <div>
          <p className="text-primary text-xs tracking-[0.2em] uppercase mb-4">
            {subtitle}
          </p>

          <h2 className="text-4xl md:text-5xl font-serif">
            {title}
          </h2>
        </div>

        <p className="max-w-md text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image?.id}
            className={`relative overflow-hidden rounded-2xl`}
          >
            <Image
              src={image?.src}
              alt={image?.alt}
              width={800}
              height={1000}
              className="w-full h-full object-cover transition duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;