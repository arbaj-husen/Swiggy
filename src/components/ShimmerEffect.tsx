interface ShimmerProps {
  className?: string;
}

function Shimmer({ className = "" }: ShimmerProps) {
  return (
    <div className={`shimmer rounded-md ${className}`} />
  );
}

function RestaurantShimmer() {
  return (
    <div className="min-w-0">
      {/* Restaurant image */}
      <Shimmer className="w-full aspect-[4/3] rounded-2xl" />

      {/* Restaurant name */}
      <Shimmer className="w-3/4 h-5 mt-2" />

      {/* Rating and delivery time */}
      <div className="flex gap-3 mt-2">
        <Shimmer className="w-10 h-4" />
        <Shimmer className="w-20 h-4" />
      </div>

      {/* Cuisines */}
      <div className="mt-3 space-y-2">
        <Shimmer className="w-full h-4" />
        <Shimmer className="w-2/3 h-4" />
      </div>
    </div>
  );
}

function FoodShimmer() {
  return (
    <div className="flex gap-8 overflow-hidden">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-3 shrink-0"
        >
          <Shimmer className="w-20 h-20 rounded-full" />
          <Shimmer className="w-20 h-4" />
        </div>
      ))}
    </div>
  );
}

function HomeShimmer() {
  return (
    <div className="max-w-[1200px] mx-auto px-4">

      {/* Food categories */}
      <section className="py-6">
        <Shimmer className="w-64 h-7 mb-10" />

        <FoodShimmer />
      </section>

      <div className="border-t border-gray-300 my-8" />

      {/* Restaurant section */}
      <section className="py-6">
        <Shimmer className="w-80 h-7 mb-7" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <RestaurantShimmer key={index} />
          ))}
        </div>
      </section>

      <div className="border-t border-gray-300 my-8" />

    </div>
  );
}

export default HomeShimmer;