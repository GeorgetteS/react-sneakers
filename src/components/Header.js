function Header(){
	return(
		<header className='header'>
		<div className='header__container'>

			<div className='header__left'>
				<img className='header__logo' src="img/logo.png" alt="" />
				<div className='header__info'>
					<h3>React sneakers</h3>
					<p>Магазин лучших кроссовок</p>
				</div >
			</div>
			<div>
				<ul className='header__right'>
					<li>
						<img src="img/cart.png" alt="" />
						<span>1205 руб.</span>
					</li>
					<li>
						<img src="img/user.png" alt="" />

					</li>
				</ul>
			</div>
		</div >

	</header>
	)
}


export default Header