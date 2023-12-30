function StepHeader({step_number, step_name}) {
  return (
    <header className="step-header full-width">
      <div className="label"><span className="clr-accent-400">{step_number}</span> step</div>

      <h3 className="title">{step_name}</h3>

    </header>
  )
}

export default StepHeader