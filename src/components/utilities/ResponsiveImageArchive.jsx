const ResponsiveImage = ({ desktopSrc, tabletSrc, mobileSrc, alt, className = 'rounded-lg w-full', pictureClassName = '', }) => {
  return (
    <picture className={pictureClassName}>
      {tabletSrc && (
        <source media="(max-width: 1024px)" srcSet={tabletSrc} type="image/webp" />
      )}
      <source srcSet={desktopSrc} type="image/webp" />
      <img src={mobileSrc || tabletSrc || desktopSrc} alt={alt} className={className} />
    </picture>
  );
};

export default ResponsiveImage;