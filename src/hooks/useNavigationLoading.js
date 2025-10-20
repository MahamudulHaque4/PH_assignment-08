import { useEffect, useState } from 'react';
import { useNavigation } from 'react-router';

export const useNavigationLoading = () => {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (navigation.state === 'loading') {
            setIsLoading(true);
        } else {
            // Add a small delay to make the loading visible
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 300);
            
            return () => clearTimeout(timer);
        }
    }, [navigation.state]);

    return isLoading;
};