import { Project } from '../entities/project';
import { ProjectRepository } from '../repositories/project-repository';

export class GetProjectsUsecase {
  private projectRepository: ProjectRepository;

  constructor(projectRepository: ProjectRepository) {
    this.projectRepository = projectRepository;
  }

  async execute(): Promise<Project[]> {
    const projects = await this.projectRepository.getProjects();

    const filteredProjects = projects.filter((project) => {
      const isProjectEmpty = Object.values(project).every(
        (value) =>
          value === undefined ||
          value === null ||
          (Array.isArray(value) && value.length === 0) ||
          (typeof value === 'string' && value.trim() === ''),
      );

      return !isProjectEmpty;
    });

    return filteredProjects;
  }
}
