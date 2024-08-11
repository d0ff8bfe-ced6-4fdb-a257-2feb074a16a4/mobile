import {IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import {Redirect, Route} from 'react-router-dom';
import Menu from './components/Menu';
import Profile from './pages/Profile/Profile';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/light.scss';
import './theme/dark.scss';
import {ThemeProvider, useTheme} from "./utils/ThemeProvider";
import {classNames} from "./utils/classNames";

setupIonicReact();

const App: React.FC = () => {
    const {theme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <IonApp>
                <IonReactRouter>
                    <IonSplitPane contentId="main">
                        <Menu/>
                        <IonRouterOutlet id="main">
                            <Route path="/" exact={true}>
                                <Redirect to="/profile"/>
                            </Route>
                            <Route path="/profile" exact={true}>
                                <Profile/>
                            </Route>
                        </IonRouterOutlet>
                    </IonSplitPane>
                </IonReactRouter>
            </IonApp>
        </div>
    );
};

export default App;
