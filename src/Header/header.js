import React from 'react';
import f from './header.module.css';
import { TopMenu } from './menu/menu';

export let Header = () => {
    return (
        <div className={f.Header}>
            <div className={f.preheader}></div>
            <div className={f.formenu}>
                <div className={f.logo}></div>
                <TopMenu></TopMenu>
            </div>
            <div className={f.afterheader}></div>

        </div>
    )
}