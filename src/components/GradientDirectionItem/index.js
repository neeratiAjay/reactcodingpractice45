// Write your code here
import {ListItem, CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {button, onClickBtn, isActive} = props
  const {directionId, value, displayText} = button

  const onChangeDirection = () => {
    onClickBtn(value)
  }
  return (
    <ListItem>
      <CustomButton
        type="button"
        isActive={isActive}
        onClick={onChangeDirection}
      >
        {displayText}
      </CustomButton>
    </ListItem>
  )
}

export default GradientDirectionItem
