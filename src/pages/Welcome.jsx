import { Link } from "react-router-dom";

const Welcome = () => {
	return (
		<>
			<h1>Welcome to this amazing shop</h1>
			<Link to='/shop'>Let&apos;s get started</Link>
		</>
	);
};

export default Welcome;
