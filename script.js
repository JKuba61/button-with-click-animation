const btn = document.querySelector(`.btn`)

const pulse = e => {
	const top = e.clientY
	const left = e.clientX
	const btnPositionTop = e.target.offsetTop
	const btnPositionLeft = e.target.offsetLeft
	const pulsePositionTop = top - btnPositionTop
	const pulsePositionLeft = left - btnPositionLeft
	const circle = document.createElement(`span`)
	circle.classList.add(`circle`)
	circle.style.top = `${pulsePositionTop}px`
	circle.style.left = `${pulsePositionLeft}px`
	e.target.append(circle)
	setTimeout(() => {
		circle.remove()
	}, 300)
}

btn.addEventListener(`click`, pulse)
