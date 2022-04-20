import React, { useState, useRef, useEffect } from 'react';

export default function Book({ pages, filters }) {
	const [pageIndex, setPageIndex] = useState(-1);
	const [curFilters, setCurFilters] = useState(filters);
	const filtersRef = useRef();
	const page1 = useRef();
	const page2 = useRef();

	function getCurFilters(e) {
		const newCurFilters = [];
		filtersRef.current.childNodes.forEach(child => {
			if (child.type === 'checkbox' && child.checked) newCurFilters.push(child.name);
		})
		setCurFilters(newCurFilters);
	}

	function getPageInfo() {
		return pages.filter(page => page.types.filter(type => curFilters.includes(type)))[pageIndex];
	}

	if (pages) return <>
		{<div className="filters" ref={filtersRef}>
			{(filters) ? filters.map((filter) => {
				return <React.Fragment key={filter}>
					<input type="checkbox" name={filter} onClick={() => getCurFilters()} />
					<label>{filter}</label>
				</React.Fragment>
			}) : ''}
		</div>}
		<div className='staticBook'>
			<div className="staticPage" ref={page1} onClick={() => {
				if (!pageIndex) page1.current.style.display = 'none';
				setPageIndex(pageIndex - 1);
			}}></div>
			<div className="staticPage" ref={page2} style={{ display: 'block' }} onClick={() => {
				page1.current.style.display = 'block';
				if (pageIndex !== pages.length - 1) setPageIndex(pageIndex + 1);
			}}>{getPageInfo() || <h1 className='pageTitle'>My Recipe Book</h1>}</div>
		</div>
	</>
}