import pool from '../../db/conectionDb.js'

const getPosts = async () => {
  const SQLquery = { text: 'SELECT * FROM posts' }
  const response = await pool.query(SQLquery)
  return response.rows
}

const createPost = async ({ titulo, url, descripcion }) => {
  const SQLquery = {
    text: 'INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *',
    values: [titulo, url, descripcion]
  }
  const response = await pool.query(SQLquery)
  return response.rows
}

export { getPosts, createPost }
