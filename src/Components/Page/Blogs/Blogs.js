import React from 'react';
import { useTitle } from '../../../utilities/Utilities';

const Blogs = () => {
    useTitle('blogs');
    return (
        <div>
            <div className='m-8 lg:m-10 p-8 lg:p-20 rounded-lg bg-orange-300'>
                <p className='text-xl font-bold lg:text-2xl mb-5'>1) What are the difference between SQL and NoSQL?</p>
                <p>
                    <li className='list-disc'>SQL databases are relational, NoSQL databases are non-relational.</li>
                    <li className='list-disc'>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                    <li className='list-disc'>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                    <li className='list-disc'>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                    <li className='list-disc'>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                </p>
            </div>
            <div className='m-8 lg:m-10 p-8 lg:p-20 rounded-lg bg-orange-300'>
                <p className='text-xl font-bold lg:text-2xl mb-5'>2) What is JWT, and how does it work?</p>
                <p>JSON Web Token (JWT) is an open standard for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).
                    <br /><br />
                    <span className='font-semibold'>How it works:</span> Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.
                    <br />
                    <li className='list-disc'>User sign-in using username and password or google/facebook.</li>
                    <li className='list-disc'>Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.</li>
                    <li className='list-disc'>User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.</li>
                    <li className='list-disc'>Resource server then verifies the authenticity of the token using the secret salt/ public key.</li>
                </p>
            </div>
            <div className='m-8 lg:m-10 p-8 lg:p-20 rounded-lg bg-orange-300'>
                <p className='text-xl font-bold lg:text-2xl mb-5'>3) What is the difference between javascript and NodeJS?</p>
                <p>
                    <li className='list-disc'> Javascript is a programming language that is used for writing scripts on the website. Where NodeJS is a Javascript runtime environment.</li>
                    <li className='list-disc'>Javascript can only be run in the browsers. Where We can run Javascript outside the browser with the help of NodeJS.</li>
                    <li className='list-disc'>It is basically used on the client-side. Where It is mostly used on the server-side.</li>
                    <li className='list-disc'>Javascript is capable enough to add HTML and play with the DOM. Where Nodejs does not have capability to add HTML tags.</li>
                    <li className='list-disc'> Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. Where V8 is the Javascript engine inside of node.js that parses and runs Javascript.</li>
                    <li className='list-disc'> Javascript is used in frontend development. Where Nodejs is used in server-side development.</li>
                    <li className='list-disc'> Some of the javascript frameworks are RamdaJS, TypedJS, etc. Where Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.</li>
                </p>
            </div>
            <div className='m-8 lg:m-10 p-8 lg:p-20 rounded-lg bg-orange-300'>
                <p className='text-xl font-bold lg:text-2xl mb-5'>4) How does NodeJS handle multiple requests at the same time?</p>
                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
            </div>
        </div>
    );
};

export default Blogs; <h3>This is blog</h3>