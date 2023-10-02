import React, { useEffect } from 'react';

import './App.css';
import FileExplorer from './components/file-explorer';

const jsonData = {
    name: 'root',
    type: 'folder',
    children: [
        {
            name: 'Documents',
            type: 'folder',
            children: [
                { name: 'file1.txt', type: 'file' },
                { name: 'file2.txt', type: 'file' },
            ],
        },
        {
            name: 'Pictures',
            type: 'folder',
            children: [
                { name: 'pic1.jpg', type: 'file' },
                { name: 'pic2.jpg', type: 'file' },
            ],
        },
    ],
};

function App() {
    const fetchData = async () => {
        try {
            const response = await fetch(
                'https://app.prepanywhere.com/api/stu/static_books/all_books'
            );
            const jsonData = await response.json();
            console.log('Data:', jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='App'>
            <FileExplorer data={jsonData} />
        </div>
    );
}

export default App;
