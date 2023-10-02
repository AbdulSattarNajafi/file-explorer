import FileItem from './file-item';

const FileExplorer = ({ data }) => {
    return (
        <div>
            <strong>File Explorer</strong>
            {data.children && data.children.length > 0 ? (
                data.children.map((child, index) => <FileItem key={index} item={child} />)
            ) : (
                <span>No files or folders available.</span>
            )}
        </div>
    );
};

export default FileExplorer;
