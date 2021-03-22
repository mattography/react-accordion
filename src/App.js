import React from 'react';
import Accordion from './Accordion';
import {accordionData} from './utils/content';
const App = () => {
	return (
		<div className="accordion">
			{accordionData.map(({ title, content }) => <Accordion title={title} content={content} border={true}/>)}
		</div>
	);
};

export default App;
