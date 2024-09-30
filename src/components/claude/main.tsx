import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  { id: 1, subtitle: "Animation", title: "Framer Motion" },
  { id: 2, subtitle: "Framework", title: "React" },
  { id: 3, subtitle: "Styling", title: "Tailwind CSS" },
];

export default function FramerMotionDemo() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Framer Motion Demo</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layoutId={item.id}
            onClick={() => setSelectedId(item.id)}
            className="p-4 bg-white rounded shadow cursor-pointer"
          >
            <motion.h5 className="text-sm text-gray-500">
              {item.subtitle}
            </motion.h5>
            <motion.h2 className="text-xl font-semibold">
              {item.title}
            </motion.h2>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          >
            <motion.div className="w-full max-w-sm p-8 bg-white rounded-lg">
              <motion.h5 className="text-sm text-gray-500">
                {items.find((item) => item.id === selectedId)?.subtitle}
              </motion.h5>
              <motion.h2 className="mb-4 text-2xl font-semibold">
                {items.find((item) => item.id === selectedId)?.title}
              </motion.h2>
              <motion.p className="mb-4">
                This is an expanded view of the selected item. Click the button
                below to close.
              </motion.p>
              <motion.button
                onClick={() => setSelectedId(null)}
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
