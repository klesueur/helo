SELECT p.id, u.username, p.author_id, p.title, p.content, p.img
FROM posts p
JOIN users u ON p.author_id = u.id
WHERE u.id = $1;