function ResponsiveImage({alt, mobileSrc, tabletSrc, desktopSrc, className = ''}) {
  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={desktopSrc} />
      <source media="(min-width: 768px)" srcSet={tabletSrc} />
      <img src={mobileSrc} alt={alt} className={className} loading="lazy" />
    </picture>
  )
}
export default ResponsiveImage;