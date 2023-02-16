import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://yt3.ggpht.com/ytc/AL5GRJUy0qk-8iwmVKTg7ELvDkHXO0xZ9FKfcN3T0LtTjg=s88-c-k-c0x00ffffff-no-rj"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>hh02</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}> Uchiha I</p>
            </div>
        </div>
    );
}
AccountItem.prototype = {};

export default AccountItem;
