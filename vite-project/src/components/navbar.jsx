import NavbarButton from './navbarButton'
import NavbarLogo from './navbarLogo'

function NavBar(){
    return (
        <div className="navBar">
            <div className="navBarLeft">
               <NavbarLogo />
            </div>
            <div className="navBarRigth">
                <NavbarButton />
                <NavbarButton />
                <NavbarButton />
            </div>
        </div>
    );
}
export default NavBar