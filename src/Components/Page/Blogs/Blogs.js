import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='m-36 p-20'>
                <p className='text-2xl'>1) What are the difference between SQL and NoSQL?</p>
                <p>
                    <li className='list-disc'>SQL databases are relational, NoSQL databases are non-relational.</li>
                    <li className='list-disc'>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                    <li className='list-disc'>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                    <li className='list-disc'>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                    <li className='list-disc'>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                </p>
            </div>
            <div className='m-36 p-20'>
                <p className='text-2xl'>2) What is JWT, and how does it work?</p>
                <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
            </div>
            <div className='m-36 p-20'>
                <p className='text-2xl'>3) What is the difference between javascript and NodeJS?</p>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='m-36 p-20'>
                <p className='text-2xl'>4) How does NodeJS handle multiple requests at the same time?</p>
                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
            </div>
        </div>
    );
};

export default Blogs; <h3>This is blog</h3>