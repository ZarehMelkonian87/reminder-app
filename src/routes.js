import React from 'react';
import DynamicSvgIcon from './components/common/CustomIcons/DynamicSvgIcon';
const TaskPage = React.lazy(() =>
  import(/* webpackChunkName: "TaskPage" */ './pages/TaskPage'),
);
const CategoryPage = React.lazy(() =>
  import(/* webpackChunkName: "CategoryPage" */ './pages/CategoryPage'),
);
const ProfilePage = React.lazy(() =>
  import(/* webpackChunkName: "ProfilePage" */ './pages/ProfilePage'),
);

const reminderRoutes = [
  {
    name: 'Home',
    icon: <DynamicSvgIcon fill='#bebebe' icon='home' />,
    component: TaskPage,
    layout: '/user',
    path: '/',
    action: '/:action(view|create|edit)?/:id?',
    exact: true,
  },
  {
    name: 'Category',
    icon: <DynamicSvgIcon fill='#bebebe' icon='category' />,
    component: CategoryPage,
    layout: '/user',
    path: '/category',
    action: '/:action(view|create|edit)?/:id?',
    exact: false,
  },
  {
    name: 'profile',
    icon: <DynamicSvgIcon fill='#bebebe' icon='profile' />,
    component: ProfilePage,
    layout: '/user',
    path: '/profile',
    action: '',
    exact: false,
  },
];

export default reminderRoutes;
