import React from 'react';

const Facts = () => {
    return (
        <section className="bg-gradient-to-r from-purple-600 to-violet-600 py-16 px-4 sm:px-6 -mt-20 relative z-10">
            <div className="mx-auto max-w-7xl">
                {/* Main Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Trusted By Millions, Built For You
                    </h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {/* Total Downloads */}
                    <div className="text-center">
                        <div className="mb-4">
                            <p className="text-white/80 text-lg font-medium mb-2">
                                Total Downloads
                            </p>
                            <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
                                29.6M
                            </p>
                            <p className="text-white/70 text-sm">
                                21% More Than Last Month
                            </p>
                        </div>
                    </div>

                    {/* Total Reviews */}
                    <div className="text-center">
                        <div className="mb-4">
                            <p className="text-white/80 text-lg font-medium mb-2">
                                Total Reviews
                            </p>
                            <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
                                906K
                            </p>
                            <p className="text-white/70 text-sm">
                                46% More Than Last Month
                            </p>
                        </div>
                    </div>

                    {/* Active Apps */}
                    <div className="text-center">
                        <div className="mb-4">
                            <p className="text-white/80 text-lg font-medium mb-2">
                                Active Apps
                            </p>
                            <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
                                132+
                            </p>
                            <p className="text-white/70 text-sm">
                                31 More Will Launch
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Facts;