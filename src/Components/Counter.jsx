import React from "react";
import Slices from "../Redux/Slices/Slices";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../Redux/Slices/Slices";

const Counter = () => {
	const count = useSelector((state) => state.SlicesData.val);
	const dispatch = useDispatch();

	return (
		<div>
			<button
				onClick={() => {
					dispatch(increment());
				}}
			>
				INCREMENT
			</button>
			<h2>{count}</h2>
			<button
				onClick={() => {
					dispatch(decrement());
				}}
			>
				DECREMENT
			</button>
		</div>
	);
};

export default Counter;
