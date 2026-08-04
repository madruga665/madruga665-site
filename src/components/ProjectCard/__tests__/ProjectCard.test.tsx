import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ProjectCard from '../index';

describe('ProjectCard Component', () => {
  const mockProject = {
    id: '1',
    name: 'Sample Neobrutalism Project',
    description: 'A test project description for Neobrutalism UI.',
    image: '/assets/sample.jpg',
    tags: ['React', 'Next.js', 'SCSS'],
    githubRepository: 'https://github.com/example/repo',
    production: 'https://example.com',
  };

  it('renders project name, description, and tags', () => {
    render(<ProjectCard {...mockProject} />);

    expect(screen.getByText('Sample Neobrutalism Project')).toBeInTheDocument();
    expect(screen.getByText('A test project description for Neobrutalism UI.')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('SCSS')).toBeInTheDocument();
  });

  it('displays spinner while image is loading and hides it on load', async () => {
    render(<ProjectCard {...mockProject} />);

    const spinner = screen.getByTestId('image-spinner');
    expect(spinner).toBeInTheDocument();

    const img = screen.getByAltText('Sample Neobrutalism Project');
    fireEvent.load(img);

    await waitFor(() => {
      expect(screen.queryByTestId('image-spinner')).not.toBeInTheDocument();
    });
  });

  it('switches to fallback image on image load error', async () => {
    render(<ProjectCard {...mockProject} />);

    const img = screen.getByAltText('Sample Neobrutalism Project');
    fireEvent.error(img);

    await waitFor(() => {
      expect(img).toHaveAttribute('src', expect.stringContaining('rocket-fallback-image.jpg'));
    });
  });

  it('renders enabled production link button for active project (is_active: true or undefined)', () => {
    const { unmount } = render(<ProjectCard {...mockProject} />);
    const prodLinkUndefined = screen.getByRole('link', { name: 'Ver o projeto' });
    expect(prodLinkUndefined).not.toHaveAttribute('aria-disabled');
    expect(prodLinkUndefined).toHaveAttribute('href', 'https://example.com');

    unmount();

    render(<ProjectCard {...mockProject} is_active={true} />);
    const prodLinkActive = screen.getByRole('link', { name: 'Ver o projeto' });
    expect(prodLinkActive).not.toHaveAttribute('aria-disabled');
    expect(prodLinkActive).toHaveAttribute('href', 'https://example.com');
  });

  it('renders disabled production link button for inactive project (is_active: false)', () => {
    render(<ProjectCard {...mockProject} is_active={false} />);
    const prodLinkInactive = screen.getByRole('link', { name: 'Ver o projeto' });
    expect(prodLinkInactive).toHaveAttribute('aria-disabled', 'true');
    expect(prodLinkInactive.className).toContain('disabled');
  });
});

