import { useState } from "react";
import SingleCard from "./singleCard";
import '../styleSheets/home.css';

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: 'BRAVE NEW WORLD BY ALDOUS HUXLEY', ranking:4, author:'Lahiru Chathuranga', body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in sectioThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham', src:'./img/1.jpg', id:1},
        {title: 'NOLI ME TANGERE BY JOSÉ RIZAL', ranking:2, author:'KAsun Madumal', body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in sectioThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham', src:'./img/2.jpg', id:2},
        {title: 'PALE FIRE BY VLADIMIR NABOKOV', ranking:4.2, author:'Lahiru Chathuranga', body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in sectioThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham', src:'./img/3.jpg', id:3}
    ]);

    const deleteHandle = (id) => {
        setBlogs((prevBlogs) => {
            return (
                prevBlogs.filter((blog) => blog.id != id)
            )
        })
    }

    return ( 
        <div>
            <h2 className='title'>Ranking in this week</h2>
            <div style={{display: 'grid', gridTemplateColumns:'1fr 1fr 1fr'}} className='container'>
                {blogs.filter(blog => blog.ranking>3.5).map((blog) => {
                    return (
                        <SingleCard 
                            key = {blog.id}
                            blog = {blog}
                            deleteHandle = {deleteHandle}
                        />
                    )
                })}
            </div>
            
        </div>
     );
}
 
export default Home;