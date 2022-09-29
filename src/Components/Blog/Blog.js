import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className='blog-section'>
                <div>
                    <p>Question number 01: How does REACT work?</p>
                    <hr />
                </div>
                <div>
                    <h4>Answer:</h4>
                    <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 'V' denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook</p>
                </div>
            </div>
            <div className='blog-section'>
                <div>
                    <p>Question number 02: What is the Difference Between State and Props?</p>
                    <hr />
                </div>
                <div>
                    <h4>Answer:</h4>
                    <p>Props and state are related. The state of one component will often become the props of a child component. Props are passed to the child within the render method of the parent as the second argument to React.createElement() or, if you're using JSX, the more familiar tag attributes.</p>
                </div>
            </div>
            <div className='blog-section'>
                <div>
                    <p>Question number 03: How does REACT work?</p>
                    <hr />
                </div>
                <div>
                    <h4>Answer:</h4>
                    <p>The word effect refers to a functional programming term called a "side effect".But to really understand what a side effect is, we first have to grasp the concept of a pure function.

                        You may not know this, most React components are intended to be pure functions.

                        It may be strange to think about React components as functions, but they are.

                        It helps to see that a regular React function component is declared like a JavaScript function:</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;