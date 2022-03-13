import './App.css';
import ProductForm from "./components/ProductForm";

function App() {
  return (
    <div className="App">
      {/* For now, we only have our single Create component.
                The "/" path is our root. When we run npm start, this will be what displays at localhost:3000 */}
            <ProductForm path="/" />
    </div>
  );
}

export default App;
