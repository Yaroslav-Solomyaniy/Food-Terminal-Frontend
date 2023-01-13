import { IRoute } from '../components/navigation';

export const checkLinksByRole = (
  ListRoutes: IRoute[],
  ListRoles: string[],
): IRoute[] => {
  const tempList: IRoute[] = [];

  ListRoles.map((item: string) => {
    ListRoutes.map((route: IRoute) => {
      route.role.map((role: string) => {
        if (role === item && !tempList.includes(route)) {
          tempList.push(route);
        }

        return null;
      });

      return null;
    });

    return null;
  });

  return tempList;
};

// const Routes = [
//     { name: "Route_1", roles: ['admin','user']},
//     { name: "Route_2", roles: ['admin','moderator']},
//     { name: "Route_3", roles: ['root','user']},
// ]
//
// const myRoles = ['user'];
// const tempList = [];
// const checkRole = (Routes, Roles) => {
//     Roles.map(item => {
//             Routes.map(route => {
//                 route.roles.map(role => {
//                     if(role === item && !tempList.includes(route)){
//                         tempList.push(route)
//                     }
//                 })
//             })
//         }
//     )
// }
// checkRole(Routes, myRoles)
//
// console.log(tempList)
