import React, {useState} from 'react';
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonImg,
    IonMenuButton,
    IonPage,
    IonSegment,
    IonSegmentButton,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonBadge
} from '@ionic/react';
import {useParams} from 'react-router';
import './Profile.css';
import {TaskCard} from "../../components/TaskCard/TaskCard";

const taskCards: TaskCard[] = [
    {
        title: "Разработка интерфейса",
        subtasts: [
            {value: "UI", label: "Создание макета UI"},
            {value: "UX", label: "Анализ пользовательского опыта"},
        ],
        badge: [
            {value: "important", label: "#важно"},
            {value: "design", label: "#дизайн"},
        ],
    },
    {
        title: "Тестирование приложения",
        subtasts: [
            {value: "unitTests", label: "Написание модульных тестов"},
            {value: "integration", label: "Проверка интеграций"},
        ],
        badge: [
            {value: "testing", label: "#тестирование"},
            {value: "quality", label: "#качество"},
        ],
    },
    {
        title: "Документирование кода",
        subtasts: [
            {value: "codeComments", label: "Добавление комментариев в коде"},
            {value: "wiki", label: "Обновление внутренней вики"},
        ],
        badge: [
            {value: "documentation", label: "#документация"},
            {value: "maintenance", label: "#поддержка"},
        ],
    },
    {
        title: "Оптимизация производительности",
        subtasts: [
            {value: "refactor", label: "Рефакторинг кода"},
            {value: "profiling", label: "Профилирование приложения"},
        ],
        badge: [
            {value: "optimization", label: "#оптимизация"},
            {value: "performance", label: "#производительность"},
        ],
    },
    {
        title: "Поддержка пользователей",
        subtasts: [
            {value: "support", label: "Ответы на запросы в техподдержку"},
            {value: "faq", label: "Обновление раздела FAQ"},
        ],
        badge: [
            {value: "support", label: "#поддержка"},
            {value: "communication", label: "#коммуникация"},
        ],
    },
];


const Profile: React.FC = () => {
    const {name} = useParams<{ name: string; }>();
    const [selectedTab, setSelectedTab] = useState<string>('new');

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className="ion-toolbar">
                    <div className="ion-info">
                        <IonImg
                            src="/resources/user.png"
                            alt="Profile Picture"
                        />
                        <div className="ion-info-text">
                            <p>
                                Алина Иванова
                            </p>
                            <p className="location">
                                Краснодар
                            </p>
                        </div>
                    </div>
                    <IonButtons className="menu-icon" slot="end">
                        <IonMenuButton style={{color: "var(--ion-icon-color)"}}/>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <div className="wrapper">
                    <IonSegment
                        value={selectedTab}
                        onIonChange={(e) => setSelectedTab(e.detail.value as string)}
                    >
                        <IonSegmentButton value="new">
                            <IonLabel>Новые 3</IonLabel>
                        </IonSegmentButton>

                        <IonSegmentButton value="inProgress">
                            <IonLabel>В работе 15</IonLabel>
                        </IonSegmentButton>

                        <IonSegmentButton value="overdue">
                            <IonLabel>Просрочено 0</IonLabel>
                        </IonSegmentButton>
                    </IonSegment>

                    {taskCards.map((item => (
                        <TaskCard key={item.title} title={item.title} subtasts={item.subtasts} badge={item.badge}/>
                    )))}
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Profile;
