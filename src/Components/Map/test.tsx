import { render, screen } from '@testing-library/react';
import Map from '.';

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />);
    //permite que eu renderize os componentes
    // screen.logTestingPlaygroundURL();
    //cria uma URL renderizando o que eu quero
    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i,
      })
    ).toBeInTheDocument();
    //'espero que as informações sejam passadas'
  });

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Petrópolis',
      slug: 'petrópolis',
      location: {
        latitude: 0,
        longitude: 0,
      },
    };
    //variável com informações que eu quero que ele busque para testar

    render(<Map places={[place]} />);
    expect(screen.getByTitle(/petrópolis/i)).toBeInTheDocument();
    //'espero encontrar o Titulo procurado no documento - usamos o /name/i porque pode star com letra maiuscula, minuscula etc.
  });
});
