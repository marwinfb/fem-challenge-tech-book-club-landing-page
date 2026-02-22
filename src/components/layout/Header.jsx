import assets from '../../assets/assets'
import Navigation from './Navigation';
import Container from '../shared/Container';
import Hero from './Hero';

const Header = () => {
  return (
    <header className="bg-primary-neutral-100 pt-6 pb-20 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${assets.patternLightBgSvg})`}}>
      <Container>
        <Navigation />
        <Hero />
      </Container>
    </header>
  );
};

export default Header;
