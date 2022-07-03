import React from 'react'
import Header from './layout/Header/Header'
import Footer from './layout/Footer/Footer'
import Main from './layout/Main/Main'
import {ContextProvider} from "./context/context";

const App: React.FC = () => (
	<div className='App'>
		<Header/>
		<ContextProvider>
			<Main/>
		</ContextProvider>
		<Footer/>
	</div>
)

export default App
