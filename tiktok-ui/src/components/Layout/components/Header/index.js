import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';

import Button from '~/components/Button';
import images from '~/assets/images';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass, 
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard, 
    faCloudUpload,
    faGear,
    faCoins,
    faUser,
    faSignOut,
    // faMessage
} from '@fortawesome/free-solid-svg-icons';
import { Fragment, useEffect, useState } from 'react';
import {Wrapper as PopperWrapper} from '~/components/Popper'; 
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';


const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type:'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type:'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
]

function Header() {

    const currentUser = true;
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() =>{
        setTimeout(() => {
            setSearchResults([])
        }, 0)
    })

    const handleMenuChange = (menuItem) => {
        switch(menuItem.type) {
            case 'language':

                break;
            default:
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@Midu',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="TikTok"/>

                <HeadlessTippy
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
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 200]}
                                content="Upload video"
                                placement='bottom'
                            >
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                        </>
                    
                    ):(
                        <>
                            <Button text>Upload</Button>
                            <Button primary >Log in</Button>
                        </>
                    )}

                    <Menu
                        items={userMenu}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <img 
                                className={cx('user-avatar')} 
                                src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/2/20/1016092/Midu-04.jpeg"
                                alt="Midu"
                            />
                        ):(
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>

            </div>
        </header>
    );
}

export default Header;