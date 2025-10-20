import { Link } from 'react-router';
import errorImage from '../assets/error-404.png';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="max-w-lg w-full text-center">
                {/* Error Image */}
                <div className="mb-8">
                    <img 
                        src={errorImage} 
                        alt="404 Error"
                        className="w-80 h-80 mx-auto object-contain"
                    />
                </div>
                
                {/* Error Message */}
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Oops, page not found!
                </h1>
                
                <p className="text-gray-600 mb-8">
                    The page you are looking for is not available.
                </p>
                
                {/* Go Back Button */}
                <Link 
                    to="/"
                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                    Go Back!
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;