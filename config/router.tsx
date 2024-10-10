import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import NotFound from '@/components/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '*', // 匹配所有未定义的路由
    element: <NotFound />,
  },
]);

export default router;
