export const Footer = () => {
    const year = new Date().getFullYear();
    return(
        <footer className="flex border-t justify-center p-6">
            <p className="font-medium">{year}  E-Commerce | All Rights Reserved</p>
        </footer>
    );
};

