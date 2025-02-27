const Card = ({ name, price, image, onAddToCart, onBuyNow }) => {
  return (
    <div className="">
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-200 w-60">
      <div className="w-full h-60 flex justify-center items-center">
        <img 
          src={image} 
          alt={name} 
          className="object-contain h-full w-full p-4 bg-gray-100"
        />
      </div>
      <div className=" text-center">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-lg text-green-600 font-bold mt-2">${price}</p>
        <div className="flex gap-3 mt-4 pb-4 px-4">
          <button
            onClick={onAddToCart}
            className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
          >
            Add to Cart
          </button>
          <button
            onClick={onBuyNow}
            className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-all focus:outline-none focus:ring-2 focus:ring-green-400 shadow-md"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
