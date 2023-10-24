import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
	// Initialisierung von 'data' mit 'useState', der die Daten speichern wird
	const [singleProduct, setSingleProduct] = useState();

	//direktes Destrukturieren der 'id' mit den {} aus den React-Router-Parametern => muss aber immer mit dem vorher festgelegten Param uebereinstimmen!
	const { wassermelone } = useParams();

	//! direkt das Produkt mit der API rausfiltern
	useEffect(() => {
		// Eine GET-Anfrage an die API "https://fakestoreapi.com/products" senden.
		fetch(`https://fakestoreapi.com/products/${wassermelone}`)
			.then(res => res.json()) // Die Antwort in JSON umwandeln.
			.then(resData => setSingleProduct(resData)) // Die Daten in data speichern.
			.catch(err => console.error("Fehler beim Abrufen der API-Daten", err)); // Fehlerbehandlung für die API-Anfrage.
	}, []);

	//!Alternative mit allgemeinem Fetch und danach filtern
	// // Verwendung von 'useEffect' für das Abrufen von Daten aus einer API
	// useEffect(() => {
	// 	// Eine GET-Anfrage an die API "https://fakestoreapi.com/products" senden.
	// 	fetch("https://fakestoreapi.com/products")
	// 		.then(res => res.json()) // Die Antwort in JSON umwandeln.
	// 		.then(resData => setData(resData)) // Die Daten in data speichern.
	// 		.catch(err => console.error("Fehler beim Abrufen der API-Daten", err)); // Fehlerbehandlung für die API-Anfrage.
	// }, []); // Das leere Array als Abhängigkeitsliste sorgt dafür, dass dieser Effekt nur einmal beim Laden der Komponente ausgeführt wird.

	// // Filtern der Daten, um das einzelne Produkt zu finden, das der 'id' entspricht.
	// const filteredProduct = data?.filter(elt => elt.id.toString() === id);

	return (
		<>
			{/* Überprüfen, ob 'singleProduct' existiert, bevor die folgenden Elemente gerendert werden. */}
			{singleProduct && (
				<section className='product-details'>
					{/* Anzeigen des Produktbildes und alternativen Textes */}
					<div>
						<img src={singleProduct.image} alt={singleProduct.title} />
						<p>{singleProduct.price}$</p>
					</div>

					{/* Anzeigen des Produkttitels */}
					<h2>{singleProduct.title}</h2>
					{/* Anzeigen der Produktbeschreibung */}
					<p>{singleProduct.description}</p>
				</section>
			)}
		</>
	);
};

export default Details;
