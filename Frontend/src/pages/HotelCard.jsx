// function HotelCard({ hotel }) {
//   /* --------- defensive value picks --------- */
//   const imageUrl =
//     hotel?.images?.[0]?.thumbnail ||
//     hotel?.images?.[0]?.original_image ||
//     "https://via.placeholder.com/600x400?text=No+Image";

//   const nightPrice = hotel?.rate_per_night?.lowest
//     ? `${hotel.rate_per_night.lowest}`
//     : "N/A";

//   const totalStay = hotel?.total_rate?.lowest
//     ? `${hotel.total_rate.lowest}`
//     : "—";

//   const overallRating =
//     hotel?.overall_rating !== undefined ? hotel.overall_rating : "—";

//   const locationRating =
//     hotel?.location_rating !== undefined ? hotel.location_rating : "—";

//   /* --------- card markup --------- */
//   return (
//     <article
//       className="
//         w-full flex flex-col md:flex-row overflow-hidden rounded-3xl
//         shadow-md bg-white/70 backdrop-blur
//         hover:shadow-xl hover:translate-y-[-2px] transition
//       "
//     >
//       {/* image section */}
//       <div className="md:w-80 shrink-0">
//         <img
//           src={imageUrl}
//           alt={hotel.name}
//           className="h-48 md:h-full w-full object-cover object-center"
//         />
//       </div>

//       {/* text section */}
//       <div className="flex flex-col gap-3 p-6 flex-1">
//         {/* TITLE */}
//         <h3 className="text-xl font-semibold">{hotel.name}</h3>

//         {/* ratings row */}
//         <div className="flex flex-wrap items-center gap-4 text-sm">
//           <span>⭐ {overallRating} / 5</span>
//           <span>📍 {locationRating} / 5</span>
//           {hotel.type && (
//             <span className="ml-auto italic text-gray-600">{hotel.type}</span>
//           )}
//         </div>

//         {/* timing row */}
//         <p className="text-sm text-gray-600">
//           ⏰ Check‑in <strong>{hotel.check_in_time || "--"}</strong> | Check‑out{" "}
//           <strong>{hotel.check_out_time || "--"}</strong>
//         </p>

//         {/* prices row */}
//         <p className="text-sm">
//           💰 <strong>{nightPrice}</strong> / night &nbsp;|&nbsp; From{" "}
//           <strong>{totalStay}</strong> total
//         </p>

//         {/* amenities chips */}
//         <div className="flex flex-wrap gap-2">
//           {(hotel.amenities || []).slice(0, 5).map((tag, i) => (
//             <span
//               key={i}
//               className="rounded-full bg-blue-100 text-blue-700 px-2 py-0.5 text-xs"
//             >
//               {tag}
//             </span>
//           ))}
//           {hotel.amenities && hotel.amenities.length > 5 && (
//             <span className="text-xs text-gray-500">
//               +{hotel.amenities.length - 5}
//             </span>
//           )}
//         </div>

//         {/* reviews + CTA */}
//         <div className="mt-auto flex items-center justify-between">
//           <p className="text-xs text-gray-600">
//             🗨️ {hotel.reviews || 0} reviews
//           </p>

//           <a
//             href={hotel.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
//           >
//             View deal
//           </a>
//         </div>
//       </div>
//     </article>
//   );
// }
// export default HotelCard;

function HotelCard({ hotel }) {
  const imageUrl =
    hotel?.images?.[0]?.thumbnail ||
    hotel?.images?.[0]?.original_image ||
    "https://via.placeholder.com/600x400?text=No+Image";

  const nightPrice = hotel?.rate_per_night?.lowest || "N/A";
  const totalStay = hotel?.total_rate?.lowest || "—";
  const overallRating = hotel?.overall_rating || "—";
  const location = hotel?.location || "Location not available";
  const reviews = hotel?.reviews || 0;

  return (
    <div className="flex flex-col md:flex-row border border-gray-200 rounded-md shadow-sm overflow-hidden bg-white hover:shadow-md transition">
      {/* Left image & thumbnails */}
      <div className="md:w-[250px] relative">
        <img
          src={imageUrl}
          alt={hotel.name}
          className="w-full h-full object-cover"
        />
  
       <div className="absolute bottom-2 left-2 flex gap-1">
  {(hotel?.images || [])
    .slice(1, 4)
    .map((img, i) => (
      <img
        key={i}
        src={img.thumbnail || img.original_image}
        alt="thumb"
        className="w-10 h-10 rounded object-cover border border-white"
      />
    ))}

</div>

      </div>

      {/* Middle Details Section */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold text-gray-900">{hotel.name}</h2>
          <p className="text-blue-600 text-sm font-medium">
            {location}
            <span className="text-gray-500"> | 2 minutes walk to Medanta Hospital</span>
          </p>
          <span className="inline-block text-xs border px-2 py-0.5 rounded text-gray-700 border-gray-400 mt-1">
            Couple Friendly
          </span>
        </div>

        <div className="mt-3 space-y-1 text-sm text-gray-800">
          <p className="flex items-center gap-1">
            ✅ <span>Free Cancellation</span>
          </p>
          <p className="flex items-center gap-1">
            💳 <span>Book with ₹0 Payment</span>
          </p>
          <p className="flex items-center gap-1">
            🍸 <span>Enjoy Happy Hours with 1+1 offer</span>
          </p>
        </div>

        <p className="text-sm mt-3 text-purple-800 font-medium">
          📍 Prime location in {location}, rooftop swimming pool, delicious breakfast buffet options
        </p>

        <p className="text-xs text-gray-500 mt-1">
          This 5 Star Hotel in Indore is located in {location}. Full Address…{" "}
          <a href={hotel.link} target="_blank" className="text-blue-600 underline">
            View More
          </a>
        </p>
      </div>

      {/* Right Rating + Price Section */}
      <div className="md:w-[180px] bg-white p-4 flex flex-col justify-between items-end border-l">
        <div className="text-right space-y-1">
          <p className="text-sm text-blue-800 font-semibold">Very Good</p>
          <div className="bg-blue-600 text-white text-sm px-2 rounded inline-block">
            {overallRating}
          </div>
          <p className="text-xs text-gray-500">({reviews} Ratings)</p>
        </div>

        <div className="text-right mt-6">
          <p className="text-xl font-bold text-gray-900">₹{nightPrice}</p>
          <p className="text-xs text-gray-600">+ ₹840 taxes & fees</p>
          <p className="text-sm mt-2 text-blue-700 font-medium cursor-pointer">
            Login to Book Now & Pay Later!
          </p>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
