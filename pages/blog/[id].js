import styles from '../../sass/[id].module.scss'
import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'
export default function blog({post}) {
const {API_URL} = process.env

    return(
        <div className={styles.container}>

<h2>{post.tittle}</h2>
<img src={API_URL + post.post_image.url}  alt={post.post_image.name}/>
<p>
   {post.description}
</p>
        </div>
    )
}

const {publicRuntimeConfig} = getConfig()

export async function getServerSideProps(context){

    const {id} = context.query
    const res = await fetch(`${publicRuntimeConfig.API_URL}/posts/${id}`)
    const data = await res.json()
    return {
        props:{
          post :data
        }
    }
}