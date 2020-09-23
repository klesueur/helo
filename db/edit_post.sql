UPDATE posts
SET content = $1
WHERE id = $2
returning *;