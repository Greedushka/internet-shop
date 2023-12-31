import React from 'react';
import styles from '../../styles/Home.module.css'
import BG from '../../images/computer.png'

const Poster = () => {
    return (
        <section className={styles.home}>
            <div className={styles.title}>BIG SALE 50%</div>
            <div className={styles.product}>
                <div className={styles.text}>
                    <div className={styles.subtitle}>the best seller of 2023</div>
                    <h1 className={styles.head}>LENON r2d2 WITH NVIDIA 8090XT</h1>
                    <button className={styles.button}>Shop now</button>
                </div>
                <div className={styles.image}>
                    <img src={BG} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Poster;