import React, { useEffect, useRef, useState } from 'react';

// Helper to format numbers compactly (e.g., 29600000 -> 29.6M)
const formatCompact = (num) => {
    if (num >= 1_000_000) {
        const v = num / 1_000_000;
        return v >= 10 ? Math.round(v) + 'M' : v.toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1_000) {
        const v = num / 1_000;
        return v >= 10 ? Math.round(v) + 'K' : v.toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return String(num);
};

const easeOutQuad = (t) => 1 - (1 - t) * (1 - t);

const useAnimatedCounter = (target, { duration = 1400, step = 1, liveIncrement = 0 } = {}) => {
    const [value, setValue] = useState(0);
    const rafRef = useRef(null);
    const startRef = useRef(null);

    const start = (from = 0) => {
        cancelAnimationFrame(rafRef.current);
        startRef.current = performance.now();
        const tick = (now) => {
            const elapsed = now - startRef.current;
            const t = Math.min(1, elapsed / duration);
            const eased = easeOutQuad(t);
            const current = Math.round(from + (target - from) * eased);
            setValue(current);
            if (t < 1) rafRef.current = requestAnimationFrame(tick);
            else setValue(target);
        };
        rafRef.current = requestAnimationFrame(tick);
    };

    useEffect(() => {
        start(0);
        let liveTimer;
        if (liveIncrement > 0) {
            liveTimer = setInterval(() => {
                setValue((v) => v + Math.max(1, Math.round(liveIncrement * (0.5 + Math.random()))));
            }, 1000);
        }
        return () => {
            cancelAnimationFrame(rafRef.current);
            if (liveTimer) clearInterval(liveTimer);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [target]);

    return [value, start];
};

const Facts = () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    // Targets (integers)
    const downloadsTarget = 29_600_000; // 29.6M
    const reviewsTarget = 906_000; // 906K
    const appsTarget = 132; // 132

    const [downloads, startDownloads] = useAnimatedCounter(downloadsTarget, { duration: 1600, liveIncrement: 20 });
    const [reviews, startReviews] = useAnimatedCounter(reviewsTarget, { duration: 1600, liveIncrement: 2 });
    const [apps, startApps] = useAnimatedCounter(appsTarget, { duration: 1000, liveIncrement: 0 });

    useEffect(() => {
        if (!ref.current) return;
        const obs = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (!visible) {
                        setVisible(true);
                        startDownloads();
                        startReviews();
                        startApps();
                    }
                }
            });
        }, { threshold: 0.2 });
        obs.observe(ref.current);
        return () => obs.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref.current]);

    return (
        <section ref={ref} className="bg-gradient-to-r from-purple-600 to-violet-600 py-16 px-4 sm:px-6 -mt-20 relative z-10">
            <div className="mx-auto max-w-7xl">
                {/* Main Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Trusted By Millions, Built For You</h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {/* Total Downloads */}
                    <div className="text-center">
                        <div className="mb-4">
                            <p className="text-white/80 text-lg font-medium mb-2">Total Downloads</p>
                            <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2" aria-live="polite">
                                {formatCompact(downloads)}
                            </p>
                            <p className="text-white/70 text-sm">21% More Than Last Month</p>
                        </div>
                    </div>

                    {/* Total Reviews */}
                    <div className="text-center">
                        <div className="mb-4">
                            <p className="text-white/80 text-lg font-medium mb-2">Total Reviews</p>
                            <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2" aria-live="polite">
                                {formatCompact(reviews)}
                            </p>
                            <p className="text-white/70 text-sm">46% More Than Last Month</p>
                        </div>
                    </div>

                    {/* Active Apps */}
                    <div className="text-center">
                        <div className="mb-4">
                            <p className="text-white/80 text-lg font-medium mb-2">Active Apps</p>
                            <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2" aria-live="polite">
                                {apps >= 1000 ? formatCompact(apps) : `${apps}${apps < 1000 ? '' : '+'}`}
                            </p>
                            <p className="text-white/70 text-sm">31 More Will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Facts;