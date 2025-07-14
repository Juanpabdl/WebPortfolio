import { useState } from "react";
import { AlignJustify} from "lucide-react";
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";
import './index.css'
import { sideData } from "../../utils/data/sidebarData";

const SideBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        if(menuOpen === false){
            setMenuOpen(true);
        } else {
            setMenuOpen(false);
        }
    };

    return(
        <nav className="navbar_menu" style={{width: menuOpen === false ? 80 : 200, backgroundColor: "#1DCD9F"}}>
            <div className="burger" onClick={() => toggleMenu()}>
                <AlignJustify className="icon" size={48} color="#158063" strokeWidth={2.7}/>
            </div>
            <ul className="navbar_list" style={{display: (menuOpen === false) ? 'none' : 'flex', animation: 'ease-in-out'}}>
                {sideData.map((item, index) => {
                    return (
                        <li key={index} className="group">
                            {item.path.includes('#') ?
                                <HashLink smooth to={item.path} className="navbar_li_box">
                                    {item.icon}
                                    <span style={{display: menuOpen === false ? 'none' : 'inline-block'}}>{item.title}</span>
                                </HashLink>
                            :
                                <Link to={item.path} className="navbar_li_box">
                                    {item.icon}
                                    <span style={{display: menuOpen === false ? 'none' : 'inline-block'}}>{item.title}</span>
                                </Link>
                            }
                            
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default SideBar;