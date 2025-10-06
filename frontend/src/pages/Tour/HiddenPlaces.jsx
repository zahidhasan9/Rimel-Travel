import React from "react";

const HiddenPlaces = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 pb-16">
      {/* Section title */}
      <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-center text-gray-800 mb-12">
        Hidden Beauties of Bangladesh
      </h2>

      {/* First place */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <img
          src="https://whatson.guide/wp-content/uploads/2018/02/171782_185994668099908_100000681295465_502955_3502055_o-1024x768.jpg"
          alt="Sajek Valley"
          className="rounded-2xl shadow-lg object-cover w-full h-96 md:h-[400px]"
        />
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold mb-4 text-gray-900">
            Sajek Valley
          </h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Sajek Valley is a serene hill station located in the Chittagong Hill
            Tracts. Surrounded by mountains and dense forests, this hidden gem offers
            breathtaking views, cool weather, and a peaceful escape from city life.
            Visitors can enjoy trekking, photography, and exploring the local culture
            of the indigenous communities.
          </p>
        </div>
      </div>

      {/* Second place */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <div className="md:order-last">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/a9/8b/44/sea-beach.jpg?w=1000&h=-1&s=1"
            alt="Kuakata Beach"
            className="rounded-2xl shadow-lg object-cover w-full h-96 md:h-[400px]"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold mb-4 text-gray-900">Kuakata Beach</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Kuakata Beach, known as the "Daughter of the Sea," is famous for its
            panoramic views of both sunrise and sunset over the Bay of Bengal.
            This hidden paradise offers a peaceful retreat with golden sands,
            local fishing villages, and fresh seafood. It's perfect for photography,
            relaxation, and experiencing rural coastal life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HiddenPlaces;
