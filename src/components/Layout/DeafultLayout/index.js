import Sidebar from './Sidebar';
import Header from './header.js';

function DeafultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DeafultLayout;
