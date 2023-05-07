import { Button } from 'react-bootstrap';

const Presentation = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Hi, I'm Marlon Gutiérrez V.</h1>
      <p className="lead">
        I'm a web developer and software engineer with 5 years of experience, graduated at Universidad Nacional (UNA)
      </p>
      <hr className="my-4" />
      <p>
        Check out my social media networks to know more about me :  
        <Button
          variant="outline-primary"
          size="sm"
          className="ml-2"
          href="https://linktab.co/MarlonGV"
        >
          LinkTab.co
        </Button>
      </p>
    </div>
  );
};

export default Presentation;
