import Image from "next/image";

import { extractContentfulAssetUrl } from "@/contentful/utils";
import { IProjectFields } from "@/types/generated/contentful";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Fragment, useState } from "react";

export const Project = ({
  name,
  badgeName,
  badgeUrl,
  description,
  image,
  demoUrl,
  githubUrl,
  notes,
  technologies,
}: IProjectFields) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative rounded-xl p-5 py-6 shadow-lg">
      <div className="flex flex-row flex-wrap items-start justify-between gap-1 xs:items-center">
        <h4 className="text-2xl font-bold">{name}</h4>
        {badgeName && (
          <div className="flex gap-3">
            <a
              href={badgeUrl}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center justify-center rounded-md ${
                badgeUrl
                  ? "bg-sky-100 text-sky-900 focus:ring-sky-200"
                  : "bg-slate-100 text-slate-600 focus:ring-slate-200"
              } px-4 py-1.5 text-[0.72rem] font-bold  uppercase outline-none focus:ring`}
            >
              {badgeName}
            </a>
          </div>
        )}
      </div>
      <p className="mt-3 whitespace-pre-wrap text-lg text-slate-500">
        {description}
      </p>

      <div
        className="relative mt-5 aspect-[16/10] cursor-pointer overflow-hidden rounded-xl"
        onClick={openModal}
      >
        <Image
          className="object-cover"
          fill
          src={extractContentfulAssetUrl(image)}
          alt={`${name} project cover image`}
        />
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="z-100 relative" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center px-2 text-center xs:px-4 lg:px-8">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative h-full w-full transform align-middle transition-all">
                  <div
                    className="relative mx-auto aspect-[16/10] max-h-[90vh] overflow-hidden rounded-xl"
                    onClick={closeModal}
                  >
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src={extractContentfulAssetUrl(image)}
                      alt={`${name} project cover image`}
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div className="flex flex-col gap-2 xs:gap-3.5">
        <Disclosure as="div" className="mt-4">
          {({ open }) => (
            <>
              <Disclosure.Button
                className={`peer flex w-full items-center justify-between rounded-xl bg-slate-100 px-4 py-2 text-left font-semibold text-slate-500 hover:bg-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-slate-300 ${
                  open ? "rounded-b-none" : ""
                }`}
              >
                <span>Learn more</span>
                <ChevronUpIcon
                  className={`${
                    open ? "" : "rotate-180 transform"
                  } h-5 w-5 text-slate-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="focus rounded-xl rounded-t-none bg-slate-50 px-4 text-slate-500 peer-focus-visible:ring peer-focus-visible:ring-slate-300">
                {/* Mobile View */}
                <div className="flex flex-col gap-4 pt-4 pb-5 md:hidden">
                  {technologies && (
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 flex-shrink-0 fill-current"
                        >
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                        </svg>
                        <span className="ml-1.5 whitespace-nowrap font-semibold">
                          Built with:
                        </span>
                      </div>
                      <span className="mt-1">{technologies}</span>
                    </div>
                  )}
                  {notes && (
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 fill-current"
                        >
                          <path d="M15 19H3V17H15V19ZM21 15H3V13H21V15ZM15 11H3V9H15V11ZM21 7H3V5H21V7Z"></path>
                        </svg>
                        <span className="ml-1.5 whitespace-nowrap font-semibold">
                          Notes:
                        </span>
                      </div>
                      <span className="mt-1 whitespace-pre-wrap">{notes}</span>
                    </div>
                  )}
                </div>
                {/* Desktop View */}
                <div className="hidden py-4 md:block">
                  <div className="flex flex-col gap-3">
                    {technologies && (
                      <div className="flex items-start gap-2">
                        <div className="flex w-28 shrink-0 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 fill-current"
                          >
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                          </svg>
                          <span className="ml-1.5 whitespace-nowrap font-semibold">
                            Built with:
                          </span>
                        </div>
                        <span>{technologies}</span>
                      </div>
                    )}
                    {notes && (
                      <div className="flex items-start gap-2">
                        <div className="flex w-28 shrink-0 items-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 fill-current"
                          >
                            <path d="M15 19H3V17H15V19ZM21 15H3V13H21V15ZM15 11H3V9H15V11ZM21 7H3V5H21V7Z"></path>
                          </svg>
                          <span className="ml-1.5 whitespace-nowrap font-semibold">
                            Notes:
                          </span>
                        </div>
                        <span className="whitespace-pre-wrap">{notes}</span>
                      </div>
                    )}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <div className="flex flex-col gap-2 xs:flex-row xs:gap-3.5">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center rounded-xl bg-blue-400 px-4 py-2 font-semibold text-white outline-none hover:bg-[#70aefa] focus:ring focus:ring-blue-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              View demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center rounded-xl bg-slate-700 px-3 py-2 font-semibold text-white outline-none hover:bg-slate-600 focus:ring focus:ring-slate-300"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5 fill-white"
              >
                <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
              </svg>
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
