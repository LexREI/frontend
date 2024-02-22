import React, { Fragment, useContext, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  DocumentMagnifyingGlassIcon,
  GlobeAltIcon,
  HomeIcon,
  PencilSquareIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import logo from '@/assets/logo.jpg';
import { AuthContext } from '@/contexts/auth_context';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const navigation = [
  {
    name: 'Dashboard',
    href: '#',
    icon: HomeIcon,
    current: true,
    color: 'text-blue-400',
  },
  {
    name: 'Legal Research',
    href: '/dashboard/legal-research',
    icon: DocumentMagnifyingGlassIcon,
    current: false,
    color: 'text-blue-400',
  },
  {
    name: 'Legal AI Copilot',
    href: '/dashboard/legal-ai-copilot',
    icon: GlobeAltIcon,
    current: false,
    color: 'text-blue-400',
  },
  {
    name: '(WIP) Legal Drafting',
    href: '/dashboard/legal-drafting',
    icon: PencilSquareIcon,
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
  const { userInfo } = useContext(AuthContext);
  const { component } = props;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen">
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
                <div className="flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-2 ring-1 ring-white/10 bg-zinc-900">
                  <div className="flex h-16 shrink-0 items-center gap-2 text-secondary">
                    <img className="h-8 w-auto" src={logo} alt="LEXARI" />
                    <h2 className="text-lg font-semibold">LexARI</h2>
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <Link
                                to={item.href}
                                className={classNames(
                                  item.current
                                    ? 'bg-secondary text-gray-700'
                                    : 'text-gray-500 hover:bg-secondary hover:text-gray-700',
                                  'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                                )}
                              >
                                <item.icon
                                  className="h-6 w-6 shrink-0"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      {/*<li>*/}
                      {/*  <div className="text-xs font-semibold leading-6 text-gray-400">*/}
                      {/*    Your teams*/}
                      {/*  </div>*/}
                      {/*  <ul role="list" className="-mx-2 mt-2 space-y-1">*/}
                      {/*    {teams.map((team) => (*/}
                      {/*      <li key={team.name}>*/}
                      {/*        <a*/}
                      {/*          href={team.href}*/}
                      {/*          className={classNames(*/}
                      {/*            team.current*/}
                      {/*              ? 'bg-gray-800 text-white'*/}
                      {/*              : 'text-gray-400 hover:bg-gray-800 hover:text-white',*/}
                      {/*            'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'*/}
                      {/*          )}*/}
                      {/*        >*/}
                      {/*          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">*/}
                      {/*            {team.initial}*/}
                      {/*          </span>*/}
                      {/*          <span className="truncate">{team.name}</span>*/}
                      {/*        </a>*/}
                      {/*      </li>*/}
                      {/*    ))}*/}
                      {/*  </ul>*/}
                      {/*</li>*/}
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col ring-2 ring-black/10">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto px-6">
          <div className="flex h-16 shrink-0 items-center gap-2">
            <img className="h-10 w-auto" src={logo} alt="LEXARI" />
            <h2 className="text-lg font-semibold">LexARI</h2>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-secondary text-gray-700'
                            : 'text-gray-500 hover:bg-secondary hover:text-gray-700',
                          'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                        )}
                      >
                        <item.icon
                          className="h-6 w-6 shrink-0 text-black"
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {/*<li>*/}
              {/*  <div className="text-xs font-semibold leading-6 text-gray-400">*/}
              {/*    Your teams*/}
              {/*  </div>*/}
              {/*  <ul role="list" className="-mx-2 mt-2 space-y-1">*/}
              {/*    {teams.map((team) => (*/}
              {/*      <li key={team.name}>*/}
              {/*        <a*/}
              {/*          href={team.href}*/}
              {/*          className={classNames(*/}
              {/*            team.current*/}
              {/*              ? 'bg-gray-800 text-white'*/}
              {/*              : 'text-gray-400 hover:bg-gray-800 hover:text-white',*/}
              {/*            'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'*/}
              {/*          )}*/}
              {/*        >*/}
              {/*          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">*/}
              {/*            {team.initial}*/}
              {/*          </span>*/}
              {/*          <span className="truncate">{team.name}</span>*/}
              {/*        </a>*/}
              {/*      </li>*/}
              {/*    ))}*/}
              {/*  </ul>*/}
              {/*</li>*/}
              <li className="-mx-6 mt-auto border-t-2 border-black/10">
                {/*{userInfo.role !== 'subscribe' ? (*/}
                {/*  <div className="flex items-center gap-x-4 px-6 py-3 text-xs font-semibold leading-6 text-gray-600">*/}
                {/*    <WorkspacePremiumRoundedIcon className="text-pink-400" />*/}
                {/*    <span>VIP</span>*/}
                {/*  </div>*/}
                {/*) : null}*/}
                <div className="flex items-center gap-x-4 px-6 py-5 text-xs font-semibold leading-6 text-gray-600">
                  <img
                    className="h-8 w-8 rounded-full bg-gray-800"
                    src={userInfo.avatar}
                    alt="avatar"
                  />
                  <span className="sr-only">Your profile</span>
                  <div className="flex flex-col">
                    <span aria-hidden="true">
                      {`${userInfo.first_name} ${userInfo.middle_name} ${userInfo.last_name}`}
                    </span>
                    <span aria-hidden="true">{userInfo.email}</span>
                  </div>
                  <IconButton aria-label="delete" size="small">
                    <LogoutRoundedIcon fontSize="inherit" />
                  </IconButton>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="sticky top-0 z-40 flex items-center gap-x-6 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
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
      <main className="py-8 lg:pl-64">
        <div className="h-full px-12">{component}</div>
      </main>
    </div>
  );
}
