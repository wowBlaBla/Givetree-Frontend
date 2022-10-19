import { XIcon } from "@heroicons/react/solid";
import { FC, useState } from "react";

interface Property {
    trait_type: string;
    value: string;
}

interface Props {
    _property: Property[];
    closeModal: CallableFunction;
    updateAttrs: CallableFunction;
}

const defaultTrait:Property = { trait_type: "", value: ""};

export const PropertyModal:FC<Props> = ({ _property, closeModal , updateAttrs}) => {

    const [traits, setTraits] = useState<Property[]>(_property);

    const updateTrait = (value: string, key: "trait_type" | "value", index: number) => {
        let _traits = [...traits];
        let item = { ...traits[index]};
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

    const saveTraits = () => {
        let _traits = [...traits];
        _traits = _traits.filter(item => item.trait_type.length > 0 && item.value.length > 0);
        if (_traits.length) updateAttrs(_traits);
        setTraits([defaultTrait]);
        closeModal();
    }

    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" checked={true} readOnly />
            <div className="modal">
                <div className="modal-box">
                    <label
                        htmlFor="my-modal-3"
                        className="hover:text-white cursor-pointer absolute right-4 top-4"
                        onClick={() => closeModal()}
                    >✕</label>
                    <h3 className="font-bold text-center text-lg">Add Levels</h3>
                    <p className="py-4">Properties show up underneath your item, are clickable, and can be filtered in your collection's sidebar.</p>
                    <div className="max-h-[25rem] overflow-auto">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="py-3">Type</th>
                                    <th className="py-3">Name</th>
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
                                                            className="bg-transparent border border-r-0 property-close-btn hover:text-white cursor-pointer"
                                                            onClick={() => removeTrait(idx)}
                                                        >
                                                            <XIcon className="w-5 h-5"/>
                                                        </span>
                                                        <input
                                                            type="text"
                                                            placeholder="Character"
                                                            className="input input-bordered !rounded-none !outline-offset-0"
                                                            value={item.trait_type}
                                                            onChange={(e) => updateTrait(e.target.value, "trait_type", idx)}
                                                        />
                                                    </label>
                                                </div>
                                            </td>
                                            <td className="py-1">
                                                <input
                                                    type="text"
                                                    placeholder="Male"
                                                    className="input input-bordered w-full max-w-xs rounded-l-none !outline-offset-0"
                                                    value={item.value}
                                                    onChange={(e) => updateTrait(e.target.value, "value", idx)}
                                                    />
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <div className="mt-4">
                            <button
                                className="btn btn-outline border-base-content/20"
                                onClick={() => addNewTrait()}
                            >add more</button>
                        </div>
                    </div>
                    <div className="modal-action">
                        <button className="btn btn-info w-full capitalize text-white" onClick={saveTraits}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}