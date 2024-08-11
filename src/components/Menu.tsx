import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
} from '@ionic/react';

import {useLocation} from 'react-router-dom';
import {
    archiveOutline,
    archiveSharp,
    bookmarkOutline,
    heartOutline,
    heartSharp,
    mailOutline,
    mailSharp,
    paperPlaneOutline,
    paperPlaneSharp,
    trashOutline,
    trashSharp,
    warningOutline,
    warningSharp,
} from 'ionicons/icons';
import './Menu.scss';
import {ThemeSwitcher} from "./ThemeSwitcher/ThemeSwitcher";

interface AppPage {
    url: string;
    title: string;
}

const appPages: AppPage[] = [
    {
        title: 'Мой профиль',
        url: '/profile',
    },
    {
        title: 'Список задач',
        url: '/tasks',
    },
    {
        title: 'Документы',
        url: '/folder/Favorites',
    },
    {
        title: 'Чат',
        url: '/folder/Archived',
    },
    {
        title: 'Отчеты',
        url: '/folder/Trash',
    },
    {
        title: 'Инструменты',
        url: '/folder/Spam',
    },
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
    const location = useLocation();

    return (
        <IonMenu contentId="main" type="overlay">
            <IonContent className="ion-content">
                <IonList className="nav_list">
                    {appPages.map((appPage, index) => {
                        return (
                            <IonMenuToggle key={index} autoHide={false}>
                                <IonItem className={location.pathname === appPage.url ? 'selected' : 'ion-menu-item'}
                                         routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                                    <IonLabel>{appPage.title}</IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                        );
                    })}
                </IonList>
            </IonContent>
            <ThemeSwitcher/>
        </IonMenu>
    );
};

export default Menu;
