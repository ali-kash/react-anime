import React from 'react'

import { AnimeCard } from './AnimeCard'

export const MainContent = (props) => {
	return (
		<main>
			<div className='main__head'>
				<form className='search-box' onSubmit={props.handleSearch}>
					<input
						type='search'
						placeholder='Search for an anime...'
						required
						value={props.search}
						onChange={(e) => props.setSearch(e.target.value)}
					/>
				</form>
			</div>
			<div className='anime-list'>
				{props.animeList.map((anime) => (
					<AnimeCard key={anime.mal_id} anime={anime} />
				))}
			</div>
		</main>
	)
}
