import { jsx as _jsx } from "react/jsx-runtime";
import AppRouter from './routerConfig';
import 'prismjs/themes/prism-tomorrow.css';
// import '@/reset.css';
function App() {
    return (_jsx("div", { children: _jsx(AppRouter, {}) }));
}
export default App;
