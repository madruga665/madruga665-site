'use client';

import { useEffect, useState } from 'react';
import { Particles, initParticlesEngine } from '@tsparticles/react';
import { Container, ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log('Partículas carregadas', container);
  };

  const options: ISourceOptions = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'out',
        },
        random: true,
        speed: 0.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 160, // Quantidade de bolinhas
      },
      opacity: {
        value: { min: 0.1, max: 0.6 }, // Variação de transparência aleatória
        animation: {
          enable: true,
          speed: 0.6,
          sync: false,
        },
      },
      shape: {
        type: 'circle', // Formato de bolinha
      },
      size: {
        value: { min: 1, max: 6 }, // Tamanhos diferentes aleatórios
      },
    },
    detectRetina: true,
  };

  if (init) {
    return (
      <div style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
        <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
      </div>
    );
  }

  return null; // Mostra nada enquanto carrega
};

export default ParticlesBackground;
