function HotelCard({ hotel }) {
  /* --------- defensive value picks --------- */
  const imageUrl =
    hotel?.images?.[0]?.thumbnail ||
    hotel?.images?.[0]?.original_image ||
    "https://via.placeholder.com/600x400?text=No+Image";

  const nightPrice = hotel?.rate_per_night?.lowest
    ? `${hotel.rate_per_night.lowest}`
    : "N/A";

  const totalStay = hotel?.total_rate?.lowest
    ? `${hotel.total_rate.lowest}`
    : "—";

  const overallRating =
    hotel?.overall_rating !== undefined ? hotel.overall_rating : "—";

  const locationRating =
    hotel?.location_rating !== undefined ? hotel.location_rating : "—";

  /* --------- card markup --------- */
  return (
    <article
      className="
        w-full flex flex-col md:flex-row overflow-hidden rounded-3xl
        shadow-md bg-white/70 backdrop-blur
        hover:shadow-xl hover:translate-y-[-2px] transition
      "
    >
      {/* image section */}
      <div className="md:w-80 shrink-0">
        <img
          src={imageUrl}
          alt={hotel.name}
          className="h-48 md:h-full w-full object-cover object-center"
        />
      </div>

      {/* text section */}
      <div className="flex flex-col gap-3 p-6 flex-1">
        {/* TITLE */}
        <h3 className="text-xl font-semibold">{hotel.name}</h3>

        {/* ratings row */}
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <span>⭐ {overallRating} / 5</span>
          <span>📍 {locationRating} / 5</span>
          {hotel.type && (
            <span className="ml-auto italic text-gray-600">{hotel.type}</span>
          )}
        </div>

        {/* timing row */}
        <p className="text-sm text-gray-600">
          ⏰ Check‑in <strong>{hotel.check_in_time || "--"}</strong> | Check‑out{" "}
          <strong>{hotel.check_out_time || "--"}</strong>
        </p>

        {/* prices row */}
        <p className="text-sm">
          💰 <strong>{nightPrice}</strong> / night &nbsp;|&nbsp; From{" "}
          <strong>{totalStay}</strong> total
        </p>

        {/* amenities chips */}
        <div className="flex flex-wrap gap-2">
          {(hotel.amenities || []).slice(0, 5).map((tag, i) => (
            <span
              key={i}
              className="rounded-full bg-blue-100 text-blue-700 px-2 py-0.5 text-xs"
            >
              {tag}
            </span>
          ))}
          {hotel.amenities && hotel.amenities.length > 5 && (
            <span className="text-xs text-gray-500">
              +{hotel.amenities.length - 5}
            </span>
          )}
        </div>

        {/* reviews + CTA */}
        <div className="mt-auto flex items-center justify-between">
          <p className="text-xs text-gray-600">
            🗨️ {hotel.reviews || 0} reviews
          </p>

          <a
            href={hotel.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
          >
            View deal
          </a>
        </div>
      </div>
    </article>
  );
}
export default HotelCard;