import { Header } from '../Header/Header';

function SingleNews() {
    return (
        <>
            <Header />
            {/* Blog Single Section Begin */}
            <section className="blog-single-section spad">
                <div className="row blog-grid">

                    <div className="col-lg-8">
                        <div className="blog-single-text">
                            <div className="blog-text">
                                <p>
                                    I know how terrible it can be for you at nights and even when you wake up. The burning
                                    back pain you experience can be a terrible problem. I know that because of this burning
                                    pain, you hardly get all the sleep you need at nights. You are not alone… and thankfully
                                    there are workable solutions that you can use to not only prevent future causes, but
                                    also solve the present back pain you are experiencing. Experts have agreed that the kind
                                    of mattress you sleep on plays a very important role in back pains suffered by most
                                    people. There are some mattresses that do you a lot of harm when you sleep on them. And
                                    the fact that you spend many hours EVERYDAY on such mattresses will only mean one thing!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Blog Single Section End */}
        </>
    );
}

export { SingleNews };