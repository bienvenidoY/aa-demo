import React, { useState, useEffect } from 'react';
import HomePage from '@/pages/home';
import HistoryPage from '@/pages/history';
import Layout from '@/layout/Layout';

function App() {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    // 监听 URL 变化
    useEffect(() => {
        const handlePopState = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);



    return (
        <div>
            <Layout setCurrentPath={setCurrentPath}>
                {currentPath === '/' && <HomePage />}
                {currentPath === '/history' && <HistoryPage />}
            </Layout>
        </div>
    );
}

export default App;