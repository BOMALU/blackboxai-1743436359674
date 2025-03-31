import React, { useState } from 'react';

const RoomAllocationPage = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [filters, setFilters] = useState({
    roomType: '',
    minPrice: '',
    maxPrice: '',
    amenities: []
  });

  const rooms = [
    {
      id: 1,
      type: 'AC',
      capacity: 2,
      price: 12000,
      available: 5,
      amenities: ['WiFi', 'Attached Bathroom', 'Study Table']
    },
    {
      id: 2,
      type: 'Non-AC',
      capacity: 3,
      price: 8000,
      available: 3,
      amenities: ['WiFi', 'Common Bathroom']
    },
    {
      id: 3,
      type: 'AC',
      capacity: 1,
      price: 15000,
      available: 2,
      amenities: ['WiFi', 'Attached Bathroom', 'Study Table', 'Fridge']
    },
    {
      id: 4,
      type: 'Non-AC',
      capacity: 2,
      price: 9000,
      available: 4,
      amenities: ['WiFi', 'Common Bathroom', 'Study Table']
    }
  ];

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === 'amenities') {
      setFilters(prev => ({
        ...prev,
        amenities: checked 
          ? [...prev.amenities, value]
          : prev.amenities.filter(a => a !== value)
      }));
    } else {
      setFilters({
        ...filters,
        [name]: value
      });
    }
  };

  const filteredRooms = rooms.filter(room => {
    return (
      (filters.roomType === '' || room.type === filters.roomType) &&
      (filters.minPrice === '' || room.price >= parseInt(filters.minPrice)) &&
      (filters.maxPrice === '' || room.price <= parseInt(filters.maxPrice)) &&
      (filters.amenities.length === 0 || 
        filters.amenities.every(a => room.amenities.includes(a)))
    );
  });

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Room Allocation</h1>
      
      {/* Filters Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4">Filter Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Room Type</label>
            <select
              name="roomType"
              value={filters.roomType}
              onChange={handleFilterChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <option value="">All Types</option>
              <option value="AC">AC</option>
              <option value="Non-AC">Non-AC</option>
            </select>
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Min Price (₹)</label>
            <input
              type="number"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleFilterChange}
              placeholder="Min"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Max Price (₹)</label>
            <input
              type="number"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleFilterChange}
              placeholder="Max"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Amenities</label>
            <div className="space-y-2">
              {['WiFi', 'Attached Bathroom', 'Study Table', 'Fridge'].map(amenity => (
                <label key={amenity} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="amenities"
                    value={amenity}
                    checked={filters.amenities.includes(amenity)}
                    onChange={handleFilterChange}
                    className="rounded text-blue-600 focus:ring-blue-200"
                  />
                  <span>{amenity}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Rooms Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price (₹)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Available</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amenities</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredRooms.length > 0 ? (
              filteredRooms.map(room => (
                <tr key={room.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${room.type === 'AC' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                      {room.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{room.capacity} person</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹{room.price.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{room.available}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {room.amenities.map(a => (
                        <span key={a} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          {a}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => setSelectedRoom(room)}
                      className="text-blue-600 hover:text-blue-900 font-medium"
                    >
                      Select
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                  No rooms match your filters
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Room Selection Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h2 className="text-xl font-bold mb-4">Confirm Room Selection</h2>
            <p className="mb-2">You are selecting:</p>
            <ul className="mb-4 space-y-2">
              <li><strong>Type:</strong> {selectedRoom.type}</li>
              <li><strong>Capacity:</strong> {selectedRoom.capacity} person</li>
              <li><strong>Price:</strong> ₹{selectedRoom.price.toLocaleString()}</li>
              <li><strong>Amenities:</strong> {selectedRoom.amenities.join(', ')}</li>
            </ul>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setSelectedRoom(null)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert(`Room ${selectedRoom.id} selected successfully!`);
                  setSelectedRoom(null);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomAllocationPage;