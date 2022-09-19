function quizSetup() {
	//  Step-quiz
	try {
		function stepForm() {
			const steps = document.querySelectorAll('.form__step-inner')
			const prevBtn = document.querySelector('.prev__step')
			const nextBtn = document.querySelector('.next__step')
			const form = document.querySelector('.steps__form')
			const stepNumbers = document.querySelectorAll('.step__number')
			const btnQuiz = document.querySelector('#btn__quiz-start')
	
			form.addEventListener('submit', (e) => e.preventDefault());
	
			let formStepIndex = 0;
	
			prevBtn.addEventListener('click', () => {
				formStepIndex--;
	
				stepNumbers[formStepIndex + 1].classList.remove('color-flex');
	
				updateformSteps();
				destroySlidersByStep(formStepIndex + 1);
				updateformNumber();
			});
	
			btnQuiz.addEventListener('click', (e) => {
				e.preventDefault();
				formStepIndex++;
				updateformSteps();
				updateformNumber();
			});
	
			nextBtn.addEventListener('click', () => {
				formStepIndex++;
				updateformSteps();
				destroySlidersByStep(formStepIndex -1);
				updateformNumber();
			});

			function destroySlidersByStep(step) {
				const slidersIds = getSlidersIdsByStep(step);

				if(slidersIds && Array.isArray(slidersIds)) {
					slidersIds.forEach(id => {
						destroySlider(sliders[Number(id)].classname);
					})
				} else if(slidersIds && typeof slidersIds === 'number') {
					destroySlider(sliders[slidersIds].classname);
				}
			}

			function initSlidersByStep(step) {
				const slidersIds = getSlidersIdsByStep(step);

				if(slidersIds && Array.isArray(slidersIds)) {
					slidersIds.forEach(id => {
						initSlider(sliders[Number(id)].classname, sliders[Number(id)].options);
					})
				} else if(slidersIds && typeof slidersIds === 'number') {
					initSlider(sliders[slidersIds].classname, sliders[Number(slidersIds)].options);
				}
			}

			function getSlidersIdsByStep(step) {
				return steps[step].getAttribute('data-sliders') ? JSON.parse(steps[step].getAttribute('data-sliders')) : null;
			}
	
			function updateformSteps() {
				steps.forEach(step => {
					step.classList.contains('active') && step.classList.remove('active');
				})
	
				steps[formStepIndex].classList.add('active');
				stepNumbers[formStepIndex].classList.add('color-flex');

				initSlidersByStep(formStepIndex);
	
				if (formStepIndex === 0) {
					prevBtn.style.display = 'none';
					nextBtn.style.display = 'none';
				} else {
					prevBtn.style.display = 'block';
					nextBtn.style.display = 'block';
				}
	
				if (formStepIndex === steps.length - 1) {
					nextBtn.style.display = 'none';
				}
			}
			updateformSteps();
	
			function updateformNumber() {
				stepNumbers.forEach(number => {
					number.classList.contains('active__number') && number.classList.remove('active__number');
				})
				stepNumbers[formStepIndex].classList.add('active__number');
			}
			updateformNumber();

			// const btnAssortmentStep = document.querySelector('.assortment__link');
			// let secondStepAssortment = 1;
			// btnAssortmentStep.addEventListener('click', ()=>{
			// 	goStep(secondStepAssortment)
			// })
			// function goStep(index){
			// 	let secondStep = index;
			// 	updateformSteps();
			// 	updateformNumber();
			// }

			
	
		}
		stepForm();
	} catch (e) {
		console.log(e);
	}
}

