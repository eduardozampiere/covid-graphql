import React from 'react';

import { Item, ItemHeader } from './style';

function Article({children, title}) {
	return(
		<Item>
			<ItemHeader>
				<p>{title}</p>
			</ItemHeader>
			{
				children
			}
		</Item>
	);
}

export default Article;