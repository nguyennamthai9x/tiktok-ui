import classNames from 'classnames/bind';

import HeadlessTippy from '@tippyjs/react/headless';
import {
    faCircleXmark,
    faSpinner,
    // faMessage
} from '@fortawesome/free-solid-svg-icons';

import {Wrapper as PopperWrapper} from '~/components/Popper'; 
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';

import styles from './Search.module.scss';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Search() {

    const [searchValue, setSearchValue] = useState('')
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(true);

    const inputRef = useRef()

    useEffect(() =>{
        setTimeout(() => {
            setSearchResults([1,2,3])
        }, 0)
    }, [])

    const handleClear = () => {
        setSearchValue('');
        setSearchResults([]);
        inputRef.current.focus();
    }

    const handleHideResults = () => {
        setShowResults(false)
    }

    return (
        <HeadlessTippy
            interactive
            visible={showResults && searchResults.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResults}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue} 
                    placeholder="search accounts and videos" 
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResults(true)}
                />
                {!!searchValue && (
                    <button 
                        className={cx('search-clear')}
                        onClick={handleClear}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
