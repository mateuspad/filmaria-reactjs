import './header.css';
import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <Header>
            <Link className='logo' to="/">Filmaria</Link>
            <Link className='favoritos' to="/favoritos">Salvos</Link>
        </Header>
    )
}
