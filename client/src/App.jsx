import React from "react";
import { useRoutes } from 'react-router-dom';
import ThemeProvider from "@material-ui/core/styles/ThemeProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './navigations';
import theme from './assets/style/theme';
import GlobalStyles from './assets/style/globalStyles';

function App()
{
	const routing = useRoutes(routes);

	return (

		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{routing}
		</ThemeProvider>
	);
}

export default App;
