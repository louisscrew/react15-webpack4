import React from 'react';
import ReactDOM from 'react-dom';
import App from "@/App";
import MyStore from "@/store";
const store = new MyStore();

ReactDOM.render(
    <App store={store} />
    ,document.getElementById('root')
);
