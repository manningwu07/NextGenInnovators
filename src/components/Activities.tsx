import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import type { Activity } from "~/types/event";
import Image from "next/image";

interface props {
  title: string;
  activities: Activity[];
}

export default function Activities({title, activities}: props) {
    const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  return (
    <div className="container mx-auto px-4">
      <h2 className="mb-8 text-center text-3xl font-bold">{title}</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {activities.map((activity) => (
          <motion.div
            key={activities.indexOf(activity)}
            className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-md"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedActivity(activity)}
          >
            <div className="relative h-48 w-full">
              <Image
                src={activity.image}
                alt={activity.title}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-xl font-semibold">{activity.title}</h3>
              <p className="text-gray-600">
                {activity.description.substring(0, 100)}...
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedActivity && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedActivity(null)}
        >
          <motion.div
            className="max-w-2xl rounded-lg bg-white p-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-2xl font-bold pr-2">{selectedActivity.title}</h3>
              <button onClick={() => setSelectedActivity(null)}>
                <X size={24} />
              </button>
            </div>
            <div className="relative mb-4 h-64 w-full">
              <Image
                src={selectedActivity.image}
                alt={selectedActivity.title}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            <p>{selectedActivity.description}</p>
          </motion.div>
        </motion.div>
      )}

    </div>

    
  );
}
