const animateOnView = (
  observeElement,
  animateElements = [],
  initClasses = [],
  onViewClasses = [],
  options = {
    threshold: 0.5
  }
) => {
  animateElements.forEach((el) => {
    el.classList.add(...initClasses)
  })

  const observer = new window.IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return

    animateElements.forEach((el) => {
      el.classList.remove(...initClasses)
      el.classList.add(...onViewClasses)
  
      el.addEventListener("animationend", (event) => {
        if (event.target !== this) return
        event.stopPropagation()
        
        el.classList.remove(...onViewClasses)

        clearTimeout(timeout)
      }, {once: true})
    })

    observer.disconnect()
  }, {root: null, threshold: options.threshold})

  observer.observe(observeElement)
}