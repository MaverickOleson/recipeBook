import React, { useState } from 'react';

export default function Book({ pages }) {
	const [pageIndex, setPageIndex] = useState(0);
	var flip = true;

	if (pages) return <div className='book'>
		<div className="page" onClick={e => {
			if (flip) {
				e.target.classList.add('turnPage');
				e.target.parentElement.classList.add('openBook');
				e.target.classList.remove('turnPageBack');
				return flip = false;
			}
			e.target.classList.add('turnPageBack');
			e.target.parentElement.classList.remove('openBook');
			e.target.classList.remove('turnPage');
			return flip = true;
		}}>Cover</div>
		<div className="page" onClick={e => {
			if (!flip) {
				e.target.classList.add('turnPage');
				e.target.classList.remove('turnPageBack');
				return flip = true;
			}
			e.target.classList.add('turnPageBack');
			e.target.classList.remove('turnPage');
			return flip = false;
		}}>{pages[pageIndex] || 'Page 1'}</div>
		<div className="page" onClick={e => {
			if (flip) {
				e.target.classList.add('turnPage');
				e.target.classList.remove('turnPageBack');
				return flip = false;
			}
			e.target.classList.add('turnPageBack');
			e.target.classList.remove('turnPage');
			return flip = true;
		}}>{pages[pageIndex + 1] || 'Page 2'}</div>
	</div>
}