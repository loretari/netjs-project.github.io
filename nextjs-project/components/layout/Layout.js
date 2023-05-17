import classes from './Layout.module.css';
import MainNavigation from "./MainNavigation";

function Layout(props) {

    return (
        <div>
            <MainNavigation/>
            <mani className = {classes.main}>{props.children}</mani>
        </div>
    )
}

export default Layout;