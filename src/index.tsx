import React from 'react'
import * as ReactDom from 'react-dom/client'

const App = () => {
    return <div>
        <div>hello react</div>
    </div>
}

const container = document.getElementById('root');
const root = ReactDom.createRoot((container as HTMLElement));
root.render(App());
