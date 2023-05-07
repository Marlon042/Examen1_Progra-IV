import { createContext, useContext } from 'react';
import { useQuery } from 'react-query';

const GitHubProjectsContext = createContext<any>({});

const useGitHubProjects = (user: string) => {
  return useQuery('githubProjects', async () => {
    const response = await fetch(`https://api.github.com/users/${user}/repos`);
    const data = await response.json();
    return data;
  });
};


const GitHubProjectsProvider = ({ children }: any) => {
  const { data } = useGitHubProjects('Marlon042');

  return (
    <GitHubProjectsContext.Provider value={{ data }}>
      {children}
    </GitHubProjectsContext.Provider>
  );
};

export const useGitHubProjectsContext = () => useContext(GitHubProjectsContext);

export default GitHubProjectsProvider;
