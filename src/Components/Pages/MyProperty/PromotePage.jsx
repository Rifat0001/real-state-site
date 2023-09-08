import { useState } from "react";
const PromotePage = () => {
    const durations = [
        { value: '3days', label: '3 Days', price: 50 },
        { value: '5days', label: '5 Days', price: 75 },
        { value: '7days', label: '7 Days', price: 100 },
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
        <div className="py-8 max-w-[2150px] pb-8 mx-auto xl:px-40 md:px-10 sm:px-2 px-4 ">
            <h1 className="text-2xl text-center text-primary font-semibold">Featured your property</h1>
            <div>
                <h2 className="text-black text-xl py-2 font-semibold">Select Duration:</h2>
                {durations.map((duration) => (
                    <label key={duration.value} className="flex items-center space-x-2">
                        <input
                            type="radio"
                            value={duration.value}
                            checked={selectedDuration === duration.value}
                            onChange={handleRadioChange}
                            className="h-6 w-6 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <span className="text-black text-lg">{duration.label}</span>
                        <span className="ml-4 text-black text-lg">${duration.price}</span>
                    </label>
                ))}
                <div className="py-2">
                    <strong className="text-primary text-xl">Selected Duration: <span className="text-black">{selectedDuration}</span></strong>
                </div>
                <div className="py-2">
                    <strong className="text-primary text-xl">Total Price: <span className="text-black"> ${totalPrice}</span> </strong>
                </div>
                <button className="mt-4 btn btn-primary btn-outline">Confirm</button>
            </div>
        </div>
    );
};

export default PromotePage;