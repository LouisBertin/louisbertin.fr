import React from "react"
import { Link } from "gatsby"

const postsList = ({ posts }) => (
    <ul>
        {posts.nodes.map(post => (
            <li key={post.id}>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link> - {post.frontmatter.date}
            </li>
        ))}
    </ul>
)

export default postsList