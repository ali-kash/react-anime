import React from 'react'

export const AnimeCard = ({ anime }) => {
	return (
		<article className='anime-card'>
			<a href={anime.url} target='_blank' rel='noreferrer'>
				<figure>
					<img src={anime.image_url} alt='anime poster' />
				</figure>
			</a>
			<h3>{anime.title}</h3>
		</article>
	)
}
