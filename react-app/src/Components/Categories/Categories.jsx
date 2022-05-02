import { Link } from 'react-router-dom';
import { useParams } from "react-router";

import Query from '../../Components/Query';
import CATEGORIES_QUERY from '../../queries/category/categories'

const Categories = () => {
    let { slug } = useParams();
    return (
        <>
            <Query query={CATEGORIES_QUERY} slug={slug}>
                {({ data: { categories } }) => {
                    return (
                        <div className="row">
                            <ul className="category-navbar">
                                {categories.data.map((category) => {
                                    return (
                                        <li key={category.attributes.slug}>
                                            <Link
                                                to={`/news/${category.attributes.slug}`}
                                                className="filter-link"
                                            >
                                                <h6>{category.attributes.name}</h6>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )
                }}
            </Query>
        </>
    );
}

export { Categories };