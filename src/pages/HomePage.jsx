import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "./HomePage.css";

function HomePage() {
	const navigate = useNavigate();

	const handleClick = (path) => {
		navigate(`./${path}`);
	};

	return (
		<>
			<h1 className="title">Le yoga du rire c'est quoi ?</h1>

			<div className="allText">
				<p className="text">
					Le yoga du rire est une méthode où l'on rit intentionnellement pour se
					sentir mieux.
				</p>
				<p className="text">
					C'est comme un entraînement pour le corps et l'esprit où on combine
					des exercices de respiration et des jeux pour rire sans raison
					particulière.
				</p>

				<p className="text">
					Ça aide à réduire le stress et à se sentir plus heureux.
				</p>
			</div>
			<div className="button">
				<div className="button1">
					<button
						className="button-SOLO"
						onClick={() => handleClick("solopage")}
					>
						Rire seul
					</button>
				</div>
				<div className="buuton2">
					<button
						className="button-MULTI"
						onClick={() => handleClick("multiaccueil")}
					>
						Rire à plusieurs
					</button>
				</div>
				<div className="button3">
					<button
						className="button-home-instructions"
						onClick={() => handleClick("instructions")}
					>
						Instructions
					</button>
				</div>
			</div>
		</>
	);
}

export default HomePage;
