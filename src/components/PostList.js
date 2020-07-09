import React, { Component } from 'react'

export default class PostList extends Component {
    render() {
        const post = this.props.post;
        return (
            <div>
                {post.map((post) => (
                    <div className="post">
                        <div className="card">
                            <div className="card-body">
                                {post.post}
                            </div>
                        </div>
                        <br />
                    </div>
                ))}
            </div>
        )
    }
}
