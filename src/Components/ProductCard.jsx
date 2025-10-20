import { Link } from 'react-router';
import downloadIcon from '../assets/icon-downloads.png';
import ratingIcon from '../assets/icon-ratings.png';

const ProductCards = ({product}) => {
 const {image, title, downloads, ratingAvg, id} = product;
 
 const formatDownloads = (num) => {
    if (num >= 1000000) return Math.floor(num/1000000) + 'M';
    if (num >= 1000) return Math.floor(num/1000) + 'K';
    return num.toString();
 };
    
    return (
    <Link to={`/app/${id}`} className="block">
        <div className="card bg-white shadow-sm border border-gray-200 hover:shadow-lg transition-shadow rounded-xl overflow-hidden">
            <figure className="px-6 pt-6">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover rounded-xl"
                />
            </figure>
            <div className="card-body px-6 pb-6">
                <h2 className="card-title text-lg font-semibold text-gray-900 mb-2">{title}</h2>
                <p className="text-gray-600 text-sm mb-4">A productivity app designed to help you focus and manage your time effectively</p>
                
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img 
                            src={downloadIcon} 
                            alt="Downloads" 
                            className="w-4 h-4"
                        />
                        <span className="text-teal-500 font-medium text-sm">
                            {formatDownloads(downloads)}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <img 
                            src={ratingIcon} 
                            alt="Rating" 
                            className="w-4 h-4"
                        />
                        <span className="text-purple-500 font-medium text-sm">{ratingAvg}</span>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default ProductCards;