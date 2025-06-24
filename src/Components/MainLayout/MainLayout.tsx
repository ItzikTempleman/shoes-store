import "./MainLayout.css";
import {Header} from "../LayoutArea/Header/Header.tsx";
import {Menu} from "../LayoutArea/Menu/Menu.tsx";
import {Routing} from "../LayoutArea/Routing/Routing.tsx";
import {Copyrights} from "../LayoutArea/Copyrights/Copyrights.tsx";

export function MainLayout() {
    return (
        <div className="MainLayout" dir="rtl">
            <header>
                <Header/>
            </header>
            <aside>
                <Menu/>
            </aside>
            <main>
                <Routing/>
            </main>
            <footer>
                <Copyrights/>
            </footer>
        </div>
    );
}
