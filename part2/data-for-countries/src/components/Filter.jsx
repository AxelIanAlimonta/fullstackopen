/* eslint-disable react/prop-types */

export default function Filter({filter,setFilter}) {
  

  function handleInputChange(e) {
    setFilter(e.target.value);
  }

  return (
    <div>
      <p>find countries</p>
      <input type="text" value={filter} onChange={handleInputChange} />
    </div>
  );
}
