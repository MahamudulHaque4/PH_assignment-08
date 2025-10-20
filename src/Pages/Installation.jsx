import { useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [sortBy, setSortBy] = useState("size");

    useEffect(() => {
        const apps = JSON.parse(localStorage.getItem('installedApps') || '[]');
        setInstalledApps(apps);
    }, []);

    // Sort installed apps
    const sortedInstalledApps = useMemo(() => {
        switch (sortBy) {
            case "name":
                return [...installedApps].sort((a, b) => a.title.localeCompare(b.title));
            case "date":
                return [...installedApps].sort((a, b) => new Date(b.installedAt) - new Date(a.installedAt));
            case "size":
            default:
                return [...installedApps].sort((a, b) => (b.size || 45) - (a.size || 45));
        }
    }, [installedApps, sortBy]);

    const sortOptions = [
        { value: "size", label: "Sort By Size" },
        { value: "name", label: "Sort By Name" },
        { value: "date", label: "Sort By Date" }
    ];

    const currentSortLabel = sortOptions.find(option => option.value === sortBy)?.label || "Sort By Size";

    const removeApp = (appId) => {
        const updatedApps = installedApps.filter(app => app.id !== appId);
        setInstalledApps(updatedApps);
        localStorage.setItem('installedApps', JSON.stringify(updatedApps));
        // Show a toast notification to confirm uninstall
        toast.info('App uninstalled successfully', { position: 'top-right', autoClose: 2500 });
    };

    return (
        <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Installed Apps</h1>
                <p className="text-gray-600">Explore All Trending Apps on the Market developed by us</p>
            </div>

            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                    {sortedInstalledApps.length} Apps Found
                </h2>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-outline btn-sm">
                        {currentSortLabel}
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        {sortOptions.map((option) => (
                            <li key={option.value}>
                                <a 
                                    onClick={() => setSortBy(option.value)}
                                    className={sortBy === option.value ? "active" : ""}
                                >
                                    {option.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {sortedInstalledApps.length === 0 ? (
                <div className="text-center text-gray-500 py-16">
                    <div className="text-6xl mb-4">📱</div>
                    <p className="text-xl mb-2">No apps installed yet</p>
                    <p>Browse our apps and install your favorites!</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {sortedInstalledApps.map((app) => (
                        <div key={app.id} className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-shadow">
                            {/* App Icon */}
                            <div className="flex items-center space-x-4">
                                <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0">
                                    <img 
                                        src={app.image} 
                                        alt={app.title}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                
                                {/* App Info */}
                                <div>
                                    <h3 className="font-semibold text-gray-900 text-lg">{app.title}</h3>
                                    <div className="flex items-center space-x-4 mt-1">
                                        <div className="flex items-center text-green-600">
                                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm font-medium">9M</span>
                                        </div>
                                        
                                        <div className="flex items-center text-orange-500">
                                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span className="text-sm font-medium">5</span>
                                        </div>
                                        
                                        <span className="text-sm text-gray-500">258 MB</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Uninstall Button */}
                            <button 
                                onClick={() => removeApp(app.id)}
                                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                            >
                                Uninstall
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Installation;