import React from "react";
import classnames from 'classnames';

import s from './index.module.scss';
import logo from 'assets/images/ender-logo-white.svg';

const styles = classnames.bind(s);

const Header = () => {
    return (
        <div className={styles(s.header)}>
            <img alt="ender-logo" className={styles(s['ender-logo'])} src={logo} />
        </div>
    ); 
}

export default Header;
