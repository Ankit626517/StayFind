function HotelCard({ hotel, onSelect }) {
  const imageUrl =
    hotel?.images?.[0]?.thumbnail ||
    hotel?.images?.[0]?.original_image ||
    "https://via.placeholder.com/600x400?text=No+Image";

  return (
    <div
      onClick={() => onSelect(hotel)}
      className="cursor-pointer flex flex-col border border-gray-200 rounded-xl shadow-md overflow-hidden bg-white hover:shadow-lg transition-all duration-300"
    >
      {/* Photo */}
      <img
        src={imageUrl}
        alt={hotel.name}
        className="w-full h-48 object-cover"
      />

      {/* Basic Info */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-bold">{hotel.name}</h2>
        <div className="flex items-center gap-2 text-sm">
          <span className="bg-[#EA580C] text-white px-2 py-0.5 rounded">
            ⭐ {hotel.overall_rating}
          </span>
          <span className="text-gray-500">({hotel.reviews} reviews)</span>
        </div>
        <p className="text-gray-600 text-sm line-clamp-2">{hotel.description}</p>
        <p className="text-lg font-semibold text-[#111827]">
          ₹{hotel.rate_per_night?.lowest}
          <span className="text-xs text-gray-500"> + taxes</span>
        </p>
      </div>
    </div>
  );
}

export default HotelCard;
