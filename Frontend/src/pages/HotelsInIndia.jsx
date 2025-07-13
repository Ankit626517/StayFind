import React from 'react';

const topCities = [
  {
    name: 'Mumbai',
    state: 'Maharashtra',
    image: 'https://cdn.wallpapersafari.com/78/78/8SYIUJ.jpg',
  },
  {
    name: 'Delhi',
    state: 'Delhi',
    image: 'https://i.pinimg.com/736x/10/67/d3/1067d320848182734162c2fdd23d8dfb.jpg',
  },
  {
    name: 'Bangalore',
    state: 'Karnataka',
    image: 'https://static.toiimg.com/thumb/msid-54559212,width-748,height-499,resizemode=4,imgsize-307081/.jpg',
  },
  {
    name: 'Hyderabad',
    state: 'Telangana',
    image: 'https://www.mistay.in/travel-blog/content/images/2023/03/Hyderabad.jpg',
  },
  {
    name: 'Jaipur',
    state: 'Rajasthan',
    image: 'https://media.istockphoto.com/id/510978989/photo/hawa-mahal-palace-in-jaipur-rajasthan.jpg?s=612x612&w=0&k=20&c=-2ijZ9kpofMH1jJhaxFF1hJ5oqjdXfOtIu0BlwXwdls=',
  },
  {
    name: 'Indore',
    state: 'Madhya Pradesh',
    image: 'https://t4.ftcdn.net/jpg/03/80/51/49/360_F_380514967_RtrkcopJbS4nHRbEGgpL44ot3F5Qjjl1.jpg',
  },
];

function TotelsInIndia() {
  return (
    <div className=" bg-gray-50  ">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        🏙️ Top Cities to Stay in India
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10 mx-auto">
        {topCities.map((city, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-md overflow-hidden transition duration-300"
          >
            <img
              src={city.image}
              alt={city.name}
              className="w-full h-65 object-cover"
            />
            <div className="p-4 ">
              <h3 className="text-lg font-semibold text-gray-800">{city.name}</h3>
              <p className="text-sm text-gray-500">{city.state}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TotelsInIndia;
