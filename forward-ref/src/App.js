import * as React from 'react';
import ReactDOM from 'react-dom';

const InputText = React.forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));

export default function App() {
  const ref = React.useRef();

  function focus() {
    ref.current.focus();
  }

  return (
    <div className='App'>
      <InputText ref={ref} placeholder='my input' />
      <button onClick={focus}>Focus</button>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
