class About extends React.Component {
    render(){

        return( 
            <div>
            <p>Welcome</p>
            
            <img src="/static/img/balloonicorn.jpg"/>
        </div>
        );
    }
}


ReactDOM.render(<About />, document.getElementById('application'));