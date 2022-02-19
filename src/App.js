import React, { useMemo, useState } from 'react'
import { useEffect } from 'react'
import PostService from './API/PostService'
import Filter from './Components/Filter/Filter'
import Form from './Components/Form/Form'
import List from './Components/List/List'
import { usePosts } from './Hooks/usePosts'
import './Style/App.css'

const App = () => {
  let [posts, setPosts] = useState([
    { id: 1, title: 'Python', body: 'Programming language' },
    { id: 2, title: 'JS', body: 'Programming language' },
    { id: 3, title: 'Java', body: 'Programming language' },
    { id: 4, title: 'C', body: 'Programming language' },
    { id: 5, title: 'Swift', body: 'Programming language' },
    { id: 6, title: 'PHP', body: 'Programming language' },
  ])
  let [filter, setFilter] = useState({ sort: '', query: '' })
  let searchedAndSelectedPosts = usePosts(posts, filter.sort, filter.query)

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  async function fetchPosts() {
    let posts = await PostService.getAll()
    setPosts(posts)
  }
  useEffect(() => {
    fetchPosts()
  }, [])
  return (
    <div className="App">
      <Form addPost_Func={addNewPost} />

      <Filter filter={filter} setFilter={setFilter} />

      {searchedAndSelectedPosts.length ? (
        <List posts={searchedAndSelectedPosts} removePost={removePost} />
      ) : (
        <h2 className="titleWarning">No posts</h2>
      )}
    </div>
  )
}

export default App
