import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './DeafultLayout.module.scss';
import Sidebar from './Sidebar';
import Header from '~/layouts/components/Header/Header.js';

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
DeafultLayout.prototype = {
    children: PropTypes.node.isRequired,
};

export default DeafultLayout;
