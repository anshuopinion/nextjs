import axios from 'axios'
import fetch from 'isomorphic-unfetch'
import '../sass/main.scss'
import Card from '../components/Card/Card'
export default function Home({posts}) {

  // console.log(posts)
  return (
    <div className="container">
    
          {posts.map(post => 
            <Card key={post.id} post={post}/>)}
     
    </div>
  )
}

export async function getServerSideProps() {
  const {API_URL} = process.env;

  const res = await fetch(`${API_URL}/posts`)
   const data = await res.json();

  return {
    props:{
      posts:data
    }
  }
}
