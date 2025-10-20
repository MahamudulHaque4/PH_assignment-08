import logo from '../assets/logo.png';

const Loading = () => {
    return (
        <div className="fixed inset-0 bg-white bg-opacity-95 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="flex items-center justify-center">
                {/* Loading Text with Spinning Logo */}
                <div className="flex items-center text-2xl font-bold text-gray-700 tracking-wider">
                    <span>L</span>
                    <img
                        src={logo}
                        alt="Loading logo"
                        className="h-6 w-6 mx-1 animate-spin"
                        style={{ animation: 'spin 1s linear infinite' }}
                    />
                    <span>ading</span>
                </div>
            </div>
        </div>
    );
};

export default Loading;