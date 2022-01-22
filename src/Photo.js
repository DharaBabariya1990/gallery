import React, {useState} from 'react';
import './index.css';
import Lightbox from 'react-image-lightbox';


const Photo = (props) =>{
	let [isOpen, setIsOpen] = useState(0);
	
	return (
		<>
			<img alt={props.url.alt_description} className="imageGalaryPhoto" onClick={() => setIsOpen(true)} src={props.url.urls.thumb} key={props.url.id} />
	        {!!isOpen && (
	          <Lightbox
	            mainSrc={props.url.urls.thumb}
	            mainSrcThumbnail={props.url.urls.thumb} 
	            onCloseRequest={() => setIsOpen(false)}
	           
	          />
	        )}
		</>
		);
}
export default Photo;