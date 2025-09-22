"use client";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import NavItems from "@/components/header/navItems";

export default function MenuDialogMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`xl:hidden h-11`}>
      <button type="button" onClick={() => setIsOpen(true)}>
        <FaBars className={`w-11 h-11 text-shadow-2xs`} />
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        transition
        className={`relative z-50 transition duration-200 ease-out data-closed:opacity-0`}
      >
        <DialogBackdrop className={`fixed inset-0 bg-gray/60`} />

        <div className={`fixed inset-0 flex w-screen justify-end`}>
          <DialogPanel
            className={`bg-radial from-light-purple to-dark-purple p-8 flex flex-col items-center`}
          >
            <DialogTitle
              className={`font-title font-bold text-28px text-shadow-2xs`}
              as="h2"
            >
              Navegação
            </DialogTitle>

            <hr
              className={`w-full rounded border-3 border-white mt-2 mb-3.5 shadow`}
            />

            <NavItems />
          </DialogPanel>
        </div>
      </Dialog>
    </nav>
  );
}
