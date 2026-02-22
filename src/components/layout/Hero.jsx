import assets from '../../assets/assets';
import Arrow from '../utilities/Arrow';
import Button from '../utilities/Button';
import Users from '../utilities/Users';
import ResponsiveImage from '../utilities/ResponsiveImageArchive';
import DescriptionText from '../utilities/DescriptionText';

const Hero = () => {
  return (
    <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left */}
      <div>
        <div className="space-y-6">
          <h1 className="w-full max-w-150 headline-xl gradient-text">
            Join the ultimate tech book club
          </h1>
          <DescriptionText>
            Turn your reading time into learning time with fellow tech
            enthusiasts. Get curated recommendations, join vibrant discussions,
            and level up your skills one chapter at a time.
          </DescriptionText>
        </div>
        <div className="mt-8">
          <Button
            variant="primary"
            className="flex items-center justify-between gap-3"
            href="#membership"
          >
            Review membership options
            <Arrow direction="down" />
          </Button>
        </div>
        <div className="mt-5">
          <Users className="text-primary-neutral-700" />
        </div>
      </div>
      {/* Right */}
      <div className="">
        <ResponsiveImage
          desktopSrc={assets.imageHeroDesktopWebp}
          tabletSrc={assets.imageHeroTabletWebp}
          mobileSrc={assets.imageHeroMobileWebp}
          alt="Hero"
          className="w-full rounded-lg object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Hero;
