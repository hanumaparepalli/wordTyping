import {Component} from 'react'

import './index.css'

class Wordtype extends Component {
  state = {
    generatedSentence1: '',
    generatedSentence2: '',
    generatedSentence3: '',
    generatedSentence4: '',
    inputText: '',
    isTimerRunning: false,
    timeElapsedInSeconds: 0,
    accuracy: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  generateRandomSentence1 = () => {
    const sentences = [
      'ad ag ad ag ad ag ad ag',
      'ah al ah al ah al ah al',
      'as da as da as da as da',
      'fa ha fa ha fa ha fa ha',
      'ja ka ja ka ja ka ja ka',
      'la sh la sh la sh la sh',
    ]
    const randomIndex = Math.floor(Math.random() * sentences.length)
    this.setState({generatedSentence1: sentences[randomIndex]})
  }

  generateRandomSentence2 = () => {
    const sentences = [
      'ads ags ads ags ads ags',
      'ahs alf ahs alf alf ahs',
      'als ash als ash als ash',
      'ask dag ask dag ask dag',
      'dah dak dah dak dah dak',
      'dal das dal das dal das',
      'fad fag fad fag fad fag',
      'gas had gas had gas had',
      'hag haj hag haj hag haj',
      'has jag has jag has jag',
      'jak kaf jak kaf jak kaf',
      'las sad las sad las sad',
      'sha ska sha ska sha ska',
    ]
    const randomIndex = Math.floor(Math.random() * sentences.length)
    this.setState({generatedSentence1: sentences[randomIndex]})
  }

  generateRandomSentence3 = () => {
    const sentences = [
      'alfs dags alfs dags alfs dags',
      'dahl dahs dahl dahs dahl dahs',
      'daks dals daks dals daks dals',
      'dash dhak dash dhak dash dhak',
      'dhal fads dhal fads dhal fads',
      'fags fahs fags fahs fags fahs',
      'fash flag fash flag fash flag',
      'flak gads flak gads flak gads',
      'gals gash gals gash gals gash',
      'glad hadj flad hadj glad hadj',
      'hads hags hads hags hads hags',
      'lads lakh lads lakh lads lakh',
      'slag skag slag skag slag skag',
    ]
    const randomIndex = Math.floor(Math.random() * sentences.length)
    this.setState({generatedSentence1: sentences[randomIndex]})
  }

  generateRandomSentence4 = () => {
    const sentences = [
      'dahls dhaks dahls dhaks dahls dhaks',
      'dhals flags dhals flags dhals flags',
      'flaks flash flaks flash flaks flash',
      'flask glads flask glads flask glads',
      'halfs khafs halfs khafs halfs khafs',
      'lakhs skald lakhs skald lakhs skald',
    ]
    const randomIndex = Math.floor(Math.random() * sentences.length)
    this.setState({generatedSentence1: sentences[randomIndex]})
  }

  handleInputChange = event => {
    this.setState({inputText: event.target.value})
    const {
      generatedSentence1,
      generatedSentence2,
      generatedSentence3,
      generatedSentence4,
      accuracy,
    } = this.state

    if (
      event.target.value === generatedSentence1 ||
      event.target.value === generatedSentence2 ||
      event.target.value === generatedSentence3 ||
      event.target.value === generatedSentence4
    ) {
      clearInterval(this.timeInterval)
      this.setState({isTimerRunning: false, accuracy: 100})
    }
  }

  onreset = () => {
    clearInterval(this.timeInterval)
    this.setState({
      isTimerRunning: false,
      timeElapsedInSeconds: 0,
      inputText: '',
      accuracy: 0,
    })
  }

  render() {
    const {
      generatedSentence1,
      generatedSentence2,
      generatedSentence3,
      generatedSentence4,
      inputText,
      timeElapsedInSeconds,
      accuracy,
    } = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="main-container">
        <div className="button-container">
          <button
            className="s-button"
            type="button"
            onClick={this.generateRandomSentence1}
          >
            Bigrams
          </button>
          <button
            className="s-button"
            type="button"
            onClick={this.generateRandomSentence2}
          >
            Trigrams
          </button>
          <button
            className="s-button"
            type="button"
            onClick={this.generateRandomSentence3}
          >
            Tetragrams
          </button>
          <button
            className="s-button"
            type="button"
            onClick={this.generateRandomSentence4}
          >
            Words
          </button>
        </div>
        <div>
          <p className="paragraph">{generatedSentence1}</p>
          <p className="paragraph">{generatedSentence2}</p>
          <p className="paragraph">{generatedSentence3}</p>
          <p className="paragraph">{generatedSentence4}</p>
        </div>
        <div className="input-container">
          <textarea
            rows="3"
            cols="35"
            className="input"
            placeholder="Type your text here"
            value={inputText}
            onChange={this.handleInputChange}
            onClick={this.onStartTimer}
          />
        </div>
        <h1 className="timer">{time}</h1>

        <div className="reset-btn-container">
          <button className="reset" type="button" onClick={this.onreset}>
            Reset
          </button>
        </div>

        <div className="output-container">
          <p className="wpm-para">WPM :{timeElapsedInSeconds}</p>
          <p className="accuracy">Accuracy:{accuracy}%</p>
        </div>
      </div>
    )
  }
}
export default Wordtype
