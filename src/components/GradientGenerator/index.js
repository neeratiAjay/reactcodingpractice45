import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  AppContainer,
  Heading,
  DirectionText,
  ButtonsContainier,
  InputContainer,
  Div,
  ColorValue,
  InputElement,
  CustomButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

// Write your code here
class GradientGenerator extends Component {
  state = {
    gradientValue: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
    firstColorInput: '#8ae323',
    secondColorInput: '#014f7b',
    activeDirection: gradientDirectionsList[0].value,
  }

  changeFirstColor = event => {
    this.setState({firstColorInput: event.target.value})
  }
  changeSecondColor = event => {
    this.setState({secondColorInput: event.target.value})
  }
  onClickBtn = value => {
    this.setState({activeDirection: value})
  }

  onGenerate = event => {
    event.preventDefault()
    const {firstColorInput, secondColorInput, activeDirection} = this.state
    this.setState({
      gradientValue: `to ${activeDirection}, ${firstColorInput}, ${secondColorInput}`,
    })
  }

  render() {
    const {gradientValue, firstColorInput, secondColorInput, activeDirection} =
      this.state
    return (
      <AppContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <DirectionText>Choose Direction</DirectionText>
        <ButtonsContainier>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              button={eachItem}
              key={eachItem.directionId}
              isActive={eachItem.value === activeDirection}
              onClickBtn={this.onClickBtn}
            />
          ))}
        </ButtonsContainier>
        <DirectionText>Pick the Colors</DirectionText>
        <InputContainer>
          <Div>
            <ColorValue>{firstColorInput}</ColorValue>
            <InputElement
              type="color"
              value={firstColorInput}
              onChange={this.changeFirstColor}
            />
          </Div>
          <Div>
            <ColorValue>{secondColorInput}</ColorValue>
            <InputElement
              type="color"
              value={secondColorInput}
              onChange={this.changeSecondColor}
            />
          </Div>
        </InputContainer>
        <CustomButton type="button"  onClick={this.onGenerate}>Generate</CustomButton>
      </AppContainer>
    )
  }
}
export default GradientGenerator
