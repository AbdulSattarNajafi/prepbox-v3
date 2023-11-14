import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './layout';
import PageLoader from './components/elements/PageLoader';

const Home = lazy(() => import('./pages/home'));
const Tutoring = lazy(() => import('./pages/tutoring'));

const Worksheet = lazy(() => import('./pages/Worksheets'));
const BookDetail = lazy(() => import('./pages/Worksheets/bookcover'));
const BookMaterial = lazy(() => import('./pages/Worksheets/material'));
const SolutionPage = lazy(() => import('./pages/Worksheets/solution'));

const About = lazy(() => import('./pages/about'));
const BlogPost = lazy(() => import('./pages/blog/BlogPost'));
const PostDetail = lazy(() => import('./pages/blog/post-detail/PostDetail'));

const Support = lazy(() => import('./pages/support/Support'));
const Lectures = lazy(() => import('./pages/lectures/Lectures'));

const PrivacyPolicy = lazy(() => import('./pages/privacy-policy/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/terms/Terms'));
const ThankYou = lazy(() => import('./pages/thankYou/ThankYou'));
const NotFound = lazy(() => import('./pages/not-found/NotFound'));

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,

        children: [
            { index: true, element: <Home /> },
            { path: 'tutoring', element: <Tutoring /> },
            { path: 'about', element: <About /> },
            { path: 'blog', element: <BlogPost /> },
            { path: 'blog/:postId', element: <PostDetail /> },
            { path: 'worksheets', element: <Worksheet /> },
            { path: 'worksheets/:bookName', element: <BookDetail /> },
            { path: 'worksheets/:bookName/:chapterName/:materialName', element: <BookMaterial /> },
            {
                path: 'worksheets/:bookName/:chapterName/:materialName/:questionId',
                element: <SolutionPage />,
            },
            {
                path: 'worksheets/:bookName/:chapterName/:materialName/lectures/:topicId',
                element: <Lectures />,
            },

            { path: 'support', element: <Support /> },
            { path: 'privacy-policy', element: <PrivacyPolicy /> },
            { path: 'terms-of-use', element: <Terms /> },
            { path: 'thankyou', element: <ThankYou /> },

            //SEO pages with repetitive componenets
            { path: 'math-tutoring', element: <Home /> },
            { path: 'trigonometry-math-tutoring', element: <Home /> },
            { path: 'algebra-math-tutoring', element: <Home /> },
        ],
    },
    {
        path: '*',
        element: (
            <Suspense fallback={<PageLoader />}>
                <NotFound />
            </Suspense>
        ),
    },
]);

function App() {
    return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
