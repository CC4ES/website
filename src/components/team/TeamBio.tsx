import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import LinkButton from "../LinkButton";

interface Props {
  name: string;
  bioText: string;
  additionalButtonText?: string | undefined;
  additionalButtonHref?: string | undefined;
}
export default function TeamBio({
  name,
  bioText,
  additionalButtonHref,
  additionalButtonText,
}: Props) {
  const closeButtonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function createMarkup(str: string) {
    return { __html: str };
  }
  return (
    <>
      <div className="mt-4">
        <LinkButton onClick={openModal}>Read Bio</LinkButton>
        <span className="ml-2">
          {additionalButtonText && additionalButtonHref && (
            <LinkButton href={additionalButtonHref}>
              {additionalButtonText}
            </LinkButton>
          )}
        </span>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeModal}
          initialFocus={closeButtonRef}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-3/4 md:w-1/2 transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {name}
                  </Dialog.Title>
                  <div className="mt-2">
                    <div
                      className="text-gray-500 whitespace-pre-wrap"
                      dangerouslySetInnerHTML={createMarkup(bioText)}
                    ></div>
                  </div>

                  <div className="mt-4">
                    <button
                      ref={closeButtonRef}
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
