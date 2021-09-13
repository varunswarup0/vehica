import React from 'react'
import languages from '../../resources/api/Languages'

class LanguageSwitcher extends React.Component {
	constructor(props) {
		super(props);

		this.defaultLang = 'en-GB';

		this.state = {
			languages,
			lang: this.defaultLang
		}
	}

	get default() {
		return this.defaultLang
	}

	setDefault(e) {
		this.defaultLang = e.target.value
	}

	render() {
		return (
			<div>
				<select onChange={this.setDefault} value={this.state.lang}>
					{
						this.state.languages.map((language, i) => <option value={language.code} key={i}>{language.title}</option>)
					}
				</select>
			</div>
		)
	}
}

export default LanguageSwitcher
