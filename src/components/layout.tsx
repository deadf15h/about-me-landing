import { FC, ReactNode } from "react";
import "./layout.sass";

type Props = { children: ReactNode };

const Layout: FC<Props> = ({ children }) => {
	return (
		<div className="layout">
			<div className="layout__inner">
				<div className="layout__body">{children}</div>
			</div>
		</div>
	);
};

export default Layout;
