import React from 'react'
import ButtonGrey from '../../UI/ButtonGrey/ButtonGrey'
import classes from './Item.module.css'

const Item = ({ post, removePost, number }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h3 className={classes.container_titlePost}>
          {number}. {post.title}
        </h3>
        <p className={classes.container_infoAboutPost}>{post.body}</p>
      </div>
      <ButtonGrey onClick={() => removePost(post)}>Delete</ButtonGrey>
    </div>
  )
}

export default Item
