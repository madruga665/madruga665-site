import fs from 'fs';
import path from 'path';

describe('Neobrutalism Design Tokens', () => {
  it('should define core Neobrutalism CSS variables in neobrutalism.scss', () => {
    const scssPath = path.join(__dirname, '../neobrutalism.scss');
    const content = fs.readFileSync(scssPath, 'utf8');

    expect(content).toContain('--neo-border-width: 3px');
    expect(content).toContain('--neo-border-style: solid');
    expect(content).toContain('--neo-border-color: #000000');
    expect(content).toContain('--neo-shadow: 4px 4px 0px var(--neo-border-color)');
    expect(content).toContain('--neo-color-bg-canvas: #facc15');
    expect(content).toContain('prefers-reduced-motion');
  });

  it('should define accent color variables in colors.module.scss', () => {
    const scssPath = path.join(__dirname, '../colors.module.scss');
    const content = fs.readFileSync(scssPath, 'utf8');

    expect(content).toContain('$color-bg-main');
    expect(content).toContain('$color-yellow-accent');
    expect(content).toContain('$color-electric-pink');
    expect(content).toContain('$color-neo-border');
  });

  it('should not contain unused legacy Flat-UI color variables', () => {
    const scssPath = path.join(__dirname, '../colors.module.scss');
    const content = fs.readFileSync(scssPath, 'utf8');

    expect(content).not.toContain('$color-emerald');
    expect(content).not.toContain('$color-nephritis');
    expect(content).not.toContain('$color-clouds');
    expect(content).not.toContain('$color-midnightBlue');
    expect(content).not.toContain('$color-alizarin');
    expect(content).not.toContain('$color-sunFlower');
    expect(content).not.toContain('$color-bg-section');
    expect(content).not.toContain('$color-neon-blue');
  });
});
