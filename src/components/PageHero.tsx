interface PageHeroProps {
  eyebrow?: string
  title: string
  subtitle?: string
  image: string
  imageAlt: string
}

function PageHero({ eyebrow, title, subtitle, image, imageAlt }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-text">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className="page-hero-image">
        <img src={image} alt={imageAlt} />
      </div>
    </section>
  )
}

export default PageHero
