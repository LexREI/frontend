// import { Fragment } from 'react';
// import { Disclosure, Menu, Transition } from '@headlessui/react';
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
//
// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// };
// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
// ];
// const userNavigation = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Settings', href: '#' },
//   { name: 'Sign out', href: '#' },
// ];
//
// function classNames(...classes: any[]) {
//   return classes.filter(Boolean).join(' ');
// }
//
// type Props = {
//   component: any;
// };
//
// export default function Layout(props: Props) {
//   const { component } = props;
//   return (
//     <div className="h-screen flex flex-col">
//       <Disclosure as="nav" className="border-b border-gray-200 bg-white">
//         {({ open }) => (
//           <>
//             <div className="px-4">
//               <div className="flex h-[8vh] justify-between">
//                 <div className="flex">
//                   <div className="flex flex-shrink-0 items-center">
//                     <img
//                       className="block h-8 w-auto lg:hidden"
//                       src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//                       alt="Your Company"
//                     />
//                     <img
//                       className="hidden h-8 w-auto lg:block"
//                       src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//                       alt="Your Company"
//                     />
//                   </div>
//                   <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
//                     {navigation.map((item) => (
//                       <a
//                         key={item.name}
//                         href={item.href}
//                         className={classNames(
//                           item.current
//                             ? 'border-primary text-gray-900'
//                             : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
//                           'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
//                         )}
//                         aria-current={item.current ? 'page' : undefined}
//                       >
//                         {item.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="hidden sm:ml-6 sm:flex sm:items-center">
//                   <button
//                     type="button"
//                     className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                   >
//                     <span className="absolute -inset-1.5" />
//                     <span className="sr-only">View notifications</span>
//                     <BellIcon className="h-6 w-6" aria-hidden="true" />
//                   </button>
//
//                   {/* Profile dropdown */}
//                   <Menu as="div" className="relative ml-3">
//                     <div>
//                       <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
//                         <span className="absolute -inset-1.5" />
//                         <span className="sr-only">Open user menu</span>
//                         <img
//                           className="h-8 w-8 rounded-full"
//                           src={user.imageUrl}
//                           alt=""
//                         />
//                       </Menu.Button>
//                     </div>
//                     <Transition
//                       as={Fragment}
//                       enter="transition ease-out duration-200"
//                       enterFrom="transform opacity-0 scale-95"
//                       enterTo="transform opacity-100 scale-100"
//                       leave="transition ease-in duration-75"
//                       leaveFrom="transform opacity-100 scale-100"
//                       leaveTo="transform opacity-0 scale-95"
//                     >
//                       <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                         {userNavigation.map((item) => (
//                           <Menu.Item key={item.name}>
//                             {({ active }) => (
//                               <a
//                                 href={item.href}
//                                 className={classNames(
//                                   active ? 'bg-gray-100' : '',
//                                   'block px-4 py-2 text-sm text-gray-700'
//                                 )}
//                               >
//                                 {item.name}
//                               </a>
//                             )}
//                           </Menu.Item>
//                         ))}
//                       </Menu.Items>
//                     </Transition>
//                   </Menu>
//                 </div>
//                 <div className="-mr-2 flex items-center sm:hidden">
//                   {/* Mobile menu button */}
//                   <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
//                     <span className="absolute -inset-0.5" />
//                     <span className="sr-only">Open main menu</span>
//                     {open ? (
//                       <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                     ) : (
//                       <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                     )}
//                   </Disclosure.Button>
//                 </div>
//               </div>
//             </div>
//
//             <Disclosure.Panel className="sm:hidden">
//               <div className="space-y-1 pb-3 pt-2">
//                 {navigation.map((item) => (
//                   <Disclosure.Button
//                     key={item.name}
//                     as="a"
//                     href={item.href}
//                     className={classNames(
//                       item.current
//                         ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
//                         : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800',
//                       'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
//                     )}
//                     aria-current={item.current ? 'page' : undefined}
//                   >
//                     {item.name}
//                   </Disclosure.Button>
//                 ))}
//               </div>
//               <div className="border-t border-gray-200 pb-3 pt-4">
//                 <div className="flex items-center px-4">
//                   <div className="flex-shrink-0">
//                     <img
//                       className="h-10 w-10 rounded-full"
//                       src={user.imageUrl}
//                       alt=""
//                     />
//                   </div>
//                   <div className="ml-3">
//                     <div className="text-base font-medium text-gray-800">
//                       {user.name}
//                     </div>
//                     <div className="text-sm font-medium text-gray-500">
//                       {user.email}
//                     </div>
//                   </div>
//                   <button
//                     type="button"
//                     className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                   >
//                     <span className="absolute -inset-1.5" />
//                     <span className="sr-only">View notifications</span>
//                     <BellIcon className="h-6 w-6" aria-hidden="true" />
//                   </button>
//                 </div>
//                 <div className="mt-3 space-y-1">
//                   {userNavigation.map((item) => (
//                     <Disclosure.Button
//                       key={item.name}
//                       as="a"
//                       href={item.href}
//                       className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
//                     >
//                       {item.name}
//                     </Disclosure.Button>
//                   ))}
//                 </div>
//               </div>
//             </Disclosure.Panel>
//           </>
//         )}
//       </Disclosure>
//       <main className="h-full">{component}</main>
//     </div>
//   );
// }

// import { Fragment } from 'react';
// import { Disclosure, Menu, Transition } from '@headlessui/react';
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// };
// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
//   { name: 'Reports', href: '#', current: false },
// ];
// const userNavigation = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Settings', href: '#' },
//   { name: 'Sign out', href: '#' },
// ];
//
// function classNames(...classes: any[]) {
//   return classes.filter(Boolean).join(' ');
// }
//
// type Props = {
//   component: any;
// };
//
// export default function Layout(props: Props) {
//   const { component } = props;
//   return (
//     <div className="h-screen flex flex-col">
//       <div className="bg-zinc-900 pb-32">
//         <Disclosure as="nav">
//           {({ open }) => (
//             <>
//               <div className="mx-auto ">
//                 <div className="flex h-16 items-center justify-between px-4 sm:px-0 lg:px-8">
//                   <div className="flex items-center">
//                     <div className="flex-shrink-0">
//                       <img
//                         className="h-8 w-8"
//                         src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                         alt="Your Company"
//                       />
//                     </div>
//                     <div className="hidden md:block">
//                       <div className="ml-10 flex items-baseline space-x-4 ">
//                         {navigation.map((item) => (
//                           <a
//                             key={item.name}
//                             href={item.href}
//                             className={classNames(
//                               item.current
//                                 ? 'bg-gray-900 text-white'
//                                 : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                               'rounded-md px-3 py-2 text-sm font-medium'
//                             )}
//                             aria-current={item.current ? 'page' : undefined}
//                           >
//                             {item.name}
//                           </a>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="hidden md:block">
//                     <div className="ml-4 flex items-center md:ml-6">
//                       <button
//                         type="button"
//                         className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                       >
//                         <span className="absolute -inset-1.5" />
//                         <span className="sr-only">View notifications</span>
//                         <BellIcon className="h-6 w-6" aria-hidden="true" />
//                       </button>
//
//                       {/* Profile dropdown */}
//                       <Menu as="div" className="relative ml-3">
//                         <div>
//                           <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                             <span className="absolute -inset-1.5" />
//                             <span className="sr-only">Open user menu</span>
//                             <img
//                               className="h-8 w-8 rounded-full"
//                               src={user.imageUrl}
//                               alt=""
//                             />
//                           </Menu.Button>
//                         </div>
//                         <Transition
//                           as={Fragment}
//                           enter="transition ease-out duration-100"
//                           enterFrom="transform opacity-0 scale-95"
//                           enterTo="transform opacity-100 scale-100"
//                           leave="transition ease-in duration-75"
//                           leaveFrom="transform opacity-100 scale-100"
//                           leaveTo="transform opacity-0 scale-95"
//                         >
//                           <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                             {userNavigation.map((item) => (
//                               <Menu.Item key={item.name}>
//                                 {({ active }) => (
//                                   <a
//                                     href={item.href}
//                                     className={classNames(
//                                       active ? 'bg-gray-100' : '',
//                                       'block px-4 py-2 text-sm text-gray-700'
//                                     )}
//                                   >
//                                     {item.name}
//                                   </a>
//                                 )}
//                               </Menu.Item>
//                             ))}
//                           </Menu.Items>
//                         </Transition>
//                       </Menu>
//                     </div>
//                   </div>
//                   <div className="-mr-2 flex md:hidden">
//                     {/* Mobile menu button */}
//                     <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                       <span className="absolute -inset-0.5" />
//                       <span className="sr-only">Open main menu</span>
//                       {open ? (
//                         <XMarkIcon
//                           className="block h-6 w-6"
//                           aria-hidden="true"
//                         />
//                       ) : (
//                         <Bars3Icon
//                           className="block h-6 w-6"
//                           aria-hidden="true"
//                         />
//                       )}
//                     </Disclosure.Button>
//                   </div>
//                 </div>
//               </div>
//
//               <Disclosure.Panel className="border-b border-gray-700 md:hidden">
//                 <div className="space-y-1 px-2 py-3 sm:px-3">
//                   {navigation.map((item) => (
//                     <Disclosure.Button
//                       key={item.name}
//                       as="a"
//                       href={item.href}
//                       className={classNames(
//                         item.current
//                           ? 'bg-gray-900 text-white'
//                           : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                         'block rounded-md px-3 py-2 text-base font-medium'
//                       )}
//                       aria-current={item.current ? 'page' : undefined}
//                     >
//                       {item.name}
//                     </Disclosure.Button>
//                   ))}
//                 </div>
//                 <div className="border-t border-gray-700 pb-3 pt-4">
//                   <div className="flex items-center px-5">
//                     <div className="flex-shrink-0">
//                       <img
//                         className="h-10 w-10 rounded-full"
//                         src={user.imageUrl}
//                         alt=""
//                       />
//                     </div>
//                     <div className="ml-3">
//                       <div className="text-base font-medium leading-none text-white">
//                         {user.name}
//                       </div>
//                       <div className="text-sm font-medium leading-none text-gray-400">
//                         {user.email}
//                       </div>
//                     </div>
//                     <button
//                       type="button"
//                       className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                     >
//                       <span className="absolute -inset-1.5" />
//                       <span className="sr-only">View notifications</span>
//                       <BellIcon className="h-6 w-6" aria-hidden="true" />
//                     </button>
//                   </div>
//                   <div className="mt-3 space-y-1 px-2">
//                     {userNavigation.map((item) => (
//                       <Disclosure.Button
//                         key={item.name}
//                         as="a"
//                         href={item.href}
//                         className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
//                       >
//                         {item.name}
//                       </Disclosure.Button>
//                     ))}
//                   </div>
//                 </div>
//               </Disclosure.Panel>
//             </>
//           )}
//         </Disclosure>
//       </div>
//
//       <main className="-mt-36 h-full rounded-lg bg-zinc-900 p-4">
//         <div className="h-full rounded-lg bg-zinc-900  shadow">{component}</div>
//       </main>
//     </div>
//   );
// }

import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import logo from '@/assets/logo.jpg';

const navigation = [
  {
    name: 'Dashboard',
    href: '#',
    icon: HomeIcon,
    current: true,
    color: 'text-blue-400',
  },
  {
    name: 'Team',
    href: '#',
    icon: UsersIcon,
    current: false,
    color: 'text-green-400',
  },
  {
    name: 'Projects',
    href: '#',
    icon: FolderIcon,
    current: false,
    color: 'text-red-400',
  },
  {
    name: 'Calendar',
    href: '#',
    icon: CalendarIcon,
    current: false,
    color: 'text-indigo-400',
  },
  {
    name: 'Documents',
    href: '#',
    icon: DocumentDuplicateIcon,
    current: false,
    color: 'text-purple-400',
  },
  {
    name: 'Reports',
    href: '#',
    icon: ChartPieIcon,
    current: false,
    color: 'text-blue-400',
  },
];
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

type Props = {
  component: any;
};

export default function Layout(props: Props) {
  const { component } = props;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-zinc-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-zinc-900 px-6 pb-2 ring-1 ring-white/10">
                  <div className="flex h-16 shrink-0 items-center">
                    <img className="h-8 w-auto" src={logo} alt="LEXARI" />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? 'bg-gray-800 text-white'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                )}
                              >
                                <item.icon
                                  className={`h-6 w-6 shrink-0 ${item.color}`}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <div className="text-xs font-semibold leading-6 text-gray-400">
                          Your teams
                        </div>
                        <ul role="list" className="-mx-2 mt-2 space-y-1">
                          {teams.map((team) => (
                            <li key={team.name}>
                              <a
                                href={team.href}
                                className={classNames(
                                  team.current
                                    ? 'bg-gray-800 text-white'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                )}
                              >
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                  {team.initial}
                                </span>
                                <span className="truncate">{team.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-60 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-zinc-900 px-6">
          <div className="flex h-16 shrink-0 items-center">
            <img className="h-8 w-auto" src={logo} alt="LEXARI" />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gradient-to-r from-gray-700 text-white'
                            : 'text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-gray-700',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                        )}
                      >
                        <item.icon
                          className={`h-6 w-6 shrink-0 ${item.color}`}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <div className="text-xs font-semibold leading-6 text-gray-400">
                  Your teams
                </div>
                <ul role="list" className="-mx-2 mt-2 space-y-1">
                  {teams.map((team) => (
                    <li key={team.name}>
                      <a
                        href={team.href}
                        className={classNames(
                          team.current
                            ? 'bg-gray-800 text-white'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                        )}
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                          {team.initial}
                        </span>
                        <span className="truncate">{team.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="-mx-6 mt-auto">
                <a
                  href="#"
                  className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
                >
                  <img
                    className="h-8 w-8 rounded-full bg-gray-800"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span className="sr-only">Your profile</span>
                  <span aria-hidden="true">Tom Cook</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-zinc-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-400 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex-1 text-sm font-semibold leading-6 text-white">
          Dashboard
        </div>
        <a href="#">
          <span className="sr-only">Your profile</span>
          <img
            className="h-8 w-8 rounded-full bg-gray-800"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </a>
      </div>

      {/*<main className="h-full rounded-lg bg-zinc-900 p-4">*/}
      {/*  <div className="h-full rounded-lg bg-zinc-900  shadow">{component}</div>*/}
      {/*</main>*/}
      <main className="py-6 lg:pl-60 bg-zinc-900 h-full">
        <div className="px-4 h-full">{component}</div>
      </main>
    </div>
  );
}
