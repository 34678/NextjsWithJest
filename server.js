const app = next({ dev })

app.prepare().then(() => {
  createServer((req, res) => {
  }).listen(8000, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
