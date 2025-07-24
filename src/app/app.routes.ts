import {Routes} from '@angular/router';
import {Home} from './components/home/home';
import {About} from './components/about/about';
import {Contact} from './components/contact/contact';
import {Gallery} from './components/gallery/gallery';
import {notFound} from './components/notfound/filenotfound';
import {Web} from './components/gallery/components/web/web';
import {Mobile} from './components/gallery/components/mobile/mobile';

export const routes: Routes = [

  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    title: "Home-page",
    path: "home",
    component: Home,
  },
  {
    title: "About-page",
    path: "about",
    component: About,
  },
  {
    title: "Contact-page",
    path: "contact",
    component: Contact,
  },
  {
    title: "Gallery-page",
    path: "gallery",
    component: Gallery,
    children: [
      {
        path: "web",
        component: Web,
      },
      {
        path: "mobile",
        component: Mobile,
      }
    ]
  },
  {
    title: "Not-Found",
    path: "**",
    component: notFound,
  },
];
