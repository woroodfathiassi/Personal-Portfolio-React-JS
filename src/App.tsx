import { RouterProvider } from "react-router-dom";
import { router } from './routerConfig';
import 'prismjs/themes/prism-tomorrow.css';
import 'normalize.css';
import '@/reset.css';

function App() {

  return (
    // className="container mx-auto py-7"
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App
