import { XIcon } from "@heroicons/react/solid";
import { FC, useState } from "react";

interface Stats {
    trait_type: string;
    value: string;
}

interface Props {
    _stats: Stats[]
    closeModal: CallableFunction;
    updateAttrs: CallableFunction;
}

const defaultTrait:Stats = { trait_type: "", value: ""};

export const StatsModal:FC<Props> = ({ _stats, closeModal, updateAttrs }) => {

    const [traits, setTraits] = useState<Stats[]>(_stats);

    const updateTrait = (value: string, key: "trait_type" | "value", index: number) => {
        const _traits = [...traits];
        const item = { ...traits[index]};
        item[key] = value;
        _traits[index] = item;
        setTraits(_traits);
    }

    const removeTrait = (index:number) => {
        const _traits = [...traits];
        if (_traits.length == 1) return;
        _traits.splice(index, 1);
        setTraits(_traits);
    }

    const addNewTrait = () => {
        setTraits([ ...traits, defaultTrait]);
    }

    const handleSaveTraits = () => {
        let _traits = [...traits];
        _traits = _traits.filter(item => item.trait_type.length > 0 && item.value.length > 0);
        if (_traits.length) updateAttrs(_traits);
        setTraits([defaultTrait]);
        closeModal();
    }

    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" checked readOnly />
            <div className="modal">
                <div className="modal-box bg-white">
                    <label
                        htmlFor="my-modal-3"
                        className="hover:text-gray-500 cursor-pointer absolute right-4 top-4"
                        onClick={() => closeModal()}
                    >✕</label>
                    <h3 className="font-bold text-center text-lg">Add Stats</h3>
                    <p className="py-4">Stats show up underneath your item, are clickable, and can be filtered in your collection&apos;s sidebar.</p>
                    <div className="max-h-[25rem] overflow-y-auto">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="py-3">Name</th>
                                    <th className="py-3">Value</th>
                                </tr>
                            </thead>
                            <tbody className="mt-2">
                                {
                                    traits.map((item, idx) => (
                                        <tr key={idx}>
                                            <td className="py-1">
                                                <div className="form-control">
                                                    <label className="input-group">
                                                        <span
                                                            className="bg-transparent border border-r-0 border-base-content property-close-btn hover:text-black cursor-pointer"
                                                            onClick={() => removeTrait(idx)}
                                                        >
                                                            <XIcon className="w-5 h-5"/>
                                                        </span>
                                                        <input
                                                            type="text"
                                                            placeholder="Speed"
                                                            className="input input-bordered bg-white border-base-content !rounded-none !outline-offset-0 w-36"
                                                            value={item.trait_type}
                                                            onChange={(e) => updateTrait(e.target.value, "trait_type", idx)}
                                                        />
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="py-1">
                                                <div className="form-control">
                                                    <label className="input-group">
                                                        <input
                                                            type="number"
                                                            placeholder="3"
                                                            className="input input-bordered bg-white border-base-content border-r-0 !rounded-l-none !outline-offset-0 px-2 w-28"
                                                            value={item.trait_type}
                                                            onChange={(e) => updateTrait(e.target.value, "trait_type", idx)}
                                                        />
                                                        <span
                                                            className="bg-transparent border border-r-0 border-base-content property-close-btn hover:text-gray-500 cursor-pointer"
                                                            onClick={() => removeTrait(idx)}
                                                        >
                                                            Of
                                                        </span>
                                                        <input
                                                            type="number"
                                                            placeholder="5"
                                                            className="input input-bordered bg-white border-base-content !rounded-l-none !outline-offset-0 px-2 w-20"
                                                            value={item.trait_type}
                                                            onChange={(e) => updateTrait(e.target.value, "trait_type", idx)}
                                                        />
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <div className="mt-4">
                            <button
                                className="btn btn-outline border-base-content"
                                onClick={() => addNewTrait()}
                            >add more</button>
                        </div>
                    </div>
                    <div className="modal-action">
                        <button
                            className="btn btn-info w-full capitalize text-white"
                            onClick={handleSaveTraits}
                        >Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}