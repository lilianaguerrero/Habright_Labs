class Homepage extends React.Component {
	render(){

		return( 
            <div>
            <p>Welcome</p>
            <a href="/cards">Click here to view the trading cards.</a>
            <img src="/static/img/balloonicorn.jpg"/>
        </div>
        );
	}
}

ReactDOM.render(<Homepage />, document.getElementById('app'));