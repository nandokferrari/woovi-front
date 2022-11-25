import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageCard } from './pages/PageCard';
import { PageOptions } from './pages/PageOptions';
import { PagePix } from './pages/PagePix';

export const AppRoutes: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route index path="/" element={<PageOptions />} />
            <Route path="/pix/:uuidTransaction" element={<PagePix />} />
            <Route path="/card/:uuidTransaction" element={<PageCard />} />
        </Routes>
    </BrowserRouter>
);
