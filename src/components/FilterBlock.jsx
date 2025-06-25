export default function FilterBlock({ onFilterChange }) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <select
        onChange={(e) => onFilterChange("category", e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">All Categories</option>
        <option value="Singer">Singer</option>
        <option value="Dancer">Dancer</option>
        <option value="DJ">DJ</option>
        <option value="Speaker">Speaker</option>
      </select>
      <select
        onChange={(e) => onFilterChange("location", e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">All Locations</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Bangalore">Bangalore</option>
      </select>
    </div>
  );
}
