import React from 'react';
import {
	StyledHeader,
	Container,
	Item,
	Brand,
	Select,
	Button,
	ContainerBottom,
} from './style';

import { useData } from '../../context/Data';

function Header() {
	const { updateData, setFilter } = useData();
	function changeHandler(e) {
		const value = e.currentTarget.selectedOptions[0].attributes.value.nodeValue;
		const type = e.currentTarget.selectedOptions[0].attributes.type.nodeValue;
		let obj = {};
		obj[type] = value;
		setFilter(obj);
	}

	return (
		<StyledHeader>
			<Container>
				<Item>
					<Brand href="/">Covid-19 | Painel</Brand>
				</Item>
				<ContainerBottom>
					<Item>
						<Select onChange={changeHandler}>
							<option value="" type="">
								Todos
							</option>
							<optgroup label="Regiões">
								<option value="Sudeste" type="region">
									Sudeste
								</option>
								<option value="Nordeste" type="region">
									Nordeste
								</option>
								<option value="Centro-Oeste" type="region">
									Centro-Oeste
								</option>
								<option value="Sul" type="region">
									Sul
								</option>
								<option value="Norte" type="region">
									Norte
								</option>
							</optgroup>

							<optgroup label="Centro-Oeste">
								<option value="DF" type="state">
									DF - Distrito Federal
								</option>
								<option value="GO" type="state">
									GO - Goias
								</option>
								<option value="MS" type="state">
									MS - Mato Grosso do Sul
								</option>
								<option value="MT" type="state">
									MT - Mato Grosso
								</option>
							</optgroup>

							<optgroup label="Nordeste">
								<option value="BA" type="state">
									BA - Bahia
								</option>
								<option value="AL" type="state">
									AL - Alagoas
								</option>
								<option value="PE" type="state">
									PE - Pernambuco
								</option>
								<option value="RN" type="state">
									RN - Rio Grande do Norte
								</option>
								<option value="SE" type="state">
									SE - Sergipe
								</option>
								<option value="CE" type="state">
									CE - Ceará
								</option>
								<option value="PB" type="state">
									PB - Paraíba
								</option>
								<option value="PI" type="state">
									PI - Piauí
								</option>
								<option value="MA" type="state">
									MA - Maranhão
								</option>
							</optgroup>

							<optgroup label="Norte">
								<option value="AM" type="state">
									AM - Amazonas
								</option>
								<option value="AC" type="state">
									AC - Acre
								</option>
								<option value="PA" type="state">
									PA - Pará
								</option>
								<option value="TO" type="state">
									TO - Tocantins
								</option>
								<option value="AP" type="state">
									AP - Amapá
								</option>
								<option value="RO" type="state">
									RO - Rondônia
								</option>
								<option value="RR" type="state">
									RR - Roraima
								</option>
							</optgroup>

							<optgroup label="Sudeste">
								<option value="SP" type="state">
									SP - São Paulo
								</option>
								<option value="RJ" type="state">
									RJ - Rio de Janeiro
								</option>
								<option value="ES" type="state">
									ES - Espírito Santo
								</option>
								<option value="MG" type="state">
									MG - Minas Gerais
								</option>
							</optgroup>

							<optgroup label="Sul">
								<option value="RS" type="state">
									RS - Rio Grande do Sul
								</option>
								<option value="PR" type="state">
									PR - Paraná
								</option>
								<option value="SC" type="state">
									SC - Santa Catarina
								</option>
							</optgroup>
						</Select>
					</Item>

					<Item float="right">
						<Button onClick={updateData}>Atualizar</Button>
					</Item>
				</ContainerBottom>
			</Container>
		</StyledHeader>
	);
}

export default Header;
