import { useEffect, useState } from 'react';

function RatingSelect({ select }) {
	const [selected, setSelected] = useState(10);

	useEffect(() => {
		if (select) {
			select(selected);
		}
	}, [selected, select]);

	const handleChange = (e) => {
		const value = +e.currentTarget.value;
		setSelected(value);
	};

	return (
		<ul className='rating'>
			{[...Array(10)].map((_, idx) => {
				const num = idx + 1;
				return (
					<li key={num}>
						<input
							type='radio'
							id={`num${num}`}
							name='rating'
							value={num}
							onChange={handleChange}
							checked={selected === num}
						/>
						<label htmlFor={`num${num}`}>{num}</label>
					</li>
				);
			})}
		</ul>
	);
}

export default RatingSelect;
