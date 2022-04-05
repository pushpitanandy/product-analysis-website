import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="blogs">
            <div className="question-one">
                <h2>Context API and It's Purpose</h2>
                <p>There are some cases in React, where a child component needs data which are present on its grandparent component. For a child to receive the data, the grandparent component need to send the particular data to the child's parent component via props at first. Then the parent sends the data to the child through props again. This process is known as Prop Drilling. This method has a drawback as data need to be passed through every level, no matter its use in those levels. <br /> Context API is the alternative of prop drilling. It allows data to be accessed at any child node without passing it as props. It easily creates global variable which any component can request to access.</p>
            </div>
            <div className="question-two">
                <h2>Inline VS Block Elements</h2>
                <p>Inline elements are the HTML elements which takes only the space required for the content to fix in. For example, 'span', 'small' and 'anchor(a)' tags. When we declare multiple inline elements, they sit one after another, based on their required space. <br /> Block elements like 'paragraph(p)' and 'div' tags, takes a separate line for each of the element. Whenever we declare multiple block elements, they sits below one another, no matter what size is the content. </p>
            </div>

        </div>
    );
};

export default Blogs;