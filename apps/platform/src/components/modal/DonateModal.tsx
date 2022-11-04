import { InformationCircleIcon, ArrowCircleRightIcon, DuplicateIcon, ArrowCircleLeftIcon } from "@heroicons/react/outline";
import { FC, Fragment, ReactElement, useState } from "react";
import cx from "classnames";
import QRCode from "../../assets/images/qr-code-sample.png";
import { EthereumIcon } from "../icons/cryptos/EthereumIcon";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { PrimaryButton } from "../PrimaryCta";
import { PolygonIcon } from "../icons/cryptos/PolygonIcon";
import { SolanaIcon } from "../icons/cryptos/SolanaIcon";

interface ModalProps {
    logo: string;
    title: string;
}

interface Crypto {
    id: number;
    name: string;
    icon: ReactElement
}

const people:Crypto[] = [
    { id: 1, name: 'Ethereum', icon: <EthereumIcon className="w-7 h-7 inline-block"/> },
    { id: 2, name: 'Polygon', icon: <PolygonIcon className="w-7 h-7 inline-block"/> },
    { id: 3, name: 'Solana', icon: <SolanaIcon className="w-7 h-7 inline-block"/> },
]

export const DonateModal:FC<ModalProps> = ({ logo, title }) => {

    const [activeTab, setActiveTab] = useState<number>(0);
    const [openTaxModal, setOpenTaxModal] = useState<boolean>(false);
    const [selected, setSelected] = useState(people[0])
    const [query, setQuery] = useState('')

    const nextStep = () => {
        setActiveTab(activeTab < 2 ? activeTab + 1 : 2);
        if (activeTab == 1) setOpenTaxModal(true); 
    }

    const closeModal = () => {
        setActiveTab(0);
        setOpenTaxModal(false);
    }


  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

    return (
        <>
            <label htmlFor="my-modal-4" className="modal-button outline-button w-33.5 h-12 rounded-2xl-1 px-4">Donate</label>
            <input
                type="checkbox"
                id="my-modal-4"
                className="modal-toggle"
                onChange={closeModal}
            />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box px-0 py-0 rounded-sm relative w-96">
                    <div className="modal-header flex gap-4 p-4 bg-brand-orange">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={logo}
                            className="w-24 h-24 border-8 border-white rounded-md"
                            alt="charity-logo"
                        />
                        <h1 className="text-xl font-bold text-white line leading-8 text-shadow-lg">{title}</h1>
                    </div>
                    <div className="tabs tabs-boxed rounded-none grid grid-cols-3 py-3">
                        <a
                            className={cx("tab",
                                {
                                    "bg-brand-orange text-white rounded-xl": !activeTab
                                }
                            )}
                        >Pledge</a> 
                        <a
                            className={cx("tab",
                                {
                                    "bg-brand-orange text-white rounded-xl": activeTab == 1
                                }
                            )}
                        >Info</a> 
                        <a
                            className={cx("tab",
                                {
                                    "bg-brand-orange text-white rounded-xl": activeTab == 2
                                }
                            )}
                        >Donate</a>
                    </div>
                    <div className="modal-body px-8 py-4 max-h-[350px] overflow-auto">
                        <div className="donate-forms">
                            <div className={cx(
                                "pledge grid gap-4",
                                {
                                    "hidden": activeTab != 0
                                }
                            )}>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label text-xl">
                                        <span>Select Your Crypto</span>
                                    </label>
                                    <Combobox value={selected} onChange={setSelected}>
                                        <div className="relative mt-1">
                                        <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                            <span className="absolute top-2 left-2">
                                                {selected.icon}
                                            </span>
                                            <Combobox.Input
                                                className="input input-bordered w-full py-2 pl-10 pr-10 leading-5 focus:ring-0"
                                                displayValue={(person: Crypto) => person.name}
                                                onChange={(event) => setQuery(event.target.value)}
                                            />
                                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                <ChevronDownIcon
                                                    className="h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                            </Combobox.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            leave="transition ease-in duration-100"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                            afterLeave={() => setQuery('')}
                                        >
                                            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm bg-base-100 border border-base-content border-opacity-25">
                                            {filteredPeople.length === 0 && query !== '' ? (
                                                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                Nothing found.
                                                </div>
                                            ) : (
                                                filteredPeople.map((person) => (
                                                <Combobox.Option
                                                    key={person.id}
                                                    className={({ active }) =>
                                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                        active ? 'bg-teal-600 text-white' : 'text-base-content'
                                                    }`
                                                    }
                                                    value={person}
                                                >
                                                    {({ selected, active }) => (
                                                    <>
                                                        <span
                                                        className={`block truncate ${
                                                            selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                        >
                                                        {person.icon}
                                                        {person.name}
                                                        </span>
                                                        {selected ? (
                                                        <span
                                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                            active ? 'text-white' : 'text-teal-600'
                                                            }`}
                                                        >
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                        ) : null}
                                                    </>
                                                    )}
                                                </Combobox.Option>
                                                ))
                                            )}
                                            </Combobox.Options>
                                        </Transition>
                                        </div>
                                    </Combobox>
                                </div>
                                <div className="form-control">
                                    <label className="label text-xl">
                                        <span>Enter Donation Amount</span>
                                    </label>
                                    <div
                                        className="flex flex-col border border-base-content border-opacity-25 rounded-md px-6 py-3"
                                    >
                                        <input
                                            className="bg-transparent outline-none h-12 text-base-content text-2xl"
                                        />
                                        <span className="text-xl">~6,050.30</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx(
                                "info grid gap-4",
                                {
                                    "hidden": activeTab != 1
                                }
                            )}>
                                <div className="flex items-center gap-4 border-b border-base-content border-opacity-25 pb-1">
                                    <input
                                        type="checkbox"
                                        className="w-6 h-6"
                                    />
                                    <span className="text-lg">Donnate anonymously</span>
                                </div>
                                <div className="grid grid-cols-2 gap-2 form-control">
                                    <input
                                        type="text"
                                        className="input input-bordered rounded-none outline-none focus:border-orange-500"
                                        placeholder="First name*"
                                    />
                                    <input
                                        type="text"
                                        className="input input-bordered rounded-none outline-none focus:border-orange-500"
                                        placeholder="Last name*"
                                    />
                                </div>
                                <div className="form-control">
                                    <input
                                        type="text"
                                        className="input input-bordered rounded-none outline-none focus:border-orange-500"
                                        placeholder="Email*"
                                    />
                                </div>
                                <div className="form-control">
                                    <input
                                        type="text"
                                        className="input input-bordered rounded-none outline-none focus:border-orange-500"
                                        placeholder="Country*"
                                    />
                                </div>
                                <div className="form-control">
                                    <input
                                        type="text"
                                        className="input input-bordered rounded-none outline-none focus:border-orange-500"
                                        placeholder="State / Province / Region"
                                    />
                                </div>
                                <div className="form-control">
                                    <input
                                        type="text"
                                        className="input input-bordered rounded-none outline-none focus:border-orange-500"
                                        placeholder="Address 1*"
                                    />
                                </div>
                                <div className="form-control">
                                    <input
                                        type="text"
                                        className="input input-bordered rounded-none outline-none focus:border-orange-500"
                                        placeholder="Address 2"
                                    />
                                </div>
                                <div className="form-control">
                                    <input
                                        type="text"
                                        className="input input-bordered rounded-none outline-none focus:border-orange-500"
                                        placeholder="City*"
                                    />
                                </div>
                                <div className="form-control">
                                    <input
                                        type="text"
                                        className="input input-bordered rounded-none outline-none focus:border-orange-500"
                                        placeholder="Zip/Postal Code*"
                                    />
                                </div>
                            </div>
                            <div className={cx(
                                "donate grid gap-4",
                                {
                                    "hidden": activeTab != 2
                                }
                            )}>
                                <div className="max-w-[16rem] mx-auto">
                                    <p className="text-center">Use the address below to donate <b>0.25 BTC</b> from your wallet.</p>
                                </div>
                                <div className="flex items-center justify-center p-5 w-44 h-44 border-2 border-base-content border-opacity-25 rounded-full mx-auto">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={QRCode.src}
                                        alt="wallet-qr-code"
                                        className="w-28 h-28"
                                    />
                                </div>
                                <div className="flex gap-1 items-center justify-center">
                                    <span>18fErsY9whwvS3XzTWa2xXNwEZHZN5xcG2</span>
                                    <InformationCircleIcon className="w-5 h-5"/>
                                </div>
                                <div className="flex px-6 py-3 items-center justify-center border rounded border-base-content border-opacity-25 gap-1">
                                    <span className="font-bold">Click here to copy wallet address</span>
                                    <DuplicateIcon className="w-5 h-5 cursor-pointer"/>
                                </div>
                                <div className="mx-auto">
                                    <p className="text-sm">Please note that your donation will clear even if you donate a different amount than you pledged.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={cx(
                            "modal-footer grid btn-group mt-5 gap-1",
                            {
                                "grid-cols-2": activeTab != 0
                            }
                        )}
                    >
                        <PrimaryButton className={
                            cx(
                                "btn border-none rounded-none animate-none",
                                {
                                    "hidden": !activeTab
                                }
                            )
                        } onClick={() => setActiveTab(activeTab > 0 ? activeTab - 1 : 0)}>
                            <ArrowCircleLeftIcon className="w-5 h-5"/> Previous
                        </PrimaryButton>
                        <PrimaryButton className="btn border-none rounded-none animate-none" onClick={nextStep}>
                            Continue <ArrowCircleRightIcon className="w-5 h-5 ml-1"/>
                        </PrimaryButton>
                    </div>
                </label>
            </label>

            <>
                <input type="checkbox" id="my-modal-6" className="modal-toggle" checked={openTaxModal} readOnly/>
                <div className="modal">
                    <div className="modal-box w-[19.3rem] rounded-sm pb-0 px-0">
                        <h3 className="font-bold text-2xl capitalize text-center">want a tax receipt?</h3>
                        <p className="p-4 text-center">If you would like to receive a tax receipt while remaining anonyous, ether your email below. This email will only be used for the purpose of issuing your tax receipt.</p>
                        <div className="px-4">
                            <input
                                type="email"
                                className="input input-bordered block my-3 outline-none focus:border-orange-500 mx-auto w-full rounded-sm"
                                placeholder="Enter email for tax receipt"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                            <PrimaryButton
                                className="rounded-none btn border-none"
                            onClick={() => setOpenTaxModal(false)}
                            >
                                skip
                            </PrimaryButton>
                            <PrimaryButton
                                className="rounded-none btn border-none"
                            onClick={() => setOpenTaxModal(false)}
                            >
                            get receipt
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}