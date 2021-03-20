import React from 'react';

function Posts(props) {
    return (
        <div className="mural">
            <h2>Mural</h2>
            {props.posts.map((post) => {
                return (
                    <div key={post._id} id={post._id} className="post">
                        <form>
                            <div className="title">{post.title}</div>
                            <div className="description">{post.description}</div>
                            <button onClick={() => props.deletePost(post._id)} type="submit">Deletar</button>
                        </form>
                    </div>
                );
            })}
        </div>
    );
}

export default Posts;