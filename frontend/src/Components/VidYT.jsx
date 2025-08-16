import React from 'react'
import YouTube from 'react-youtube';

const VidYT = (props) => {
	const opts = {
		width: '640',
		height: '360',
		playerVars: {
			autoplay: 1,
			playlist: props.vID,
			loop: 1,
		},
	};

	return <YouTube videoId={props.vID} opts={opts} />
}

export default VidYT;
