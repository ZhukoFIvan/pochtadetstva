import './App.scss'
// Import Swiper React components
import { RxHamburgerMenu } from 'react-icons/rx'
import {AiOutlineClose} from 'react-icons/ai'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles

import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import './check.css'
const App = () => {
	const [data, setData] = useState(20)
	const [isChecked, setIsChecked] = useState(false) // Состояние для checkbox
	const [isChecked2, setIsChecked2] = useState(false) // Состояние для checkbox
	const [isChecked3, setIsChecked3] = useState(false) // Состояние для checkbox
	const [isChecked4, setIsChecked4] = useState(false) // Состояние для checkbox
	const [isChecked5, setIsChecked5] = useState(false) // Состояние для checkbox
	const [isChecked6, setIsChecked6] = useState(false) // Состояние для checkbox
	const [price, setPrice] = useState(0) // Исходная цена
	const [price2, setPrice2] = useState(0) // Исходная цена
	const [sliderValue, setSliderValue] = useState(0)
	const [selectedOption, setSelectedOption] = useState('')
	const pricePerOption = 10 // Одна и та же цена для всех опций
	const [totalPrice, setTotalPrice] = useState(0)
	const [isOpen, setIsOpen] = useState(false)

	// Функция для обновления выбранной опции и общей цены
	const handleOptionChange = (event) => {
		const selectedOption = event.target.value
		setSelectedOption(selectedOption)
		setTotalPrice(pricePerOption)
	}

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked) // Инвертируем состояние checkbox
		if (!isChecked) {
			// Если checkbox был неактивным, увеличиваем цену
			setPrice(price + 500)
		} else {
			// Если checkbox был активным, уменьшаем цену
			setPrice(price - 500)
		}
	}
	const handleCheckboxChange2 = () => {
		setIsChecked2(!isChecked2) // Инвертируем состояние checkbox
		if (!isChecked2) {
			// Если checkbox был неактивным, увеличиваем цену
			setPrice(price + 500)
		} else {
			// Если checkbox был активным, уменьшаем цену
			setPrice(price - 500)
		}
	}
	const handleCheckboxChange3 = () => {
		setIsChecked3(!isChecked3) // Инвертируем состояние checkbox
		if (!isChecked3) {
			// Если checkbox был неактивным, увеличиваем цену
			setPrice(price + 500)
		} else {
			// Если checkbox был активным, уменьшаем цену
			setPrice(price - 500)
		}
	}
	const handleCheckboxChange4 = () => {
		setIsChecked4(!isChecked4) // Инвертируем состояние checkbox
		if (!isChecked4) {
			// Если checkbox был неактивным, увеличиваем цену
			setPrice(price + 500)
		} else {
			// Если checkbox был активным, уменьшаем цену
			setPrice(price - 500)
		}
	}
	const handleCheckboxChange5 = () => {
		setIsChecked5(!isChecked5) // Инвертируем состояние checkbox
		if (!isChecked5) {
			// Если checkbox был неактивным, увеличиваем цену
			setPrice(price + 500)
		} else {
			// Если checkbox был активным, уменьшаем цену
			setPrice(price - 500)
		}
	}
	const handleCheckboxChange6 = () => {
		setIsChecked6(!isChecked6) // Инвертируем состояние checkbox
		if (!isChecked6) {
			// Если checkbox был неактивным, увеличиваем цену
			setPrice(price + 500)
		} else {
			// Если checkbox был активным, уменьшаем цену
			setPrice(price - 500)
		}
	}
	const handleSliderChange = (event) => {
		const newValue = parseInt(event.target.value, 10) // Преобразуем значение в число
		setSliderValue(newValue)
		// Обновляем цену в зависимости от значения ползунка
		setPrice2(newValue * 20) // Например, увеличиваем цену на значение ползунка
	}

	return (
		<>
			<header>
				<div className='left_side'>
					<div className='logo_1'>Почта детства</div>
					<div className='logo_2'>ПД</div>
				</div>
				<div className='right_side'>
					<ul className={isOpen ? 'active_ul' : ''}>
						<li>контакты</li>
						<li>концепт</li>
						<li>о нас</li>
						<li>примеры</li>
						<li>отправить</li>
					</ul>
					<div onClick={() => setIsOpen(!isOpen)} className={isOpen ? 'active_btn' : 'mobile_btn'}>
						{isOpen ? <AiOutlineClose size={30}/> : <RxHamburgerMenu size={30} />}

					</div>
				</div>
			</header>
			<main>
				<div className='effect_1'></div>
				<div className='effect_2'></div>
				<div className='effect_3'></div>
				<div className='line_car'></div>
				<div className='block1'>
					<div className='info'>
						<div className='text'>
							<div className='title_block'>
								<h1>Сохраните ваши воспоминания</h1>
								<img src='/src/assets/IMG_5005 1.png' alt='' />
							</div>
							<div className='desc'>
								Помните, как Ваш ребенок сделал первый шаг? А как нарисовал
								первую открытку? Как пошел в первый класс? Конечно, помните! Вы
								бережно храните все эти воспоминания не только в памяти, но и у
								себя в сердце, потому что каждая мысль о ребенке делает Вас
								по-настоящему счастливым
							</div>
							<div className='desc'>
								А что, если собрать все эти воспоминания и показать, какими дети
								запомнились Вам, пока взрослели?
							</div>
							<div className='desc'>
								Поделитесь с Вашим ребенком воспоминаниями об интересных
								задумках, грандиозных планах, мечтах и желаниях, которые
								сопровождали его на протяжении всего детства.. Отправьте ему
								письмо в будущее - покажите, как сильно Вы его любите)
							</div>
						</div>
						<img src='/src/assets/PD_main.png' alt='' />
					</div>
					<a href='#'>
						<div>Отправить</div>
						<img src='/src/assets/mail.svg' alt='' />
					</a>
				</div>

				<div className='about_us'>
					<h1>О нас</h1>

					<div className='about_block'>
						<img className='about_img' src='/src/assets/about_us1.png' alt='' />
						<div className='text'>
							<div className='title_block'>
								<h2>Аккуратно и с любовью</h2>
								<img src='/src/assets/icon_2.svg' alt='' />
							</div>
							<div>
								Каждое воспоминание – это кусочек Вашей жизни, который Вы
								храните в самых глубоких уголках своей души. Мы заботливо
								соберем и сохраним каждое из них, чтобы Вы не забыли!
							</div>
						</div>
					</div>
					<div className='about_block'>
						<div className='text'>
							<div className='title_block'>
								<img src='/src/assets/icon_3.svg' alt='' />
								<h2>Соберем все за это время</h2>
							</div>
							<div>
								Путешествуйте по воспоминаниям всего лишь переворачивая
								страницы! Вернитесь в прошлое и заново ощутите те же яркие
								впечатления, которые мы соберем за все эти годы!
							</div>
						</div>
						<img
							className='about_img2'
							src='/src/assets/about_us2.png'
							alt=''
						/>
					</div>
					<div className='about_block'>
						<img
							className='about_img3'
							src='/src/assets/about_us3.png'
							alt=''
						/>
						<div className='text'>
							<div className='title_block'>
								<h2>Красота в деталях</h2>
								<img src='/src/assets/icon_4.svg' alt='' />
							</div>
							<div>
								Даже самые забавные мелочи приносят красочные эмоции. Не
								упускайте ни момента из детства Вашего ребенка, а мы кропотливо
								оформим и обратим внимание на каждую деталь!
							</div>
						</div>
					</div>
				</div>

				<div className='block_swiper'>
					<div className='effect_4'></div>
					<div className='effect_5'></div>
					<div className='effect_6'></div>
					<div className='effect_7'></div>
					<div className='ship_line'></div>
					<h1>Макеты работ</h1>
					<h3>Как может выглядеть ваше письмо</h3>
					<div className='swiper'>
						<Swiper
							modules={[Navigation, Pagination, Scrollbar, A11y]}
							spaceBetween={50}
							slidesPerView={1}
							pagination={{ clickable: true }}
							onSlideChange={() => console.log('slide change')}
							onSwiper={(swiper) => console.log(swiper)}
						>
							<SwiperSlide>
								<img src='/src/assets/mclaren.jpeg' alt='' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='/src/assets/mclaren.jpeg' alt='' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='/src/assets/mclaren.jpeg' alt='' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='/src/assets/mclaren.jpeg' alt='' />
							</SwiperSlide>
						</Swiper>
					</div>
					<h3>Видео</h3>
					<div className='video'>
						<iframe
							src='https://www.youtube.com/embed/KrLj6nc516A?si=cGh4gH6fWdWb59LI'
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowfullscreen
						></iframe>
						<a href='#'>
							<div>Скачать макет</div>
							<img src='/src/assets/download.svg' alt='' />
						</a>
					</div>
				</div>
				<div className='calc_line'></div>
				<div className='calculator_block'>
					<h1>Калькулятор цены</h1>
					<div className='calculator'>
						<h3>Вопрос на выбор</h3>
						<div className='radios'>
							<input
								type='checkbox'
								className='custom-radio'
								id='сhappy'
								name='happy'
								value='yes'
								checked={isChecked4}
								onChange={handleCheckboxChange4}
							/>
							<label for='сhappy'>Физическая копия альбома / 500 р.</label>
							<input
								type='checkbox'
								className='custom-radio'
								id='сsecond'
								name='happy'
								value='yes'
								checked={isChecked5}
								onChange={handleCheckboxChange5}
							/>
							<label for='сsecond'>Физическая копия альбома / 500 р.</label>
							<input
								type='checkbox'
								className='custom-radio'
								id='сthird'
								name='happy'
								value='yes'
								checked={isChecked6}
								onChange={handleCheckboxChange6}
							/>
							<label for='сthird'>Физическая копия альбома / 500 р.</label>
						</div>
						<h3>Список услуг</h3>
						<div className='checkboxes'>
							<input
								type='checkbox'
								className='custom-checkbox'
								id='happy'
								name='happy'
								value='yes'
								checked={isChecked}
								onChange={handleCheckboxChange}
							/>
							<label for='happy'>Физическая копия альбома / 500 р.</label>
							<input
								type='checkbox'
								className='custom-checkbox'
								id='second'
								name='happy'
								value='yes'
								checked={isChecked2}
								onChange={handleCheckboxChange2}
							/>
							<label for='second'>Физическая копия альбома / 500 р.</label>
							<input
								type='checkbox'
								className='custom-checkbox'
								id='third'
								name='happy'
								value='yes'
								checked={isChecked3}
								onChange={handleCheckboxChange3}
							/>
							<label for='third'>Физическая копия альбома / 500 р.</label>
						</div>

						<h3>Время ведения письма</h3>
						<div className='range'>
							<input
								id='slider'
								type='range'
								min={0}
								max={100}
								value={sliderValue}
								step={20}
								onChange={handleSliderChange}
							/>
							<label htmlFor='slider'></label>
							<div className='percents'>
								<div className='percent'>
									<div className='vert_line'>|</div>
									<div className='num'>5 лет</div>
								</div>
								<div className='percent'>
									<div className='vert_line'>|</div>
									<div className='num'>10 лет</div>
								</div>
								<div className='percent'>
									<div className='vert_line'>|</div>
									<div className='num'>15 лет</div>
								</div>
								<div className='percent'>
									<div className='vert_line'>|</div>
									<div className='num'>20 лет</div>
								</div>
								<div className='percent'>
									<div className='vert_line'>|</div>
									<div className='num'>25 лет</div>
								</div>
								<div className='percent'>
									<div className='vert_line'>|</div>
									<div className='num'>30 лет</div>
								</div>
							</div>
						</div>
						<div className='line'></div>
						<div className='promo'>
							<input type='text' name='' placeholder='Промокод' id='' />
						</div>
						<div className='price'>
							<div>
								Цена: <span>{price + price2} руб</span>
							</div>
						</div>
					</div>
				</div>
				<div className='letter_line'></div>
				<div className='letter_line2'></div>
				<div className='send_letter'>
					<div className='title_block'>
						<h1>Отправьте письмо прямо сейчас </h1>
						<img className='icon_5' src='/src/assets/icon5.svg' alt='' />
					</div>

					<div className='info_block'>
						<img src='/src/assets/down_letter.PNG' alt='' />

						<div className='text_block'>
							<div>
								Даже самые забавные мелочи приносят красочные эмоции. Не
								упускайте ни момента из детства Вашего ребенка, а мы кропотливо
								оформим и обратим внимание на каждую деталь!
							</div>
							<a href='#'>
								<div>отправить</div>
								<img src='/src/assets/letter.svg' alt='' />
							</a>
						</div>
					</div>
					<div className='effect_8'></div>
					<div className='effect_9'></div>
				</div>
			</main>
		</>
	)
}

export default App
