export default function Slider({ value, onChange, min = 0, max = 100, label, description, showValue = true }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        {label && <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>}
        {showValue && <span className="text-sm text-gray-500 dark:text-gray-400">{value}%</span>}
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className="mt-2 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
      {description && <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{description}</p>}
    </div>
  );
}
