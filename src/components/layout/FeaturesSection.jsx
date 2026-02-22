import assets from '../../assets/assets';
import Headline from '../utilities/Headline';
import ResponsiveImage from '../utilities/ResponsiveImageArchive';
import DescriptionText from '../utilities/DescriptionText';
import FeatureLists from './FeatureLists';

const FeatureContents = [
  {
    id: 1,
    headline: 'Read together, grow together',
    description: 'Monthly curated tech reads selected by industry experts',
    image: {
      desktop: assets.imageReadTogetherDesktopWebp,
      tablet: assets.imageReadTogetherTabletWebp,
      mobile: assets.imageReadTogetherMobileWebp,
      alt: 'Read Together',
    },
  },
  {
    id: 2,
    headline: (
    <>
      Not your average book <span className="inline-block bg-[url('./assets/images/pattern-circle.png')] bg-no-repeat bg-center bg-contain lg:px-6 lg:py-4 px-4 py-0 -ml-4 md:-ml-6">club</span>
    </>),
    description: (
      <>
        Connect with a community that speaks your language - from <strong>Python</strong> to <strong>TypeScript</strong> and everything in between. Our discussions blend technical depth with practical applications.
      </>
    ),
    image: {
      desktop: assets.imageNotAverageDesktopWebp,
      tablet: assets.imageNotAverageTabletWebp,
      mobile: assets.imageNotAverageMobileWebp,
      alt: 'Not Your Average Book Club',
    },
  },
];

const FeaturesSection = () => {
  return (
    <section className="my-16 flex flex-col gap-16">
      {FeatureContents.map((content) => (
        <div key={content.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <Headline className="text-primary-neutral-900">{content.headline}</Headline>
            {content.id === 1 && <FeatureLists className="mt-6" /> }
            {content.id === 2 && <DescriptionText className="mt-6">{content.description}</DescriptionText>}
          </div>
          <div className={`relative z-10 ${content.id === 1 ? 'lg:order-first' : ''}`}>
            <ResponsiveImage
              desktopSrc={content.image.desktop}
              tabletSrc={content.image.tablet}
              mobileSrc={content.image.mobile}
              alt={content.image.alt}
              pictureClassName="rounded-full"
              className="rounded-lg w-full"
            />
            {content.id === 2 && <img src={assets.logosTechSvg} alt="Tech Logos" className="hidden absolute md:block md:right-12 lg:right-135 md:bottom-12 h-auto" />}
          </div>  
        </div>
      ))}
    </section>
  );
};

export default FeaturesSection;
