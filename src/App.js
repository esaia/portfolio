import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/projects/Projects';
import Default from './layouts/Default';
import ThemeContext from './context/ThemeContext';
import NotFound from './pages/404/404';
import Skills from './pages/skills/Skills';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Default>
          <Home />
        </Default>
      ),
    },
    {
      path: '/projects',
      element: (
        <Default>
          <Projects />
        </Default>
      ),
    },
    {
      path: '/skills',
      element: (
        <Default>
          <Skills />
        </Default>
      ),
    },

    {
      path: '/*',
      element: (
        <Default>
          <NotFound />
        </Default>
      ),
    },
  ]);

  return (
    <>
      <ThemeContext>
        <RouterProvider router={router} />
      </ThemeContext>
    </>
  );
}

export default App;
