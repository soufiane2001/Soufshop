import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const Card = () => {
    return (
        <div className="max-w-sm mt-5 rounded overflow-hidden shadow-lg">
        <img className="w-full" src="https://res-console.cloudinary.com/dzkx1z6lo/media_explorer_thumbnails/f910f554cca0d0c88452b11b83239d70/detailed" alt="Card image"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Ecouteurs Akg</div>
          <p className="text-gray-700 text-xl">
         200.00 DH
          </p>
        </div>
        <div className="px-6 pt-2 pb-2">
        
        <button type="button" className=" bg-slate-800 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400">
        <FaShoppingCart />
  Add to Cart
</button>
        </div>
      </div>
      
    );
  };
  
  export default Card;