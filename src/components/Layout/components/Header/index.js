import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Tippy from '@tippyjs/react';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { faCircleXmark, faMagnifyingGlass, faSign, faSignIn, faSpinner } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import { Wrapper as PopporWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/components/asset/images';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    });
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div classNames={cx('logo')}>
                    <img src={images.logo}></img>
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopporWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopporWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search account and videos" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('acctions')}>
                    <Button btnText>Upload</Button>
                    <Button primary>Login</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
