function FullHotelDetails({ hotel, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6">
        <button
          onClick={onClose}
          className="mb-4 text-red-500 hover:underline"
        >
          Close
        </button>

        <h1 className="text-2xl font-bold mb-2">{hotel.name}</h1>
        <p className="text-sm text-gray-500 mb-4">
          📍 {hotel.location} | ⭐ {hotel.overall_rating}
        </p>

        {/* Gallery */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {hotel.images?.map((img, i) => (
            <img
              key={i}
              src={img.thumbnail || img.original_image}
              alt=""
              className="w-full h-40 object-cover rounded"
            />
          ))}
        </div>

        {/* Full Details */}
        <p className="mb-4">{hotel.description}</p>

        <h3 className="font-semibold">Amenities:</h3>
        <ul className="grid grid-cols-2 gap-1 text-sm mb-4">
          {hotel.amenities?.map((a, i) => (
            <li key={i}>✅ {a}</li>
          ))}
        </ul>

        <h3 className="font-semibold">Nearby Places:</h3>
        <ul className="list-disc list-inside text-sm mb-4">
          {hotel.nearby_places?.map((place, i) => (
            <li key={i}>
              {place.name} ({place.transportations?.join(", ")})
            </li>
          ))}
        </ul>

        <h3 className="font-semibold">Price per Night:</h3>
        <p>₹{hotel.rate_per_night?.lowest} + taxes</p>
      </div>
    </div>
  );
}

export default FullHotelDetails;
