import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AcountItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://yt3.ggpht.com/ytc/AL5GRJUy0qk-8iwmVKTg7ELvDkHXO0xZ9FKfcN3T0LtTjg=s88-c-k-c0x00ffffff-no-rj "
                    alt=""
                />
                <Button className={cx('follow-btn')} primary> Following</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>hh02</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}> Uchiha I</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AcountItem;
