import { Link } from 'react-router-dom';
import LazyImage from './LazyImage';
import downloadIcon from '../assets/icon-downloads.png';
import ratingIcon from '../assets/icon-ratings.png';

const ProductCards = ({product}) => {
 const {image, title, downloads, ratingAvg, id, description} = product;
 
 const formatDownloads = (num) => {
    if (num >= 1000000) return Math.floor(num/1000000) + 'M';
    if (num >= 1000) return Math.floor(num/1000) + 'K';
    return num.toString();
 };
    
    return (
    <Link to={`/app/${id}`} className="block group">
        <div className="card bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden transform transition-all duration-200 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl focus-visible:-translate-y-2 focus-visible:scale-105 focus-visible:shadow-2xl active:translate-y-0">
            <figure className="px-6 pt-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-200 pointer-events-none"></div>
                <div className="overflow-hidden rounded-xl h-48">
                    <div className="transform transition-transform duration-300 group-hover:scale-105">
                        <LazyImage
                            src={image}
                            alt={title}
                            className="w-full h-48 object-cover"
                        />
                    </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="bg-white/90 text-sm px-3 py-1 rounded-md shadow">View</span>
                </div>
            </figure>
            <div className="card-body px-6 pb-6">
                <h2 className="card-title text-lg font-semibold text-gray-900 mb-2">{title}</h2>
                <p className="text-gray-600 text-sm mb-4">{description ? (description.length > 120 ? description.slice(0,120) + '...' : description) : 'A useful productivity tool that helps you manage tasks and time.'}</p>
                
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