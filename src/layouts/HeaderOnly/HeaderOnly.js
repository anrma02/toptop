import Header from '~/layouts/components/Header/Header.js';

// eslint-disable-next-line no-unused-vars
function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default Header;
