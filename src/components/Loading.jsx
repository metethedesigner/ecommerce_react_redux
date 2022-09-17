export const Loading = ({status, error, children}) => {
    return (
        <>
            {status ? (
                <p>Loading...</p>
            ) : error ? (
                <p>An error has occurred.</p>
            ) : (
                children
            )}
        </>
    );
};