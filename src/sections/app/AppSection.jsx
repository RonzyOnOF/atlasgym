import styles from './AppSection.module.css';
import phone from '../../images/realphon.png';
import appStore from '../../images/appstore.png';

export const AppSection = () => {
    return (
        <>
            <div className={styles.appContainer}>
                <h2>Download our app</h2>
                <div className={styles.downloadContainer}>
                    <img id={styles.download} src={appStore} />
                    <img id={styles.download} src={appStore} />
                </div>
                <img id={styles.phone} src={phone} />
            </div>
        </>
    )
}