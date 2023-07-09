import styles from './Reviews.module.css';
import cbum from '../../images/cbum.png';
import star from '../../images/starRating.png';
import ronnie from '../../images/ronnie.png';
import max from '../../images/maxT.png';

export const Reviews = () => {
    return (
        <>
            <article className={styles.reviewsSectionContainer} id='reviews'>
                <h2>Reviews</h2>
                <div className={styles.reviews}>
                    <div className={styles.review}>
                        <img id={styles.pfp} src={cbum} />
                        <p>Gym is sick! Has all the machines I need and more, and also the environment helps me push hard in my sessions.</p>
                        <div className={styles.stars}>
                            <img id={styles.star} src={star} />
                            <img id={styles.star} src={star} />
                            <img id={styles.star} src={star} />
                            <img id={styles.star} src={star} />
                            <img id={styles.star} src={star} />
                        </div>
                    </div>
                    <div className={styles.review}>
                        <img id={styles.pfp} src={ronnie} />
                        <p>Super cool gym! There's plenty of squat racks and some heavy a** weights, yeah buddy!</p>
                        <div className={styles.stars}>
                            <img id={styles.star} src={star} />
                            <img id={styles.star} src={star} />
                            <img id={styles.star} src={star} />
                            <img id={styles.star} src={star} />
                            <img id={styles.star} src={star} />
                        </div>
                    </div>
                    <div className={styles.review}>
                        <img id={styles.pfp} src={max} />
                        <p>Gym is sick! Has all the machines I need and more, and also the environment helps me push hard in my sessions.</p>
                        <div className={styles.stars}>
                            <img id={styles.star} src={star} />
                            <img id={styles.star} src={star} />
                            <img id={styles.star} src={star} />
                            <img id={styles.star} src={star} />
                            <img id={styles.star} src={star} />
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}