
import Home from "@/pages/Home";
import About from "@/pages/About";
import Inbox from "@/pages/Inbox";

const routeConfig = [
    {
        path: '/',
        component: Home,
        indexRoute: { component: Home },
        childRoutes: [
            { path: 'about', component: About },
            { path: 'inbox', component: Inbox }
        ]
    }
];
export default routeConfig;