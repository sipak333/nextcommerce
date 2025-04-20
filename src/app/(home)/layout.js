import { Navbar } from "./navbar";
import { Footer } from "./footer";

const Layout = ({children}) => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                    <div className="flex-1">
                    {children}
                    </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout;