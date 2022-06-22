import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/d1275bb88a17a7343aba3080c8723522~c5_300x300.webp?x-expires=1656061200&x-signature=yiIvLXTQbG9RiE5SPFFGrPOJCBQ%3D" alt="" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>immeechu</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>Emmy Dang</span>
            </div>
        </div>
     );
}

export default AccountItem;