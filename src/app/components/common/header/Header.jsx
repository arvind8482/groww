"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel
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

  const handleMobileSmallScreen = () => { 
    setMobileMenuOpen(prev => !prev);

  };

  const closePopover = () => setPopoverOpen(false);

  const handleClose = () => {
    setMobileMenuOpen(false);
  };

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
    <header className="bg-white px-6 sticky top-0 z-50 border-b-2">
      <nav aria-label="Global" className="mx-auto container flex items-center justify-between py-2">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              alt="Visiongroww"
              src="/images/logo.svg"
              className="w-[200px] "
              width={312}
              height={69}
            />
          </Link>
        </div>
        <div className="flex xl:hidden">
          <button
            type="button"
            onClick={handleMobileSmallScreen}  
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        <div className="hidden xl:justify-end xl:flex xl:gap-x-6">
          {/* Desktop menu links */}
          <Link href="/" className="text-default-size font-semibold leading-6 text-primary">
            Home
          </Link>
          <div className="relative" ref={popoverRef}>
            <button
              type="button"
              className="flex items-center gap-x-1 text-default-size font-semibold leading-6 text-gray-900" 
              onMouseEnter={() => setPopoverOpen(!popoverOpen)} 
            >
              Services
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </button>

            {popoverOpen && (
              <div
                className="absolute -left-8 top-full z-10 mt-3 w-full xl:w-[300px] max-w-md overflow-hidden rounded bg-primary text-white transition"
                onMouseLeave={closePopover}
              >
                <div className="p-4">
                  {services.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-secondary hover:text-white"
                    >
                      <div className="flex h-11 w-5 flex-none items-center justify-center bg-primary group-hover:bg-secondary group-hover:text-primary rounded-lg">
                        <item.icon aria-hidden="true" className="h-6 w-6 text-white group-hover:text-primary" />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-white group-hover:text-primary text-default-size"
                          onClick={closePopover}
                        >
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

          <Link href="/about" className="text-default-size font-semibold leading-6 text-primary">
            About Us
          </Link>
          <Link  href="https://medium.com/@ratanshakya999/how-to-create-a-vpc-virtual-private-cloud-in-aws-cloud-9776b55829cc"  target='_blank' className="text-default-size font-semibold leading-6 text-primary">
            Blog
          </Link>
        </div>
        <div className="hidden xl:ms-6 xl:flex xl:justify-end">
          <Link
            href="/contact"
            className="text-default-size rounded-full font-semibold px-7 border border-2 border-primary py-2 text-primary hover:border-secondary-dark2 hover:bg-btn-hover hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen}   onClose={handleMobileSmallScreen} className="xl:hidden">
        <div className="fixed inset-0 " />
        <DialogPanel className="fixed z-[99999] overflow-x-hidden inset-y-0 right-0 w-full h-full overflow-y-auto sm:ring-1 sm:ring-gray-900/10 bg-white"> 
          <div className="mt-2 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 pt-6 "> 
                <div className='flex justify-between bg-white pb-2 sticky top-0 z-50 border-b-2 px-6 '>
                    <Link href="/" > 
                      <Image
                        alt="Visiongroww"
                        src="/images/logo.svg"
                        className="w-[200px] "
                        width={312}
                        height={69}
                      />
                  </Link>
                  <button
            type="button"
            onClick={handleMobileSmallScreen}  
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
                </div>
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 pt-4 pb-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 px-9"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Disclosure as="div" className="px-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7  text-gray-900 hover:bg-gray-50">
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
                  className="-mx-3 block rounded-lg  px-9 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="https://medium.com/@ratanshakya999/how-to-create-a-vpc-virtual-private-cloud-in-aws-cloud-9776b55829cc"  target='_blank'
                  className="-mx-3 block rounded-lg py-2 px-9 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </div>
              <div className="py-6 px-6">
                <Link
                  href="/contact"
                  className="text-default-size rounded-full font-semibold px-9 border border-2 border-primary py-2 text-primary hover:border-btn-hover hover:bg-btn-hover hover:text-white"
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
  