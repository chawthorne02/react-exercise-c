import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



import { useState } from "react";

const INITIAL_POSTS = [
  {
    id: 1,
    title: "An awesome post",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, saepe quo? Tempore eveniet temporibus aut facilis illum, enim, magni pariatur dignissimos soluta fuga ullam saepe, quod velit quisquam recusandae impedit.",
  },
  {
    id: 2,
    title: "Another awesome blog post",
    body: "Sit amet consectetur adipisicing elit. Repellendus, saepe quo? Tempore eveniet temporibus aut facilis illum, enim, magni pariatur dignissimos soluta fuga ullam saepe, quod velit quisquam recusandae impedit.",
  },
  {
    id: 3,
    title: "A great blog post",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    title: "A fourth blog post",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Blandit aliquam etiam erat velit scelerisque in. Duis ut diam quam nulla porttitor massa. Praesent elementum facilisis leo vel.",
  }
];

function BlogReadingApp() {
  const [activePost, setActivePost] = useState();

  const blogTitles = INITIAL_POSTS.map((blog) => (
    <p key={blog.id} onClick={() => setActivePost(blog)}>
      {blog.title}
    </p>
  ));

  return (
    <Container fluid>

      <Col className='blog-titles'> {blogTitles}</Col>
        {activePost && (
        <>
        <Card className='card'>
          <Card.Body>
          <Card.Title className='title-card'>{activePost.title}</Card.Title>
          <Card.Text>{activePost.body}</Card.Text>
          </Card.Body>
        </Card>
        </>
      )}
    </Container>
  );
}
  


export default BlogReadingApp;
