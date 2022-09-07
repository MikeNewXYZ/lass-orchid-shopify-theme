const animateOnView = (
  element,
  initClasses = [],
  onViewClasses = [],
  options = {
    threshold: 0.5
  }
) => {
  element.classList.add(...initClasses)

  const observer = new window.IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return

    element.classList.remove(...initClasses)
    element.classList.add(...onViewClasses)

    element.addEventListener("animationend", (event) => {
      event.stopPropagation()
      element.classList.remove(...onViewClasses)
    }, {once: true})

    observer.disconnect()
  }, {root: null, threshold: options.threshold})

  observer.observe(element)
}