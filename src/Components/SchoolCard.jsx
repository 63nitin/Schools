const SchoolCard = ({ school }) => {
  const imageUrl = `http://localhost:5000/uploads/${school.image}`; // Adjust the path based on your backend setup
  console.log(school);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full h-1/2 " src={imageUrl} alt={school.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{school.name}</div>
        <p className="text-gray-700 text-base">{school.address || 'Address not specified'}</p>
        <p className="text-gray-700 text-base">{school.city || 'City not specified'}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default SchoolCard;
