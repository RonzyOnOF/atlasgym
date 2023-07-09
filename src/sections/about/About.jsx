import styles from './About.module.css';
import zyzz from '../../images/zyzz.png';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

export const About = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView])

    return (
        <>
            <section className={styles.aboutContainer}>
                <motion.div className={styles.storyContainer} id='about' ref={ref}
                    variants={{
                        hidden: {opacity: 0, y: 75},
                        visible: {opacity: 1, y: 0},
                    }}
                    initial='hidden'
                    animate={controls}
                    transition={{duration: 0.5, delay: 0.35}}                
                >
                    <img src={zyzz} />
                    <div className={styles.text}>
                        <h2>About Us</h2>
                        <p>We strive for everyone to live their lives in the most enjoyable way possible, and without the gym, it is very hard to do that. A strong body leads to a strong body and spirit. Our time is short on this planet so make it a healthy one where you get to feel your best!</p>
                    </div>
                </motion.div>
            </section>
        </>
    )
}