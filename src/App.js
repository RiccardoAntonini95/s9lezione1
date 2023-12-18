import './App.css';
import Button from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App App-header">
      <Button label="Bottone Superiore" />
      <ImageComponent url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFYvbkLYQkb7cUqq6Uy7vzOBYRTjKU-ZtGg&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFYvbkLYQkb7cUqq6Uy7vzOBYRTjKU-ZtGg&usqp=CAU" alt="lookUp" />
      <ImageComponent url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdUaZICmq_711D7p8B2JG7wdD3qK1aHrOuA&usqp=CAU" alt="lookDown" />
      <Button label="Bottone Inferiore" />
      
    </div>
  );
}

export default App;
