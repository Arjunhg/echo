import { motion } from 'framer-motion';

export default function Toggle({ enabled, onChange, label, description }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        {label && <h3 className="text-sm font-medium text-gray-900 dark:text-white">{label}</h3>}
        {description && <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>}
      </div>
      <button
        type="button"
        className={`${
          enabled ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-gray-700'
        } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        onClick={onChange}
      >
        <span className="sr-only">Toggle</span>
        <motion.span
          className="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow ring-0"
          animate={{ x: enabled ? 20 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </button>
    </div>
  );
}
