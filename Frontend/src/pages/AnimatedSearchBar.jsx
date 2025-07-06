/* ------------------------------------------------------------------
   AnimatedSearchBar.jsx
   ------------------------------------------------------------------ */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedSearchBar() {
  // Local state for advanced filters
  const [showAdvanced, setShowAdvanced] = useState(false);

  /* ------------------- Animation Variants ------------------- */
  const barVariant = {
    hidden: { opacity: 0, y: -30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const fieldVariant = {
    rest: { scale: 1 },
    focus: { scale: 1.04, transition: { duration: 0.2 } }
  };

  const advVariant = {
    collapsed: { height: 0, opacity: 0, marginTop: 0 },
    open: {
      height: "auto",
      opacity: 1,
      marginTop: 20,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    /* ---------- Main Container ---------- */
    <motion.div
      variants={barVariant}
      initial="hidden"
      animate="show"
      className="w-full max-w-6xl mx-auto rounded-3xl bg-green-900/80 backdrop-blur-md p-6 md:p-8 shadow-xl text-white"
    >
      {/* ---------- Primary Row ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
        {/* LOCATION */}
        <motion.div
          variants={fieldVariant}
          whileFocus="focus"
          className="col-span-2"
        >
          <label className="block text-xs mb-2">Location</label>
          <input
            placeholder="Search hotels..."
            className="w-full p-3 rounded-lg bg-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </motion.div>

        {/* CHECK-IN */}
        <motion.div
          variants={fieldVariant}
          whileFocus="focus"
          className="col-span-1"
        >
          <label className="block text-xs mb-2">Check-in</label>
          <input
            type="date"
            className="w-full p-3 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </motion.div>

        {/* CHECK-OUT */}
        <motion.div
          variants={fieldVariant}
          whileFocus="focus"
          className="col-span-1"
        >
          <label className="block text-xs mb-2">Check-out</label>
          <input
            type="date"
            className="w-full p-3 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </motion.div>

        {/* GUESTS */}
        <motion.div
          variants={fieldVariant}
          whileFocus="focus"
          className="col-span-1"
        >
          <label className="block text-xs mb-2">Guests</label>
          <input
            type="number"
            min="1"
            defaultValue="2"
            className="w-full p-3 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </motion.div>

        {/* SEARCH BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="col-span-1 bg-blue-600 hover:bg-blue-700 p-3 rounded-xl flex items-center justify-center gap-2 font-semibold"
          onClick={(e) => {
            e.preventDefault();
            setShowAdvanced(!showAdvanced);
          }}
        >
          🔍 Search
        </motion.button>
      </div>

      {/* ---------- Advanced Filters Collapsible ---------- */}
      <AnimatePresence initial={false}>
        {showAdvanced && (
          <motion.div
            key="advanced"
            variants={advVariant}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {/* ADULTS */}
            <div>
              <label className="block text-xs mb-2">Adults</label>
              <input
                type="number"
                min="1"
                defaultValue="2"
                className="w-full p-3 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* CHILDREN */}
            <div>
              <label className="block text-xs mb-2">Children</label>
              <input
                type="number"
                min="0"
                defaultValue="0"
                className="w-full p-3 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* ROOM TYPE */}
            <div>
              <label className="block text-xs mb-2">Room type</label>
              <select className="w-full p-3 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Any</option>
                <option>Standard</option>
                <option>Deluxe</option>
                <option>Suite</option>
                <option>Family Room</option>
              </select>
            </div>

            {/* AMENITY */}
            <div>
              <label className="block text-xs mb-2">Amenity</label>
              <select className="w-full p-3 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Pool</option>
                <option>Spa</option>
                <option>Gym</option>
                <option>Free Breakfast</option>
                <option>Wi‑Fi</option>
              </select>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
