function RegularSection({ children, aria_label }) {
  return (
    <section className="section" aria-label={aria_label}>
        { children }
    </section>
  )
}

export default RegularSection