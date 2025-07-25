import React from 'react'
import styles from '../character.module.css'

export default async function CharacterPage({params,}:{params: Promise<{slug: string}>}){

    const { slug } = await params
    

    return (
        <div className={styles.character_container}>
            <h1>This is Characters id: {slug} </h1>
        </div>
    )
}