import { VideoJS } from "./VideoJS";
import './App.css';

function App() {
	const videoJsOptions = { // lookup the options in the docs for more options
		autoplay: true,
		controls: true,
		responsive: true,
		fluid: true,
		sources: [{
			src: "http://localhost:3010/kbs.mp4",
			type: "video/mp4"
		}]
	}

	return (
		<div className="App">
			<header className="App-header">
				<div>/Volumes/My Book Duo/Media/Video/kbs.mp4</div>
				<VideoJS options={videoJsOptions} />
			</header>
		</div>
	);
}

export default App;
