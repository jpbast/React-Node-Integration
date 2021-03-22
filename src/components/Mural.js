import React, { useEffect, useState } from 'react';
import Posts from './Posts';
import '../styles/Mural.css'

function Mural() {
    document.querySelector('body').style.backgroundColor = "rgb(255, 255, 255)";
    document.title = "Posts";
    document.getElementById('favicon').href = "./assets/favicon.png"

    const [posts, setPosts] = useState([]);
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const token = sessionStorage.getItem('authorization-token');
        const headers = new Headers({
            'Content-Type': 'application/json',
            'authorization-token': token
        });
        const options = {
            method: 'GET',
            headers
        }

        fetch(`${process.env.REACT_APP_URL}/mural`, options)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts.docs);
                setUserName(posts.userName);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    function newPost(e) {
        e.preventDefault();
        const token = sessionStorage.getItem('authorization-token');
        const input = document.querySelectorAll('input');
        const title = input[0].value;
        const description = input[1].value;
        const post = JSON.stringify({ title, description })
        const options = {
            method: "POST",
            headers: new Headers({ 
                'Content-Type': 'application/json',
                'authorization-token': token
            }),
            body: post
        }

        fetch(`${process.env.REACT_APP_URL}/mural/new`, options)
            .then(res => res.json())
            .then(newPost => {
                setPosts([...posts, newPost])
            })
            .catch(err => {
                console.log(err);
            })
    }

    function deletePost(id) {
        const token = sessionStorage.getItem('authorization-token')
        const headers = new Headers({
            'Content-Type': 'application/json',
            'authorization-token': token
        })
        const options = {
            method: 'GET',
            headers,
        }

        fetch(`${process.env.REACT_APP_URL}/mural/delete/${id}`, options)
            .then(res => res.json())
            .then(doc => {
                console.log("deletando", doc)
                setPosts(posts.filter(post => post._id !== doc._id))
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <div className="new-post">
                <h1>Novo Post - {userName}</h1>
                <form>
                    <input type="text" name="title" placeholder="Título"/>
                    <input type="text" name="description" placeholder="Descrição"/>
                    <button onClick={newPost} type="submit" id="button">Salvar</button>
                </form>
            </div>           
            <Posts posts={posts} deletePost={deletePost} />
        </div> 
    );
}

export default Mural;