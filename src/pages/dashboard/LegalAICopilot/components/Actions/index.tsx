import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import TabList from '@/pages/dashboard/Discovery/components/Actions/components/TabList';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxHooks';

const tabs = [
  { name: 'Upload', value: 'upload', isActive: true },
  { name: 'Download', value: 'download', isActive: false },
  { name: 'Questions', value: 'questions', isActive: false },
  { name: 'Contents', value: 'contents', isActive: false },
];
const team = [
  {
    name: 'Leslie Alexander',
    handle: 'lesliealexander',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'online',
  },
  // More people...
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

type ActionsProps = {
  actionsOpen: boolean;
  setActionsOpen: (actionsOpen: boolean) => void;
  getDocumentsList: () => void;
};

export default function Actions(props: ActionsProps) {
  const { actionsOpen, setActionsOpen, getDocumentsList } = props;
  const [expanded, setExpanded] = useState<boolean>(true);
  const { documents } = useAppSelector((state) => state.chatbot);
  const dispatch = useAppDispatch();

  return (
    <Transition.Root show={actionsOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setActionsOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          Team
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                            onClick={() => setActionsOpen(false)}
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <TabList
                      expanded={expanded}
                      setExpanded={setExpanded}
                      getDocumentsList={getDocumentsList}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
