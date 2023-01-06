import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avt')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/115cca71265c94522079ac7e93a0274b.jpeg?x-expires=1673064000&x-signature=l%2F7ndVjtYITpKfY2Qd4uHBLWMqg%3D"
                alt="mtp"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span> M-TP</span>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}> mtp</span>
            </div>
        </div>
    );
}

export default AccountItem;
