import './App.css';
import ReactMarkdown from 'react-markdown';
import RemarkGFM from 'remark-gfm';
import RemarkGemoji from 'remark-gemoji';

function App() {
  const plugins = [RemarkGFM, RemarkGemoji]

  return (
    <div className="App">
      <header className="App-header">
        <ReactMarkdown children="hello world" plugins={plugins} />
      </header>
    </div>
  );
}

export default App;
