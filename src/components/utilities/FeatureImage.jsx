import ResponsiveImage from './ResponsiveImage';

const FeatureImage = ({
  desktopSrc,
  tabletSrc,
  mobileSrc,
  alt = 'Feature',
  className = 'rounded-lg w-full',
  pictureClassName = '',
}) => {
  return (
    <ResponsiveImage
      desktopSrc={desktopSrc}
      tabletSrc={tabletSrc}
      mobileSrc={mobileSrc}
      alt={alt}
      className={className}
      pictureClassName={pictureClassName}
    />
  );
};

export default FeatureImage;