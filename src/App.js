import React, {useState, useEffect} from 'react';
import './App.css';
import PhotoContainer from './PhotoContainer';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-image-lightbox/style.css';
import { Container } from 'reactstrap';

function App() {
  let [demoImage, setDemoImage] = useState(null);

  useEffect(() => {
    fetch("http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0")
    .then(response => {
      if(!response.ok){
        throw Error("Error in feching Image");
      }
        return response.json();
    }).then(data => {
        setDemoImage(data);
    });
    
  },[]);

  return (
    <div className="App">
     <Container fluid={true}>
      <PhotoContainer photos={demoImage} />
      </Container>
    </div>
  );
}

export default App;