import React from 'react';
import ActionButton from '@components/Utils/ActionButton';
import LayersRender from '@components/layers/LayersRender';
import layerCreateSVG from '@assets/icons/layers/layerCreate.svg';
import layerDeleteSVG from '@assets/icons/layers/layerDelete.svg';
import { useAppDispatch } from '@redux/store';
import { addLayer } from '@redux/layers/layersSlice';

function Layers() {
	const dispatch = useAppDispatch();

	const layerCreateHandler = () => {
		dispatch(addLayer());
	};

	return <div className='full section'>
		<div className='action-buttons'>
			<ActionButton svg={layerCreateSVG} alt='+' title='Layer create' callback={layerCreateHandler} />
			<ActionButton svg={layerDeleteSVG} alt='-' title='Layer delete' callback={() => {return;}} />
		</div>
		<LayersRender />
	</div>;
}

export default Layers;
