import React, { useMemo, useState } from "react"
import { createBrowserHistory } from "history"
import { Router, Route } from "react-router-dom"
import HomePage from "../src/pages/home"

import { Gradient } from "react-gradient"
import "../src/layout/css/App.css"

import AppContext, { init } from "./components/AppContext"
import DetailsPage from "./pages/products/details"

const App = () => {
	const [getState, setAppState] = useState(init())
	const history = useMemo(() => createBrowserHistory(), [])

	const gradients = [["#50b65d", "#00a0a8"], ["#6dd5ed", "#2193b0"]]

	/** @type {AppState} */
	const AppContextValue = {
		history,
		...getState,
		setAppState
	}

	const styles = {
		root: {
			height: window.innerWidth < 620 ? "100vmax" : "100vmin"
			// overflow: "hidden"
			// position: "absolute",
			// top: 0
		}
	}
	return (
		<AppContext.Provider value={AppContextValue}>
			<Router history={history}>
				<Route path="/" exact component={HomePage} />
				<Route
					path="/produtos/detalhes/:id"
					exact
					component={DetailsPage}
				/>
			</Router>
		</AppContext.Provider>
	)
}
{
	/* <Gradient
				gradients={gradients} // required
				property="background"
				duration={1500}
				angle="180deg">
				<div style={styles.root}>
					<div
						style={{
							paddingTop: "10%",
							padding: "1em"
						}}
						className="flex-col  center-a center-b">
						<div className="flex-row center-a">
							<img
								style={{
									width: "60%",
									maxHeight: "391.188px",
									maxWidth: "363.016px",
									height: "60%"
								}}
								src={require("../src/assets/imgs/logo_medita.png")}
								alt=""
							/>
						</div>
						<div
							className="flex-row center-a"
							style={{
								width: "100%",
								padding: "1em",
								height: "100%"
							}}>
							<h4 style={{ color: "#fff", textAlign: "center" }}>
								Estamos mudando o nosso site para oferecer para
								você muitas novidades.
								<br />
								<br />
								Aguarde. Em breve, o Medita estará de cara nova.
								<br />
								<br />
								<br />
								<br />
								<br />
								<i>
									<span
										style={{
											fontSize: "1em"
											// textShadow:
											// 	"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
										}}>
										Meditação e bem estar em qualquer lugar.
									</span>
								</i>
							</h4>
						</div>
					</div>
				</div>
			</Gradient>
		*/
}

export default App
