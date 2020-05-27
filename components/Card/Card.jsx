import styles from './Card.module.scss'

export default function Card({post}){

    const {API_URL} = process.env
    return(
        <>
        <div className={styles.PostCard}>
            <img src={API_URL + post.post_image.url} alt={post.post_image.name}
            />
            <div className={styles.Body}>
    <h3>{post.tittle}</h3>
    <p dangerouslySetInnerHTML={{__html:post.description.substring(0,150)}}
/>
            </div>

            </div>
        </>
    )
}