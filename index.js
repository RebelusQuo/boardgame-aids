import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './js/App';

createRoot(document.getElementById('app')).render(
    <StrictMode>
        <App/>
    </StrictMode>
);
