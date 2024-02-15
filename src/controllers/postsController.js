import {
  getPosts,
  createPost,
  addLike,
  deletePost
} from '../models/postsModel.js'
import { findError } from '../utils/utils.js'

const getAllPosts = async (req, res) => {
  try {
    const posts = await getPosts()
    res.status(200).json(posts)
  } catch (error) {
    const errorFound = findError(error.code)
    return errorFound.length
      ? res.status(errorFound[0].status).json({ error: errorFound[0].message })
      : res.status(500).json({ error: 'Error al mostrar los posts' })
  }
}

const createPosts = async (req, res) => {
  try {
    const post = req.body
    const newPost = await createPost(post)
    res.status(201).json({ post: newPost })
  } catch (error) {
    const errorFound = findError(error.code)
    return errorFound.length
      ? res.status(errorFound[0].status).json({ error: errorFound[0].message })
      : res.status(500).json({ error: 'Error al crear el post' })
  }
}

const addLikes = async (req, res) => {
  try {
    const { id } = req.params
    const addedLikePost = await addLike(id)
    res.status(200).json({ post: addedLikePost })
  } catch (error) {
    const errorFound = findError(error.code)
    return errorFound.length
      ? res.status(errorFound[0].status).json({ error: errorFound[0].message })
      : res.status(500).json({ error: 'Error al agregar el like' })
  }
}

const deletePosts = async (req, res) => {
  try {
    const { id } = req.params
    await deletePost(id)
    res.status(200).json({ message: 'Post Eliminado con éxito' })
  } catch (error) {
    const errorFound = findError(error.code)
    return errorFound.length
      ? res.status(errorFound[0].status).json({ error: errorFound[0].message })
      : res.status(500).json({ error: 'Error al eliminar el post' })
  }
}

export { getAllPosts, createPosts, addLikes, deletePosts }
