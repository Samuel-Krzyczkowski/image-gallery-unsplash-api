// src/components/SelectMenu.js

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const sortOptions = [
  {
    id: 1,
    option: 'Latest',
  },
  {
    id: 2,
    option: 'Relevant',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SelectMenu(props) {
  const [selected, setSelected] = useState(sortOptions[1])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left drop-shadow-lg focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 sm:text-sm">
              <span className="flex items-center">
                <span className="ml-3 block truncate">Sort By: {selected.option}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute text-center z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <div className='py-2 font-bold border-b border-gray-300'>Sort By</div>
                {sortOptions.map((option) => (
                  <Listbox.Option
                    key={option.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-gray-900 bg-gray-300' : 'text-gray-900',
                        'relative cursor-default select-none py-2 '
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <div onClick={() => {props.sendSort(option.option)}} className="flex justify-center items-center">
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate ')}
                          >
                            {option.option}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-black' : 'text-gray-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
