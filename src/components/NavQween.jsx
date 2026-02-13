'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import { InformationCircleIcon, UsersIcon, BuildingOfficeIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const profil = [
  {
    name: 'Tentang SDIT Fajar',
    description: 'Pelajari visi, misi, dan nilai-nilai yang menjadi dasar pendidikan di SDIT Fajar.',
    href: '/profil-sekolah',
    icon: InformationCircleIcon,
  },
  {
    name: 'Manajemen Sekolah',
    description: 'Kenali tim pendidik dan pengelola sekolah yang berkomitmen menciptakan lingkungan belajar unggul dan Islami.',
    href: '/manajemen-sekolah',
    icon: UsersIcon,
  },
  {
    name: 'Sejarah Sekolah',
    description: 'Ketahui perjalanan SDIT Fajar sejak berdiri hingga menjadi sekolah Islam terpadu yang berkembang pesat.',
    href: '/sejarah-sekolah',
    icon: BuildingOfficeIcon,
  },
];

const callsToAction = [
  { name: 'Youtube', href: 'https://www.youtube.com/@sditfajardepok5479', icon: PlayCircleIcon },
  { name: 'Kontak', href: 'https://wa.me/6287737860657?text=Assalamualaikum', icon: PhoneIcon },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 py-3 ${scrolled ? 'bg-white/60 pt-1 pb-1 backdrop-blur-lg shadow-lg' : 'bg-transparent shadow-none'} font-poppins`}>
      <nav aria-label="Global" className="flex items-center justify-between p-3 px-4 mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">BMH</span>
            <img alt="Logo BMH" src="/images/logo/nav2.png" className="w-auto h-8 md:h-10" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <NavLink to="/" className={({ isActive }) => `font-semibold transition-all duration-200 text-sm/6 ${isActive ? 'text-[#65BDFF]' : 'text-[#002141] hover:text-[#65BDFF]'}`}>
            Beranda
          </NavLink>
          <Popover className="relative">
            <PopoverButton className="flex items-center font-semibold text-[#002141] hover:text-[#65BDFF] transition-all duration-200 gap-x-1 text-sm/6">
              Profil
              <ChevronDownIcon aria-hidden="true" className="flex-none text-gray-400 size-5" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute z-10 w-screen max-w-md mt-3 overflow-hidden transition -translate-x-1/2 bg-white shadow-lg left-1/2 rounded-3xl outline-1 outline-[#002141]/5 data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {profil.map((item) => (
                  <div key={item.name} className="relative flex items-center p-4 rounded-lg group gap-x-6 text-sm/6 hover:bg-gray-50">
                    <div className="flex items-center justify-center flex-none rounded-lg size-11 bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="text-gray-600 size-6 group-hover:text-[#65BDFF] transition-all duration-200" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-[#002141] hover:text-[#65BDFF] transition-all duration-200">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-xs text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-[#002141]/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-[#002141] hover:text-[#65BDFF] transition-all duration-200 hover:bg-gray-100"
                  >
                    <item.icon aria-hidden="true" className="flex-none text-gray-400 size-5" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <NavLink to="/kurikulum" className={({ isActive }) => `font-semibold transition-all duration-200 text-sm/6 ${isActive ? 'text-[#65BDFF]' : 'text-[#002141] hover:text-[#65BDFF]'}`}>
            Kurikulum
          </NavLink>
          <NavLink to="/ekstrakulikuler" className={({ isActive }) => `font-semibold transition-all duration-200 text-sm/6 ${isActive ? 'text-[#65BDFF]' : 'text-[#002141] hover:text-[#65BDFF]'}`}>
            Ekstrakulikuler
          </NavLink>

          <NavLink to="/kontak" className={({ isActive }) => `font-semibold transition-all duration-200 text-sm/6 ${isActive ? 'text-[#65BDFF]' : 'text-[#002141] hover:text-[#65BDFF]'}`}>
            Kontak
          </NavLink>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/form-pendaftaran"
            className="px-4 py-1 font-semibold text-white transition-all duration-200 border rounded-full shadow-lg bg-[#65BDFF] hover:bg-[#4bb1ff] border-white/50 focus:outline-2 focus:outline-offset-2 focus:outline-[#4bb1ff]"
          >
            Daftar
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full p-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-[#002141]/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">BMH</span>
              <img alt="Logo BMH" src="/images/logo/logo.png" className="w-auto h-8" />
            </a>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                <a href="/" className="block px-3 py-2 -mx-3 font-semibold text-[#002141] hover:text-[#65BDFF] transition-all duration-200 rounded-xl text-base/7 hover:bg-gray-50">
                  Beranda
                </a>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-xl py-2 pr-3.5 pl-3 text-base/7 font-semibold text-[#002141] hover:text-[#65BDFF] transition-all duration-200 hover:bg-gray-50">
                    Profil
                    <ChevronDownIcon aria-hidden="true" className="flex-none size-5 group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...profil, ...callsToAction].map((item) => (
                      <DisclosureButton key={item.name} as="a" href={item.href} className="block py-2 pl-6 pr-3 font-semibold text-[#002141] hover:text-[#65BDFF] transition-all duration-200 rounded-xl text-sm/7 hover:bg-gray-50">
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <a href="/kurikulum" className="block px-3 py-2 -mx-3 font-semibold text-[#002141] hover:text-[#65BDFF] transition-all duration-200 rounded-xl text-base/7 hover:bg-gray-50">
                  Kurikulum
                </a>
                <a href="/ekstrakulikuler" className="block px-3 py-2 -mx-3 font-semibold text-[#002141] hover:text-[#65BDFF] transition-all duration-200 rounded-xl text-base/7 hover:bg-gray-50">
                  Ekstrakulikuler
                </a>

                <a href="/kontak" className="block px-3 py-2 -mx-3 font-semibold text-[#002141] hover:text-[#65BDFF] transition-all duration-200 rounded-xl text-base/7 hover:bg-gray-50">
                  Kontak
                </a>
              </div>
              <div className="py-6">
                <a href="/form-pendaftaran" className="-mx-3 block rounded-xl px-3 py-2.5 text-base/7 font-semibold text-[#002141] hover:text-[#65BDFF] transition-all duration-200 hover:bg-gray-50">
                  Daftar
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
