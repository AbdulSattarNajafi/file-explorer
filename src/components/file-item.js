import React, { useState } from 'react';

const FileItem = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div style={{ marginLeft: '20px' }}>
            <div onClick={handleToggle} style={{ cursor: 'pointer' }}>
                {item.type === 'folder' ? <strong>{item.name}</strong> : <span>{item.name}</span>}
                {item.type === 'folder' && <span>{isExpanded ? ' [-]' : ' [+]'}</span>}
            </div>
            {isExpanded && item.children && (
                <div style={{ marginLeft: '20px' }}>
                    {item.children.map((child, index) => (
                        <FileItem key={index} item={child} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default FileItem;
