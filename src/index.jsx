import { render } from 'preact';
import App from './App'

export function Main() {
	return < App />;
}

render(<Main />, document.getElementById('root'));
