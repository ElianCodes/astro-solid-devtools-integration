import { type JSX } from "solid-js";
import "solid-devtools";

interface Props {
	children: JSX.Element;
}

export default function ({ children }: Props) {
	return (<>{ children }</>);
}
