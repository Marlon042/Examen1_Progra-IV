import { Carousel } from 'react-bootstrap';
import GitHubProjectsProvider, { useGitHubProjectsContext } from '../components/GitHubProjectsProvider';

const ProjectCarousel = () => {
  const { data } = useGitHubProjectsContext();

  return (
    <div>
      <h2>Proyectos</h2>
      {Array.isArray(data) && data.length > 0 && (
        <Carousel>
          {data.map((project: any) => (
            <Carousel.Item key={project.id}>
              <img
                className="d-block w-100"
                src="/black-frame.png"
                width="500"
                height="400"
                alt={project.name}
              />
              <Carousel.Caption>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default ProjectCarousel;
