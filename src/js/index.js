/* global ga */
const text = 'Cerebro – Productivity booster with a brain...'
const input = document.getElementById('js-input-value')
const updateText = length => () => {
  input.innerText = text.substr(0, length)
  if (length > text.length) {
    input.className += ' main-input-value__animated'
    return
  }
  setTimeout(updateText(length + 1), 50 + (Math.random() * 150))
}

setTimeout(updateText(1), 100)

// Google analytics: track events
const trackEvent = (event, label) => {
  if (event && label && typeof ga !== 'undefined') {
    ga('send', 'event', 'Landing', event, label)
  }
}

// Track clicks
document.addEventListener('click', ({ target }) => {
  const label = target.getAttribute('data-track')
  trackEvent('click', label)
})

// Track form submits
document.addEventListener('submit', ({ target }) => {
  const label = target.getAttribute('data-track-form')
  trackEvent('submit-form', label)
})
