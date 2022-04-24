import React from "react";
import './News.css';
import { NewsItem } from '../NewsItem/NewsItem';

const News = () => {
    const blogPosts = [
        {
            id: 1,
            title: "JAVASCRIPT",
            content: `JavaScript is the world most popular 
        lightweight, interpreted compiled programming 
        language. It is also known as scripting 
        language for web pages. It is well-known for 
        the development of web pages, many non-browser 
        environments also use it. JavaScript can be 
        used for Client-side developments as well as 
        Server-side developmentsJavaScript is the world most popular 
        lightweight, interpreted compiled programming 
        language. It is also known as scripting 
        language for web pages. It is well-known for 
        the development of web pages, many non-browser 
        environments also use it. JavaScript can be 
        used for Client-side developments as well as 
        Server-side developmentsJavaScript is the world most popular 
        lightweight, interpreted compiled programming 
        language. It is also known as scripting 
        language for web pages. It is well-known for 
        the development of web pages, many non-browser 
        environments also use it. JavaScript can be 
        used for Client-side developments as well as 
        Server-side developmentsJavaScript is the world most popular 
        lightweight, interpreted compiled programming 
        language. It is also known as scripting 
        language for web pages. It is well-known for 
        the development of web pages, many non-browser 
        environments also use it. JavaScript can be 
        used for Client-side developments as well as 
        Server-side developmentsJavaScript is the world most popular 
        lightweight, interpreted compiled programming 
        language. It is also known as scripting 
        language for web pages. It is well-known for 
        the development of web pages, many non-browser 
        environments also use it. JavaScript can be 
        used for Client-side developments as well as 
        Server-side developmentsJavaScript is the world most popular 
        lightweight, interpreted compiled programming 
        language. It is also known as scripting 
        language for web pages. It is well-known for 
        the development of web pages, many non-browser 
        environments also use it. JavaScript can be 
        used for Client-side developments as well as 
        Server-side developmentsJavaScript is the world most popular 
        lightweight, interpreted compiled programming 
        language. It is also known as scripting 
        language for web pages. It is well-known for 
        the development of web pages, many non-browser 
        environments also use it. JavaScript can be 
        used for Client-side developments as well as 
        Server-side developmentsJavaScript is the world most popular 
        lightweight, interpreted compiled programming 
        language. It is also known as scripting 
        language for web pages. It is well-known for 
        the development of web pages, many non-browser 
        environments also use it. JavaScript can be 
        used for Client-side developments as well as 
        Server-side developments`,
            published_at: '17.04.2022',
            categories: "Nishant Singh ",
            imgUrl:
                "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
        },
        {
            id: 2,
            title: "Data Structure ",
            content: `There are many real-life examples of 
        a stack. Consider an example of plates stacked 
        over one another in the canteen. The plate 
        which is at the top is the first one to be 
        removed, i.e. the plate which has been placed 
        at the bottommost position remains in the 
        stack for the longest period of time. So, it 
        can be simply seen to follow LIFO(Last In 
        First Out)/FILO(First In Last Out) order.`,
            published_at: '17.04.2022',

            categories: "Suresh Kr",
            imgUrl:
                "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
        },
        {
            id: 3,
            title: "Algorithm",
            content: `The word Algorithm means “a process 
        or set of rules to be followed in calculations 
        or other problem-solving operations”. Therefore 
        Algorithm refers to a set of rules/instructions 
        that step-by-step define how a work is to be 
        executed upon in order to get the expected 
        results. `,
            published_at: '17.04.2022',

            categories: "Monu Kr",
            imgUrl:
                "http://localhost:1337/uploads/raspisanie_dce7196318.png",
        },
        {
            id: 4,
            title: "Computer Network",
            content: `An interconnection of multiple devices, 
        also known as hosts, that are connected using 
        multiple paths for the purpose of sending/
        receiving data media. Computer networks can 
        also include multiple devices/mediums which 
        help in the communication between two different 
        devices; these are known as Network devices
        and include things such as routers, switches,
        hubs, and bridges. `,
            published_at: '17.04.2022',

            categories: "Sonu Kr",
            imgUrl:
                "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
        },
        {
            id: 5,
            title: "JAVASCRIPT",
            content: `JavaScript is the world most popular 
        lightweight, interpreted compiled programming 
        language. It is also known as scripting 
        language for web pages. It is well-known for 
        the development of web pages, many non-browser 
        environments also use it. JavaScript can be 
        used for Client-side developments as well as 
        Server-side developments`,
            published_at: '17.04.2022',

            categories: "Nishant Singh ",
            imgUrl:
                "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
        },
        {
            id: 6,
            title: "Data Structure ",
            content: `There are many real-life examples of 
        a stack. Consider an example of plates stacked 
        over one another in the canteen. The plate 
        which is at the top is the first one to be 
        removed, i.e. the plate which has been placed 
        at the bottommost position remains in the 
        stack for the longest period of time. So, it 
        can be simply seen to follow LIFO(Last In 
        First Out)/FILO(First In Last Out) order.`,
            published_at: '17.04.2022',

            categories: "Suresh Kr",
            imgUrl:
                "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
        },
        {
            id: 7,
            title: "Algorithm",
            content: `The word Algorithm means “a process 
        or set of rules to be followed in calculations 
        or other problem-solving operations”. Therefore 
        Algorithm refers to a set of rules/instructions 
        that step-by-step define how a work is to be 
        executed upon in order to get the expected 
        results. `,
            published_at: '17.04.2022',

            categories: "Monu Kr",
            imgUrl:
                "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
        },
        {
            id: 8,
            title: "Computer Network",
            content: `An interconnection of multiple devices, 
        also known as hosts, that are connected using 
        multiple paths for the purpose of sending/
        receiving data media. Computer networks can 
        also include multiple devices/mediums which 
        help in the communication between two different 
        devices; these are known as Network devices
        and include things such as routers, switches,
        hubs, and bridges. `,
            published_at: '17.04.2022',

            categories: "Sonu Kr",
            imgUrl:
                "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
        },
    ];

    return (
        <section className="blog-section blog-page spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="section-title">
                            <h2>НОВОСТИ</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="news-container">
                    {blogPosts.map((post, index) => (
                        <NewsItem post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export { News };