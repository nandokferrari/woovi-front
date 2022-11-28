import * as React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { PageCard } from './pages/PageCard';
import { PageOptions } from './pages/PageOptions';
import { PagePix } from './pages/PagePix';

export const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter basename={`woovi-front/`}>
            <ScrollToTop />
            <Routes>
                <Route index path="/" element={<PageOptions />} />
                <Route path="/pix/:uuidTransaction" element={<PagePix />} />
                <Route path="/card/:uuidTransaction" element={<PageCard />} />
            </Routes>
        </BrowserRouter>
    );
};

const ScrollToTop = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};
