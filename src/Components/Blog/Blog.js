import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className="container">
            <img className="heroImg" src="https://static.pexels.com/photos/373912/pexels-photo-373912.jpeg" alt="" />

            <section className="post-content-section">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 post-title-block">

                            <h1 className="text-center">Measures taken by airlines and airports</h1>
                            <ul className="list-inline d-flex">
                                <li>Author |</li>
                                <li>Category |</li>
                                <li>Date |</li>
                            </ul>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12">
                            <p className="lead">Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
                            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.</p>
                            <div className="well ">
                                <large>This is image</large>
                            </div>
                            <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                            <blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                            </blockquote>
                            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.</p>
                            <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                            <blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.</p>

                            </blockquote>

                            <div className="image-block">
                                <img className="w-100" src="https://static.pexels.com/photos/268455/pexels-photo-268455.jpeg" />
                            </div>

                            <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>

                        </div>
                        <div className="col-lg-3  col-md-3 col-sm-12">
                            <div className="well">
                                <h2>Subscription Box</h2>
                                <p>Form Description Goes here</p>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search for..." />
                                    <span className="input-group-btn">
                                        <button className="btn btn-default" type="button">Go!</button>
                                    </span>
                                </div>
                            </div>
                            <div className="well">
                                <h2>Share love</h2>
                                <ul className="list-inline">
                                    <li><span className="glyphicon glyphicon-heart" aria-hidden="true"></span></li>
                                    <li><span className="glyphicon glyphicon-heart" aria-hidden="true"></span></li>
                                    <li><span className="glyphicon glyphicon-heart" aria-hidden="true"></span></li>
                                    <li><span className="glyphicon glyphicon-heart" aria-hidden="true"></span></li>

                                </ul>
                            </div>
                            <div className="well">
                                <h2>About Author</h2>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                <a href="/" className="btn btn-default">Read more</a>
                            </div>
                            <div className="list-group">
                                <a className="list-group-item active" href="/"> <h4 className="list-group-item-heading">List group item heading</h4> <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p> </a>
                                <a className="list-group-item" href="/"> <h4 className="list-group-item-heading">List group item heading</h4> <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p> </a>
                                <a className="list-group-item" href="/"> <h4 className="list-group-item-heading">List group item heading</h4> <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p> </a> </div>
                            <div className="well">
                                <div className="media"> <div className="media-left"> <a href="/"> </a> </div> <div className="media-body"> <h4 className="media-heading">Media heading</h4> Cras sit amet nibh libero, in gravida nulla.</div> </div>
                                <div className="media"> <div className="media-left"> <a href="/"> </a> </div> <div className="media-body"> <h4 className="media-heading">Media heading</h4> Cras sit amet nibh libero, in gravida nulla.</div> </div>
                                <div className="media"> <div className="media-left"> <a href="/">  </a> </div> <div className="media-body"> <h4 className="media-heading">Media heading</h4> Cras sit amet nibh libero, in gravida nulla.</div> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="m-5">
                <div className="container">
                    <div className="col-md-12">
                        <h1>Alice in Wonderland, part dos</h1>
                        <p>Update 2020: Due to how popular this article has become, I have decided to keep this article alive and will continue to add more beautiful travel blogs as I discover it.

                        2020 has come, maybe not with a bang as a lot of us may have hoped, but the world goes on and as such I have decided to extend this most beautiful travel blogs list even further with 6 new travel blogs to check out, bringing it to 20, a perfect number for the 2020 year. Without further ado, let's check out all the beautiful travel blogs out there.

                        As some of you may know, I have been in the design industry for the past 10 years working as a freelance designer in various companies while also running this blog. In fact, the majority of my income is mostly from my design freelance work over at The Pete Design.

                        I value well-designed products and today, I want to dive down into the design of travel blogs and featured the best design travel blogs out there that take storytelling to the next level.
                         'You did,' said the Mock Turtle.</p>
                        <div>
                            <span className="badge">Posted 2012-08-02 20:47:04</span><div className="pull-right"><span className="label label-default">alice</span> <span className="label label-primary">story</span> <span className="label label-success">blog</span> <span className="label label-info">personal</span> <span className="label label-warning">Warning</span>
                                <span className="label label-danger">Danger</span></div>
                        </div>
                        <hr />
                        <h1>Revolution has begun!</h1>
                        <p>What I love about it: Anywhere We Roam may seem like a typical clean and minimal travel blog but this UK-based travel blog runs by Paul and Mark is a great example of how photos speaks a thousand words.

                        The layout of the travel blog merely serves as a white canvas to emphasize the atmospheric and immersive photography that Anywhere We Roam is a master at. Their photography and writings are top-notch and has the ability to transport you to the location in question.

                        A great example of this can be seen on articles like Impressions of Havana - A story from the streets where the duo takes you through the street of Havana exploring its culture and vibe through atmospheric photography and immersive writing that will make you feel like you are there yourself.</p>
                        <div>
                            <span className="badge">Posted 2012-08-02 20:47:04</span><div className="pull-right"><span className="label label-default">alice</span> <span className="label label-primary">story</span> <span className="label label-success">blog</span> <span className="label label-info">personal</span> <span className="label label-warning">Warning</span>
                                <span className="label label-danger">Danger</span></div>
                        </div>
                        <hr />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;