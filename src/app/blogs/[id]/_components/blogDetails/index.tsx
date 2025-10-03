import Container from '@/components/container'
import React from 'react'
import style from "./style.module.css";

function BlogDetails() {
    return (
        <section className='bg-white py-[clamp(30px,4vw,100px)]'>
            <Container>
                <h2 className={`${style.btitle}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            </Container>

        </section>
    )
}

export default BlogDetails