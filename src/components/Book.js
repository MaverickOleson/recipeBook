import React, { useEffect } from 'react';

export default function Book({ pages }) {
	var page = 0;
	var pageSwitch = false;
	function flipBook(e) {
		if (!page) {
			page++;
			e.target.parentElement.classList.add('openBook');
			e.target.addEventListener('animationend', animEnd);
			function animEnd(ev) {
				if (ev.animationName === 'halfTurnPage') {
					e.target.style.zIndex = 0;
					e.target.removeEventListener('animationend', animEnd);
				}
			}
			return e.target.classList.add('turnPage');
		}
		if (page === 1) {
			page++;
			console.log(page)
			if (pageSwitch) {
				pageSwitch = false;
				return e.target.previousElementSibling.style.display = 'none'
			}
			pageSwitch = true;
			e.target.addEventListener('animationend', animEnd);
			function animEnd(ev) {
				if (ev.animationName === 'halfTurnPage') {
					e.target.style.zIndex = 1;
					e.target.removeEventListener('animationend', animEnd);
				}
			}
			return e.target.classList.add('turnPage');
		}
		if (page === 2) {
			console.log(page, '2')
			page--;
			if (pageSwitch) {
				pageSwitch = false;
				e.target.addEventListener('animationend', animEnd);
				function animEnd(ev) {
					if (ev.animationName === 'halfTurnPage') {
						e.target.style.zIndex = 2;
						e.target.removeEventListener('animationend', animEnd);
					}
				}
				return e.target.classList.add('turnPage');
			}
			pageSwitch = true;
			return e.target.style.display = 'none'
		}
	}
	return <div className='book'>
		<div className="page" onClick={e => flipBook(e)}>Cover</div>
		<div className="page" onClick={e => flipBook(e)}>Page1</div>
		<div className="page" onClick={e => flipBook(e)}>Page2</div>
		<div className="page" onClick={e => flipBook(e)}>Page3</div>
	</div>
}