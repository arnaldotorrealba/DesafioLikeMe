const validateParametersAreNotEmpty = (req, res, next) => {
  const body = req.body
  for (const key in body) {
    const value = body[key]
    if (!value.trim()) {
      return res.status(400).json({ error: 'Los campos no deben estar vacíos' })
    }
  }
  next()
}

export { validateParametersAreNotEmpty }
