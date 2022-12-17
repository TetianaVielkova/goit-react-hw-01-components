import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

export const Statistics = ({title, stats}) => {
    return(
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}

            <ul className={styles.statList}>
                {stats.map(({id, percentage, label }) => (
                <li style={{backgroundColor: getRandomHexColor()}} key={id} className={styles.item}>
                <span className={styles.label}>{label}</span>
                <span className={styles.percentage}>{percentage}%</span>
                </li>
                ))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}