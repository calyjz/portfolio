import headshot from "../assets/headshot.png";

const Home = () => {
    return (
        <div className="home-container">
            <div id="bio-container">
            <h1 className="mb-4">Caly Zheng</h1>
            <h2>Student software engineer with a passion in backend, cloud computing, and infrastructure.</h2>
            </div>

            <div id="image-container">
                <img id="headshot" src={headshot} className="lg:h-72"></img>
            </div>
        </div>
	);
};

export default Home;
