import React from 'react';
import Photo from './Photo';
import { Row, Col } from 'reactstrap';

const PhotoContainer = props =>{
	const displayPhotos = () =>{
		return props.photos && props.photos.map((photo,index) =>{
			return(<React.Fragment key={index}>
					<Col sm={3}>
						<Photo  url={photo} />
					</Col>
			</React.Fragment>);
		 });
	};
	return (
		<>
		<Row>{displayPhotos()}</Row>
		</>
	);
};
export default PhotoContainer;