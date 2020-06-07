import React, { useState } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  axios.get('http://localhost:4000/')
    .then(({ data }) => setData(data))
    .catch(() => setData('api not loaded'))
  return (
    <div>Frontend app: {data}</div>
  )
}

ReactDom.render(<App />, document.getElementById("root"));
