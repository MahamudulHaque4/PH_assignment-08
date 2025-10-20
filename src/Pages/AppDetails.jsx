import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LazyImage from '../Component/LazyImage';

const AppDetails = () => {
    const app = useLoaderData();
    const navigate = useNavigate();
    const [isInstalled, setIsInstalled] = useState(false);

    // Check if app is already installed when component mounts
    useEffect(() => {
        const installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
        const appInstalled = installedApps.find(installedApp => installedApp.id === app.id);
        setIsInstalled(!!appInstalled);
    }, [app.id]);

    const handleInstall = () => {
        if (isInstalled) return; // Prevent installation if already installed

        toast.success(`${app.title} installed successfully!`, {
            position: "top-right",
            autoClose: 3000,
        });
        
        // Add to localStorage for installation page
        const installedApps = JSON.parse(localStorage.getItem('installedApps') || '[]');
        const isAlreadyInstalled = installedApps.find(installedApp => installedApp.id === app.id);
        
        if (!isAlreadyInstalled) {
            installedApps.push({
                id: app.id,
                title: app.title,
                image: app.image,
                companyName: app.companyName,
                installedAt: new Date().toISOString()
            });
            localStorage.setItem('installedApps', JSON.stringify(installedApps));
            setIsInstalled(true); // Update state to show installed
        }
    };

    const formatNumber = (num) => {
        if (num >= 1000000) return (num / 1000000).toFixed(0) + 'M';
        if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
        return num.toString();
    };

    // Calculate total rating count for percentage
    const totalRatings = app.ratings?.reduce((sum, rating) => sum + rating.count, 0) || 0;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
            <div className="mb-4">
                <button
                    onClick={() => (window.history.length > 1 ? navigate(-1) : navigate('/products'))}
                    aria-label="Go back"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white border text-sm shadow-sm transform transition-all duration-150 hover:-translate-x-1 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                    <span aria-hidden className="text-lg">←</span>
                    <span className="font-medium">Back</span>
                </button>
            </div>
            {/* Main Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                    {/* App Icon */}
                    <div className="flex-shrink-0">
                        <LazyImage
                            src={app.image}
                            alt={app.title}
                            className="w-32 h-32 rounded-2xl"
                        />
                    </div>

                    {/* App Info */}
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold text-gray-900 mb-1">{app.title}</h1>
                        <p className="text-gray-600 mb-4">
                            Developed by <span className="text-purple-600 font-medium">{app.companyName}</span>
                        </p>
                        
                        {/* Stats Row */}
                        <div className="flex items-center gap-8 mb-6">
                            <div className="text-center">
                                <div className="text-green-600 mb-1">
                                    <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="text-2xl font-bold text-gray-900">{formatNumber(app.downloads)}</div>
                                <p className="text-sm text-gray-500">Downloads</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="text-orange-500 mb-1">
                                    <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                                <div className="text-2xl font-bold text-gray-900">{app.ratingAvg}</div>
                                <p className="text-sm text-gray-500">Average Ratings</p>
                            </div>
                            
                            <div className="text-center">
                                <div className="text-purple-600 mb-1">
                                    <svg className="w-6 h-6 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="text-2xl font-bold text-gray-900">{formatNumber(app.reviews)}</div>
                                <p className="text-sm text-gray-500">Total Reviews</p>
                            </div>
                        </div>

                        {/* Install Button */}
                        <button 
                            onClick={handleInstall}
                            disabled={isInstalled}
                            className={`font-semibold py-3 px-6 rounded-lg transition-colors ${
                                isInstalled 
                                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                                    : 'bg-green-500 hover:bg-green-600 text-white'
                            }`}
                        >
                            {isInstalled ? (
                                <>
                                    <span className="mr-2">✓</span>
                                    Installed
                                </>
                            ) : (
                                `Install Now (${app.size} MB)`
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Ratings Chart */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Ratings</h3>
                <div className="space-y-3">
                    {(() => {
                        // create a sorted copy so we render highest stars first (e.g., "5 star" before "1 star")
                        const sortedRatings = (app.ratings || []).slice().sort((a, b) => {
                            // extract leading number from name like '5 star'
                            const na = parseInt(a.name, 10) || 0;
                            const nb = parseInt(b.name, 10) || 0;
                            return nb - na; // descending
                        });

                        return sortedRatings.map((rating, index) => {
                            const percentage = totalRatings > 0 ? (rating.count / totalRatings) * 100 : 0;
                            return (
                                <div key={index} className="flex items-center gap-4">
                                    <span className="text-sm font-medium text-gray-600 w-12">{rating.name}</span>
                                    <div className="flex-1 bg-gray-200 rounded-full h-4">
                                        <div 
                                            className="bg-orange-500 h-4 rounded-full transition-all duration-300"
                                            style={{ width: `${percentage}%` }}
                                        ></div>
                                    </div>
                                    <span className="text-sm text-gray-500 w-16 text-right">{rating.count}</span>
                                </div>
                            );
                        });
                    })()}
                </div>
                
                {/* X-axis numbers */}
                <div className="flex justify-between text-xs text-gray-400 mt-2 px-16">
                    <span>0</span>
                    <span>3000</span>
                    <span>6000</span>
                    <span>9000</span>
                    <span>12000</span>
                </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Description</h3>
                <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>{app.description}</p>
                    
                    <p>This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and receive detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.</p>
                    
                    <p>A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you've worked but also which tasks consumed the most energy. This allows you to identify patterns in your productivity and adjust your workflow accordingly. The app also includes optional background sounds, such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.</p>
                    
                    <p>For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you're studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.</p>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;