import React from 'react';

 import style from './LoginUser.module.css'
import {imgLink} from "../../img/imgLink";


const LoginUser = () => {
    return (
        <div className={style.LoginUser}>
            <><img src={imgLink} alt={'img'}/></>
            <div className={style.name}>Lera</div>
        </div>

    );
};

export {LoginUser};