import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { 
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard, 
    faGear,
    faCoins,
    faUser,
    faSignOut,
    // faMessage
} from '@fortawesome/free-solid-svg-icons';
import { Fragment } from 'react';
import routesConfig from '~/config/routes'

import Button from '~/components/Button';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { MailBox, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

import styles from './Header.module.scss';

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
                <Link to={routesConfig.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="TikTok"/>
                </Link>

                {/* Search */}
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 200]}
                                content="Upload video"
                                placement='bottom'
                            >
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                    <MessageIcon />
                                    <MailBox />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    
                    ):(
                        <>
                            <Button text>Upload</Button>
                            <Button primary >Log in</Button>
                        </>
                    )}

                    <Menu items={userMenu} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image 
                                className={cx('user-avatar')} 
                                src="https://photo-cms-baophapluat.zadn.vn/w800/Uploaded/2022/bpivpvoi/2021_04_02/midu1617247581731178916561_died.jpg"
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