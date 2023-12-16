/* eslint-disable react/prop-types */
export default function Filter({ setFilter, filter }) {
  function handleInputFilterChange(e) {
    setFilter(e.target.value);
  }
  return (
    <div>
      filter shown with{" "}
      <input type="text" value={filter} onChange={handleInputFilterChange} />
    </div>
  );
}
