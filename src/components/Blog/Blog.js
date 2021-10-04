import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Blog.css'
import procon6 from '../../bannar/procon6.png'
import procon4 from '../../bannar/procon4.png'
import procon5 from '../../bannar/procon5.png'
import procon7 from '../../bannar/procon7.png'
import procon8 from '../../bannar/procon8.png'
import procon9 from '../../bannar/procon9.png'

const Blog = () => {
    return (
        <div>
            <h2 className="text-center">Latest from our Blogs</h2>
            <p className="text-center">Thoughts, Coding and JAMstack</p>
            <div className="blog">
                <CardGroup className="gap-5 m-5">
                    <Card>
                        <Card.Img variant="top" src={procon6} />
                        <Card.Body>
                            <Card.Title>Web design environment</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={procon4} />
                        <Card.Body>
                            <Card.Title>Back end information</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={procon5} />
                        <Card.Body>
                            <Card.Title>Extra facilities</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>

                <CardGroup className="gap-5 m-5">
                    <Card>
                        <Card.Img variant="top" src={procon7} />
                        <Card.Body>
                            <Card.Title>Others website comparison</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={procon8} />
                        <Card.Body>
                            <Card.Title>Website concepts updates</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={procon9} />
                        <Card.Body>
                            <Card.Title>Others programming language</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        </div>
    );
};

export default Blog;