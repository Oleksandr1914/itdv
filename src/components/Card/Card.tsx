import MovieThumb from '../../assets/movie-thumb.png';
import { Movie } from '../../pages/Movies/Movies';

import styles from './Card.module.scss'

interface MovieProps {
    mov: Movie
}

const Card = ({ mov }: MovieProps) => {
    return (
        <div key={mov.id} className={styles.cardContainer}>
            <img src={MovieThumb} alt="poster" />
            <div className={styles.cardInfo}>
                <h3>{mov.original_title}</h3>
                <p><span className={styles.Card}>release:</span>{mov.release_date}</p>
                <p>{mov.overview}</p>

            </div>
        </div>
    )
}

export default Card