import { Experience } from '../entities/experience';
import { ExperienceRepository } from '../repositories/experience-repository';

export class GetExperiencesUsecase {
  private experienceRepository: ExperienceRepository;

  constructor(experienceRepository: ExperienceRepository) {
    this.experienceRepository = experienceRepository;
  }

  async execute(): Promise<Experience[]> {
    const experiences = await this.experienceRepository.getExperiences();

    const filteredExperiences = experiences.filter((experience) => {
      const isExperienceEmpty = Object.values(experience).every(
        (value) =>
          value === undefined ||
          value === null ||
          (typeof value === 'string' && value.trim() === '') ||
          (typeof value === 'number' && value === 0),
      );

      return !isExperienceEmpty;
    });

    return filteredExperiences;
  }
}
