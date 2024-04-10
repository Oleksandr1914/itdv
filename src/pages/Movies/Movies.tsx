import Card from "../../components/Card/Card"
import styles from './Movies.module.scss'

export interface Movie {
    "adult": boolean,
    "backdrop_path": string,
    "genre_ids": number[],
    "id": number,
    "original_language": string,
    "original_title": string,
    "overview": string,
    "popularity": number,
    "poster_path": string,
    "release_date": string,
    "title": string,
    "video": boolean,
    "vote_average": number,
    "vote_count": number
}

interface Props {
    movies: Movie[],
}

const Movies = ({ movies }: Props) => {
    return (
        <div className={styles.container}>
            <h2>Movies</h2>
            <div className={styles.blockCards}>  {movies.map(el => (
                <Card mov={el} />
            ))}</div>
        </div>
    )
}

export default Movies