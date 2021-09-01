import React from 'react'

export default class AutoComplateText extends React.Component {
    constructor(props) {
        super(props)
        this.state = { suggestions: [], text: '' }
    }

    onTextChange = (e) => {
        const { items } = this.props
        const value = e.target.value
        let suggestions = []
        if (value.length > 0) {
            const rgx = new RegExp(`^${value}`, 'i')
            suggestions = items.sort().filter(v => rgx.test(v))
        }
        this.setState(() => ({ suggestions, text: value }))
    }

    suggestionSelected(value) {
        this.setState(() => ({
            text: value,
            seggustions: []
        }))
    }

    renderSuggestion() {
        const { suggestions } = this.state
        if (suggestions.length === 0) {
            return null
        }

        return (
            <ul>
                {suggestions.map(item => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        )
    }



    render() {
        const { text } = this.state
        return (
            <div>
                <input
                    value={text}
                    onChange={this.onTextChange}
                    dir="rtl"
                    type="text"
                    placeholder={'שם יישוב, אזור או עסק'}
                    className='searchParts'
                />
               {
                   this.renderSuggestion() !== null ? <div className="AutuoComplateText">{this.renderSuggestion()}</div> : null
               }
            </div>
        )
    }
}