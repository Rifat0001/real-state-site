import { useState } from "react";
const PromotePage = () => {
    const durations = [
        { value: '3 days', label: '3 Days', price: 50 },
        { value: '5 days', label: '5 Days', price: 75 },
        { value: '7 days', label: '7 Days', price: 100 },
    ];
    const [selectedDuration, setSelectedDuration] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const handleRadioChange = (event) => {
        const durationValue = event.target.value;
        const selectedDurationObj = durations.find((d) => d.value === durationValue);

        setSelectedDuration(selectedDurationObj.value);
        setTotalPrice(selectedDurationObj.price);
    };
    return (
        <div className="py-8 max-w-[2150px]  pb-8 mx-auto xl:px-40 md:px-10 sm:px-2 px-4 ">
            <h1 className="text-4xl bg- text-center back-gradient text-white py-6 font-bold ">Feature your property</h1>
            <div className="mt-5">
                <h2 className="text-black text-xl py-2 text-center font-semibold">Select Duration:</h2>
                {durations.map((duration) => (
                    <label key={duration.value} className="flex items-center space-x-2 justify-center ">
                        <input
                            type="radio"
                            value={duration.value}
                            checked={selectedDuration === duration.value}
                            onChange={handleRadioChange}
                            className="h-6 my-2  w-6 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <span className="text-black text-lg">{duration.label}</span>
                        <span className="ml-4 text-black text-lg">${duration.price}</span>
                    </label>
                ))}
                <div className="py-2 text-center">
                    <strong className="primary-color text-xl">Selected Duration: <span className="text-black">{selectedDuration} </span></strong>
                </div>
                <div className="py-2 text-center">
                    <strong className="primary-color text-xl">Total Price: <span className="text-black"> ${totalPrice}</span> </strong>
                </div>
                <div className="flex justify-center">
                    <button className="mt-4  btn btn-gradient btn-outline">Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default PromotePage;