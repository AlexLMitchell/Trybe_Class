function Card(props) {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={props.featureImage}
        alt={props.title}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.link} className="btn btn-primary">
          Learn more
        </a>
      </div>
    </div>
  );
}

function CardList() {
  return (
    <div className="row">
      <div className="col-sm-4">
        <Card
          featureImage="https://sebhastian.com/static/eb0e936c0ef42ded5c6b8140ece37d3e/fcc29/feature-image.png"
          title="How To Make Interactive ReactJS Form"
          description="Let's write some interactive form with React"
          link="https://sebhastian.com/interactive-react-form"
        />
      </div>
      <div className="col-sm-4">
        <Card
          featureImage="https://sebhastian.com/static/4257b49310455388f3e155f8d5ab632e/fcc29/feature-image.png"
          title="Babelify your JavaScript code"
          description="Babel make JavaScript code browser-compatible."
          link="https://sebhastian.com/babel-guide"
        />
      </div>
      <div className="col-sm-4">
        <Card
          featureImage="https://sebhastian.com/static/4d13c75e6afd3976800de29628da5ba5/fcc29/feature-image.png"
          title="JavaScript Basics Before You Learn React"
          description="Learn the prerequisites of learning React fast"
          link="https://sebhastian.com/js-before-react"
        />
      </div>
      <div className="col-sm-4">
        <Card
          featureImage="https://ksassets.timeincuk.net/wp/uploads/sites/54/2019/06/video-poster-en-0590f399.jpg"
          title="CyberPunk 2077"
          description="Jogo lindo da porra"
          link="https://www.cyberpunk.net/us/en/"
        />
      </div>
      <div className="col-sm-4">
        <Card
          featureImage="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png"
          title="JSX"
          description="WTF is JSX?"
          link="https://jasonformat.com/wtf-is-jsx/"
        />
      </div>
    </div>
  );
}

ReactDOM.render(<CardList />, document.getElementById('root'));
