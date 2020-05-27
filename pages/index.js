
import fetch from 'isomorphic-unfetch'
import Card from '../components/Card/Card'
import styles from '../sass/index.module.scss'
const Home = ({posts})=> {

  return (
    <div className={styles.container}>
     
    <div className={styles.cardContainer}>
          {posts.map(post => 
            <Card key={post.id} post={post}/>)}
     </div>
    </div>
  )
}
export default Home
export async function getServerSideProps() {
  const {API_URL}= process.env;
  const res = await fetch(`${API_URL}/posts`)
   const data = await res.json();

  return {
    props:{
      posts:data
    }
  }
}

  


