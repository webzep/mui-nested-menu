// import React, { useEffect, useState } from 'react';
// import { Outlet, useNavigate, useLocation } from 'react-router-dom';
// import styled from '@emotion/styled';
// import { cleanRoute, getRoutesList } from '@/core/routeMap';
// import { Column } from 'ui';
// // import {
// // 	NavigationRail,
// // 	Surface,
// // 	Flex,
// // 	Spacer,
// // 	Container,
// // } from 'themestress/components';

// const StyledPage = styled.div`
//     height: calc(100vh - 60px);
//     width: 100vw;
//     display: flex;
//     flex-direction: row;
// `;

// const StyledScrollable = styled.div`
//     overflow: auto;
// `;

// const StyledMenuSurface = styled.div`
//     overflow: auto;
//     background-image: var(--sys-overlay-level-1);
// `;

// export const Home = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const [menuIndex, setMenuIndex] = useState(0);

//     // Set getting started as default page
//     useEffect(() => {
//         // Default route to installation
//         if (location.pathname === '/') navigate('installation');

//         // Set the correct menu index
//         const path = cleanRoute(location.pathname);
//         // setMenuIndex(getRoutesList().findIndex((v) => v === path));
//     }, [location.pathname]);

//     const handleClick = (tab: string) => navigate(tab);

//     return (
//         <Column>
//             <StyledPage>
//                 <StyledMenuSurface>
//                     {/* <NavigationRail selected={menuIndex} onTabChanged={(i) => setMenuIndex(i)}>
//                         <Spacer size={'220px'} />
//                         {getMenuItems(handleClick)}
//                     </NavigationRail> */}
//                 </StyledMenuSurface>

//                 {/* <StyledScrollable width="100%" padding={10} bgColor="var(--sys-color-surface)">
//                     <Container>
//                         <Outlet />
//                     </Container>
//                 </StyledScrollable> */}
//             </StyledPage>
//         </Column>
//     );
// };
