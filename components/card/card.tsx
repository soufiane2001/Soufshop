import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const Card = () => {
    return (
        <div className="max-w-sm mt-5 rounded overflow-hidden shadow-lg">
        <img className="w-full" src="https://res-console.cloudinary.com/dzkx1z6lo/media_explorer_thumbnails/f910f554cca0d0c88452b11b83239d70/detailed" alt="Card image"/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Ecouteurs Akg</div>
          <p className="text-gray-700 text-base">
         200.00 DH
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#tag3</span>
        </div>
      </div>
      
    );
  };
  
  export default Card;