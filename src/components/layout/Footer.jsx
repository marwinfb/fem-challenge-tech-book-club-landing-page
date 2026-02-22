import assets from "../../assets/assets";
import Container from "../shared/Container";
import Headline from "../utilities/Headline";
import Button from "../utilities/Button";
import Users from "../utilities/Users";
import Arrow from "../utilities/Arrow";

const Footer = () => {
  return (
    <footer className="bg-primary-neutral-900" style={{ backgroundImage: `url(${assets.patternDarkBgSvg})`}}>
      <Container>
        <div className="pt-20 pb-16">
          <Headline className="text-primary-neutral-000 text-center mx-auto">
            Ready to debug your reading list?
          </Headline>
          <div className="text-center mt-10 space-y-8 w-full max-w-100 mx-auto">
            <Button
              variant="secondary"
              className="flex items-center justify-between gap-3"
              href="#membership"
            >
              Review membership options <Arrow direction="up" />
            </Button>
            <Users className="text-primary-neutral-000" />
          </div>
        </div>
        <div className="py-6 border-t text-center flex flex-col lg:flex-row gap-4 items-center lg:justify-between border-primary-neutral-700 -mx-4">
          <p className="text-primary-neutral-000 headline">© 2024 - Tech Book Club</p>
          <ul className="flex items-center gap-6">
            <li><a href="#"><img src={assets.logoBlueskySvg} alt="Bluesky" className="w-6 h-6"/></a></li>
            <li><a href="#"><img src={assets.logoLinkedinSvg} alt="LinkedIn" className="w-6 h-6"/></a></li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
