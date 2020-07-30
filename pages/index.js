import {useEffect, useState} from 'react';
import Head from 'next/head';
import Post from '../components/post';

const client = require('contentful').createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

const Home = () => {
    const fetchEntries = async () => {
        const entries = await client.getEntries();
        if (entries.items) return entries.items;
        console.log(`Error getting Entries for ${contentType.name}.`)
    };

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const allPosts = await fetchEntries();
            setPosts([...allPosts]);
            console.log(allPosts[0]);
        };
        getPosts()
    }, []);

    return (
        <>
            <Head>
                <title>OFF LABEL | 学問と日常を繋ぐ</title>
            </Head>
            {posts.length > 0
                ? posts.map(p => (
                    <Post
                        key={p.fields.title}
                        title={p.fields.title}
                        date={p.fields.date}
                        thumbnail={p.fields.thumbnail.fields.file.url}
                        content={p.fields.body}
                    />
                ))
            : null}
        </>
    )
};

export default Home;