import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';

import images from '~/assets/images';
import {faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import {Wrapper as PopperWrapper} from '~/components/Popper'; 
import AccountItem from '~/components/AccountItem';
const cx = classNames.bind(styles);

function Header() {
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() =>{
        setTimeout(() => {
            setSearchResults([1,2,3])
        }, 0)
    })

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="TikTok"/>

                <Tippy
                    interactive
                    visible={searchResults.length > 0}
                    render={attrs => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>
                                        Accounts
                                    </h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder='search accounts and videos'/>
                        <button className={cx('search-clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                    </div>
                </Tippy>

                <div className={cx('actions')}>
        
                </div>
            </div>
        </header>
    );
}

export default Header;