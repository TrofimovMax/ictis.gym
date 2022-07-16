import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <>
            <h1>Страница не найдена. Вернитесь <Link to="/">домой.</Link></h1>;
        </>
    );
}

export { NotFoundPage };