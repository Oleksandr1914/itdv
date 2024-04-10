import MovieThumb from '../../assets/movie-thumb.png';

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
        <div className="Container">
            <h2>Movies</h2>
            {movies.map(el => (
                <div key={el.id} className='Card'>
                    <img src={MovieThumb} alt="poster" />
                    <div className='Card-info'>
                        <h3>{el.original_title}</h3>
                        <p><span className=''>release:</span>{el.release_date}</p>
                        <p>{el.overview}</p>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default Movies