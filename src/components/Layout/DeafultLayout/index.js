import classNames from 'classnames/bind';
import styles from './DeafultLayout.module.scss';
import Sidebar from './Sidebar';
import Header from '~/components/Layout/components/Header/index.js';

const cx = classNames.bind(styles);
function DeafultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DeafultLayout;
