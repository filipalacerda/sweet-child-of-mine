import React from 'react'
import styles from '../character.module.css'


/**
export async function generateStaticParams() {
    const posts = await fetch('https://.../character').then((res) => res.json())

    return posts.map((post) => ({
    slug: post.slug,
    }))
}
 */


export default async function CharacterPage(){
/* export default async function CharacterPage({params,}:{params: Promise<{slug: string}>}){ */


    //const { slug } = await params
    //const { slug } = await generateStaticParams()

    return (
        <div className={styles.character_container}>
            <h1>This is Characters id: {/* slug*/} </h1>
        </div>
    )
}