import React, { Component } from 'react'
import axios from 'axios'
import './style.scss'

class Home extends Component {
  state = {
    posts: [ ]
  }
  componentDidMount() {
    axios.get('https://swapi.co/api/films')
    .then(res => {
      console.log(res);
      this.setState({
        posts: res.data.results.slice(0,5)
      })
    })
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <p>{post.title}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div>No posts yet</div>
    );
    return(
      <div className="home">
        <h4>Starwars Films</h4>
        <div>{postList}</div>
      </div>
    )
  }
}

export default Home