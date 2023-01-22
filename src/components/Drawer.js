function Drawer(){
	return(
		<div style={{display:"none"}} className="overlay">
		
		<div className="drawer">
		<h2 className='mb-30'>Корзин <img className='remove' src="img/btn/btn-remove.png" alt="" /> </h2>
		<div className='items'>
			<div className="cartItem d-flex align-center">
				<div className='cartItemImg mb-20' style={{ backgroundImage: "url(img/sneakers/1.jpg)" }}></div >
				<div className="mr-20">
					<p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
					<b>12 999 руб.</b>
				</div>
				<img className='remove' src="img/btn/btn-remove.png" alt="" />
			</div>
			<div className="cartItem d-flex align-center">
				<div className='cartItemImg mb-20' style={{ backgroundImage: "url(img/sneakers/2.jpg)" }}></div >
				<div className="mr-20">
					<p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
					<b>12 999 руб.</b>
				</div>
				<img className='remove' src="img/btn/btn-remove.png" alt="" />
			</div>
		</div >
		<div className='cartTotalBlock'>
			<ul >
				<li >
					<span>Итого: </span>
					<div></div>
					<b>21 498 руб. </b>
				</li>
				<li >
					<span>Налог 5%: </span>
					<div></div>
					<b>1074 руб. </b>
				</li>
			</ul>
			<button className='greenButton'>Оформить заказ <img src="img/btn/arrow.svg" alt="Arrow" /></button>
		</div >
	</div>
	</div>

	)
}

export default Drawer 