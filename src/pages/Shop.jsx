import { Link } from "react-router-dom";
import "./Shop.css";
import { useEffect, useState } from "react";

const Shop = () => {
	const [data, setData] = useState();

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then(res => res.json())
			.then(resData => setData(resData))
			.catch(err => console.error("error fetching API Data", err));
	}, []);

	console.log(data);
	return (
		<>
			<h1>SuperShop</h1>
			<section className='shop-grid'>
				{data?.map((elt, index) => (
					<article key={index}>
						<div>
							<img src={elt.image} alt={elt.title} />
						</div>

						<h3>{elt.title}</h3>
						<p>{elt.price}$</p>
						<Link to={`/details/${elt.id}`}>show more</Link>
					</article>
				))}
			</section>
		</>
	);
};

export default Shop;
