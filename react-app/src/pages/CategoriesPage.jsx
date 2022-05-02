import { useState } from 'react';
import { useParams } from "react-router";
import { News } from '../Components/News/News';

import Query from '../Components/Query';
import CATEGORY_ARTICLES_QUERY from '../queries/category/articles'



function NewsPage() {
    let { slug } = useParams();
    const [popupActive, setPopupActive] = useState(false);
    const [popupImg, setPopupImg] = useState('Тут должна быть картинка ^,,^');
    return (
        <Query query={CATEGORY_ARTICLES_QUERY} slug={slug}>
            {({ data: { articles } }) => {
                return (
                    <>
                        <News
                            active={popupActive}
                            setActive={setPopupActive}
                            popupImg={popupImg}
                            setImage={setPopupImg}
                            articles={articles}
                        />
                    </>
                )
            }}
        </Query>
    );
}

export { NewsPage };