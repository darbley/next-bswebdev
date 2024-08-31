import { useEffect, useState } from 'react';

// SET DEFAULT LANG true aka mobile.
export const defaultView: boolean = true;

const useIsMobileView = () => {
    const maxWidth = 768;
    const [view, setView] = useState(defaultView);

    const viewWidth = () => {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    };

    // const handleResize = () => {
    //     setView(viewWidth() < maxWidth);
    // }

    useEffect(() => {
        const handleResize = () => {
            setView(viewWidth() < maxWidth);
        }
        // Add resize event listeners to setView
        // Cleanup the event listeners on unmount
        window.addEventListener('resize', handleResize);
        setView(viewWidth() < maxWidth);

        return () => {
            console.log('cleanUp useGetViewPort');
            window.removeEventListener('resize', handleResize);
        }
    },[]);

    

    return view;
}

export default useIsMobileView;