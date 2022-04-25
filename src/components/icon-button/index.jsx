import SvgIcon from "../svg-icon";
import StyledButton from "./styled";
const IconButton = ({ icon, text = "", onClick, type }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      <SvgIcon icon={icon} />
      {text}
    </StyledButton>
  );
};

export default IconButton;
