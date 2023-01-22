
function Card() {
	return(
		<div className="card">
		<div className='favorite'><img src="img/btn/heart-unliked.svg" alt="" /></div>
		<img width={133} height={133} src="img/sneakers/1.jpg" alt="sneakers" />
		<p>Кроссовки Puma X Aka Boku Future Rider</p>
		<div className="d-flex justify-between align-center">
			<div className="d-flex flex-column">
				<span>Стоимость:</span>
				<b>12 999 руб.</b>

			</div>
			<button>
				<img src="img/plus.svg" alt="" />
			</button>
		</div>
	</div>
	);

}


export default Card