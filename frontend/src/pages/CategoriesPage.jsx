import { useState } from 'react';
import { useParams } from "react-router";
import { News } from '../Components/News/News';

import Query from '../Components/Query/index';
import CATEGORY_ARTICLES_QUERY from '../queries/category/articles'



function CategoriesPage() {
    let { slug } = useParams();
    const [popupActive, setPopupActive] = useState(false);
    const [popupImg, setPopupImg] = useState('Тут должна быть картинка ^,,^');
    return (
        <Query query={CATEGORY_ARTICLES_QUERY} slug={slug}>
            {({ data: { categories } }) => {
                if (categories.data[0].attributes) {
                    return (
                        <>
                            <News
                                active={popupActive}
                                setActive={setPopupActive}
                                popupImg={popupImg}
                                setImage={setPopupImg}
                                articles={categories.data[0].attributes.articles}
                            />
                        </>
                    )
                }

            }}
        </Query>
    );
}

export { CategoriesPage };