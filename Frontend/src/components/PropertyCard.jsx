import { Link } from "react-router-dom"
import { MapPin, Star } from "lucide-react"

const PropertyCard = ({ listing }) => {
  const { id, title, location, price, images, rating, reviewCount, type } = listing

  return (
    <Link to={`/listing/${id}`} className="block">
      <div className="card overflow-hidden">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={images?.[0] || "/placeholder.svg?height=200&width=300"}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-xs font-medium">{type}</div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{title}</h3>
            {rating && (
              <div className="flex items-center space-x-1 ml-2">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600">
                  {rating} ({reviewCount})
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{location}</span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-xl font-bold text-gray-900">${price}</span>
              <span className="text-gray-600 text-sm"> / night</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PropertyCard
