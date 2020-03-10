import React from 'react'
import Categories from '../Components/Categories'
import NewsList from '../Components/NewsList'

export default function NewsPage({match}) {
    const category = match.params.category || 'all'
    return (
        <>
            <Categories/>
            <NewsList category={category}/>
        </>
    )
}
