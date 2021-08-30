import React from "react";
import ReactDOM from 'react-dom';
import {InteractiveHighlighter} from 'react-interactive-highlighter';
import './Highlight.css';

/*class TextWithHighlights extends React.Component {
    constructor(props) {
        super(props);
        let texttohighlight = props.name;
        console.log(texttohighlight);
        this.state = {
            text: texttohighlight,
            highlights: [{ startIndex: 63, numChars: 12 }]
        }
        this.selectionHandler = this.selectionHandler.bind(this);
    }

    selectionHandler(selected, startIndex, numChars) {
        this.setState({
            text: this.state.text,
            highights: this.state.highlights.push({
                startIndex: startIndex,
                numChars: numChars
            })
        })
    }

    render() {
        return (
            <InteractiveHighlighter
                text={this.state.text}
                highlights={this.state.highlights}
                customClass='highlighted'
                selectionHandler={this.selectionHandler}
            />
        )
    }
}*/

class TextWithHighlights extends React.Component {
    render () {
        const text = this.props.name;
        console.log(text);
        const highlights = [{ startIndex: 63, numChars: 12 }];
        return (
            <InteractiveHighlighter
                text={text}
                highlights={highlights}
                customClass='highlighted'
            />
        )
    }
}

ReactDOM.render(<TextWithHighlights />, document.getElementById('root'));
export default TextWithHighlights;