import { useState } from 'react';
import { News } from '../Components/News/News';

import Query from '../Components/Query';
import ARTICLES_QUERY from '../queries/article/articles.js'



function NewsPage() {
    const [popupActive, setPopupActive] = useState(false);
    const [popupImg, setPopupImg] = useState('Тут должна быть картинка ^,,^');
    return (
        <Query query={ARTICLES_QUERY}>
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
