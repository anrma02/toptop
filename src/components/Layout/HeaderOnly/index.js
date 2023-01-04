import Header from '~/components/Layout/components/Header/index.js';

function DeafultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DeafultLayout;
