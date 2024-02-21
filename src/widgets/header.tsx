import React, { useState } from "react";
import { NavbarLink } from "../shared/NavbarLink";
import { Fade, Flip, Slide, Bounce, Reveal, Hinge, JackInTheBox, Roll, Rotate, Zoom } from "react-awesome-reveal";
import SettingsLogo from "./icons/settings.svg";
import ListViewLogo from "./icons/list.svg";
import { useResize } from "../app/hooks/useResizeHook";
import { HeaderButton } from "../shared/buttons/HeaderButton";
import { SectionMenu } from "./sidebar";

export const Header = (props: any): React.JSX.Element => {

    const [sidebarIsOpen, handleSidebarStatus] = useState(false);

    const mobileWidth: number = 685;
    const currentWidth: number = useResize(); 
    /*
    Потом можно будет заменить на пропс из компонента страницы
        А то получится большая нагрузка может появиться в других компонентах
    */ 
                                            
    


    return <>
            <Fade direction="down" duration={500}>
                <header className="header">

                {currentWidth>mobileWidth?(
                    // Текущее разрешение от 685 пикселей
                    <>
                        <nav className="header__nav">
                        
                            <div className="header__nav-item"><NavbarLink text="Главная"/></div>
                            <div className="header__nav-item"><NavbarLink text="О нас"/></div>
                            <div className="header__nav-item"><NavbarLink text="События"/></div>
                            <div className="header__nav-item"><NavbarLink text="Сообщество"/></div>
                            <div className="header__nav-item"><NavbarLink text="Новости"/></div>
                        </nav>

                        <nav className="header__nav-settings">
                            <HeaderButton src={SettingsLogo} click={():void => {console.log("Iy")}}/>
                        </nav>
                    </>
                ):(
                <nav className="header__nav-settings">
                    <HeaderButton src={ListViewLogo} click={():void => {handleSidebarStatus(!sidebarIsOpen)}}/>
                    </nav>
                
                )}
                

            </header>
            {sidebarIsOpen===true?(<Fade direction="down"  duration={1000}><SectionMenu/></Fade>):(<div>No menu</div>)}
        </Fade>
        
        </>

}