const ResponsiveImage = ({ desktopSrc, tabletSrc, mobileSrc, alt, className = 'rounded-lg w-full', pictureClassName = '', }) => {
  return (
    <picture className={pictureClassName}>
      {desktopSrc && (
        <source media="(min-width: 1025px)" srcSet={desktopSrc} type="image/webp" />
      )}
      {tabletSrc && (
        <source media="(min-width: 768px) and (max-width: 1024px)" srcSet={tabletSrc} type="image/webp" />
      )}
      <img src={mobileSrc || tabletSrc || desktopSrc} alt={alt} className={className} />
    </picture>
  );
};

export default ResponsiveImage;