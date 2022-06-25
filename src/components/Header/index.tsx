import { FiPlusSquare } from 'react-icons/fi';
import { Container } from './styles';

import GoRestaurantLogo from '../../assets/logo.svg';

interface HeaderPrpos {
  openModal: () => void
}

export default function Header({ openModal }: HeaderPrpos) {
  return (
    <Container>
      <header>
        <img src={GoRestaurantLogo} alt="GoRestaurant" />
        <nav>
          <div>
            <button
              type="button"
              onClick={openModal}
            >
              <div className="text">Novo Prato</div>
              <div className="icon">
                <FiPlusSquare size={24} />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  )
}