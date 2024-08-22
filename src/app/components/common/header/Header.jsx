'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const services = [
  { name: 'Web Design', href: '/web-design', icon: ChartPieIcon },
  { name: 'App Design', href: '/app-design', icon: CursorArrowRaysIcon },
  { name: 'IT Training', href: '/it-training', icon: FingerPrintIcon },
  { name: 'IT Consulting', href: '/it-consulting', icon: SquaresPlusIcon },
  { name: 'Master Classes', href: '/master-classes', icon: ArrowPathIcon },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  const closePopover = () => setPopoverOpen(false);
  const openPopover = () => setPopoverOpen(true);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target) && popoverOpen) {
        closePopover();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popoverOpen]);

  return (
    <header className="bg-secondary px-6 sticky top-0 z-50">
      <nav aria-label="Global" className="mx-auto container flex items-center justify-between py-6 bg-secondary">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image alt="Visiongroww" src="/images/logo.png" width={312} height={69} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className="text-xl font-semibold leading-6 text-primary">
            Home
          </Link>
          <div className="relative" ref={popoverRef}>
            <button
              type="button"
              className="flex items-center gap-x-1 text-xl font-semibold leading-6 text-gray-900"
              onClick={() => setPopoverOpen(!popoverOpen)}
            >
              Services
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </button>

            {popoverOpen && (
              <div
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded bg-primary text-white transition"
                onMouseLeave={closePopover}
              >
                <div className="p-4">
                  {services.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-primary hover:text-white"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center bg-primary rounded-lg">
                        <item.icon aria-hidden="true" className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold text-white text-xl" onClick={closePopover}>
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/about" className="text-xl font-semibold leading-6 text-primary">
            About Us
          </Link>
          <Link href="/blog" className="text-xl font-semibold leading-6 text-primary">
            Blog
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="text-xl rounded-full font-semibold px-7 border border-2 border-primary py-2 text-primary hover:border-btn-hover hover:bg-btn-hover hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:ring-1 sm:ring-gray-900/10 bg-secondary">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image alt="Visiongroww" src="/images/logo.png" width={312} height={69} />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Services
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...services].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/contact"
                  className="text-xl rounded-full font-semibold px-7 border border-2 border-primary py-2 text-primary hover:border-btn-hover hover:bg-btn-hover hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
