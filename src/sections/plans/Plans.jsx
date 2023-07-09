import styles from './Plans.module.css';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

export const Plans = () => {

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
            <motion.article className={styles.plansSectionContainer} ref={ref}
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0},
                }}
                initial='hidden'
                animate={controls}
                transition={{duration: 0.8, delay: 0.35}}               
            >
                <div className={styles.header}>
                    <p>start today!</p>
                    <h2>Choose your price plan</h2>
                </div>
                <div className={styles.plansContainer} id='plans'>
                    <div className={styles.plan}>
                        <p id={styles.planName}>Poseidon</p>
                        <p id={styles.price}>$15<span id={styles.month}>/mo</span></p>
                        <br />
                        <div className={styles.list}>
                            <p>• Access to all gym equipment</p>
                            <p>• 5% Discount on all products</p>
                        </div>
                    </div>
                    <div className={styles.plan}>
                        <p id={styles.planName}>Zeus</p>
                        <p id={styles.price}>$45<span id={styles.month}>/mo</span></p>
                        <br />
                        <div className={styles.list}>
                            <p>• Free coaching lessons</p>
                            <p>• Diet Plans</p>
                            <p>• Access to all amenities</p>
                            <p>• 20% Discount on all products</p>
                        </div>
                    </div>
                    <div className={styles.plan}>
                        <p id={styles.planName}>Athena</p>
                        <p id={styles.price}>$25<span id={styles.month}>/mo</span></p>
                        <br />
                        <div className={styles.list}>
                            <p>• One Free coaching lesson</p>
                            <p>• Access to all amenities</p>
                            <p>• 15% Discount on all products</p>
                        </div>
                    </div>
                </div>
            </motion.article>
        </>
    )
}