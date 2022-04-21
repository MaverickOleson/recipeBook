import React, { useState, useRef, useEffect } from 'react';

export default function Book({ pages, filters }) {
	const [pageIndex, setPageIndex] = useState(-1);
	const [curFilters, setCurFilters] = useState([]);
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

	function filteredPages() { return pages.filter(page => curFilters.every(filter => page[1].includes(filter))) };

	function getPageInfo() {
		if (!filteredPages().length) {
			page1.current.style.display = 'none';
			return <h1>No Items</h1>
		} else if (page1.current && pageIndex !== -1) {
			page1.current.style.display = 'block';
		}
		if (pageIndex === -1) return null;
		if (pageIndex >= filteredPages().length) {
			setPageIndex(filteredPages().length - 1);
			return filteredPages()[filteredPages().length - 1][0]
		};
		return filteredPages()[pageIndex][0];
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
				if (!curFilters.length) {
					if (pageIndex !== pages.length - 1) return setPageIndex(pageIndex + 1);
					return;
				}
				if (pageIndex !== filteredPages().length - 1) setPageIndex(pageIndex + 1);
			}}>{getPageInfo() || <h1 className='pageTitle'>My Recipe Book</h1>}</div>
		</div>
	</>
}