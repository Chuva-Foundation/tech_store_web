import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from 'react-router-dom';


function MenuButton() {

  
const navigate = useNavigate();

const handleLoginClick = () => {
  navigate('/login');
}

const handleRegisterClick = () => {
  navigate('/register')
}

  return (
    <DropdownButton id="dropdown-basic-button" title="Conta">
      <Dropdown.Item onClick={handleLoginClick}>Entrar</Dropdown.Item>
      <Dropdown.Item onClick={handleRegisterClick}>Registar</Dropdown.Item>
    </DropdownButton>

  );
}
export default MenuButton;

