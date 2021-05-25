import React from 'react';
import style from './Header.module.css';

let Header = (props) => {
    return (
        <div id={style.headerContainer}>
            <div id={style.headerContent}>Демонстрационные компоненты работающие с датчиками мобильного устройства</div>
        </div>
    )
}

export default Header;
