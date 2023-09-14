import { useState } from "react";
import '/src/Components/Settings/Settings.css'
const ProfileSetting = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentName, setCurrentName] = useState('Rifat Mahmud');
    const [newName, setNewName] = useState('');

    const [isPassModalOpen, setIsPassModalOpen] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const openPassModal = () => {
        setIsPassModalOpen(true);
    };

    const closePassModal = () => {
        setIsPassModalOpen(false);
        // Clear the input fields
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
    };

    const handleCurrentPasswordChange = (e) => {
        setCurrentPassword(e.target.value);
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmNewPasswordChange = (e) => {
        setConfirmNewPassword(e.target.value);
    };

    const handleUpdatePassword = () => {
        // Implement password change logic here
        // You can add validation and an API call to update the password
        if (newPassword === confirmNewPassword) {
            // Passwords match; perform the update
            // Replace this with your actual API call
            console.log('Password updated:', newPassword);
            closePassModal();
        } else {
            // Passwords don't match; show an error or provide feedback to the user
            console.error('Passwords do not match');
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        // Clear the new name input
        setNewName('');
    };

    const handleNameChange = (e) => {
        setNewName(e.target.value);
    };

    const handleUpdateName = () => {
        // Update the name with the new name value
        setCurrentName(newName);
        closeModal();
    };
    return (
        <div className="py-8 md:mb-48 mb-20 max-w-[2150px] pb-8 mx-auto xl:px-40 md:px-10 sm:px-2 px-4 ">
            <h1 className="text-2xl pb-2 primary-color border-b-2 border-primary font-semibold"> Profile Settings</h1>
            <div className="mt-4">
                <div className="flex items-center gap-8">
                    <h2 className="primary-color text-xl font-semibold py-2">
                        Name: <span className="text-black ms-4">{currentName}</span>
                    </h2>
                    <button className="btn btn-sm btn-gradient btn-outline" onClick={openModal}>
                        Edit
                    </button>
                    {isModalOpen && (
                        <dialog open className="modal mobile-modal">
                            <div className="modal-box drop-shadow-lg bg-white">
                                <button className="btn btn-sm btn-circle btn-error btn-outline absolute right-2 top-2" onClick={closeModal}>
                                    ✕
                                </button>
                                <form method="dialog">
                                    <h3 className="font-bold primary-color text-lg">Edit Name</h3>
                                    <p className="text-black font-semibold">Current Name: {currentName}</p>
                                    <div className="flex items-center justify-center gap-4">
                                        <input
                                            type="text"
                                            value={newName}
                                            onChange={handleNameChange}
                                            placeholder="Enter new name"
                                            className="border p-2 w-full rounded-md text-black"
                                        />
                                        <button
                                            type="button"
                                            onClick={handleUpdateName}
                                            className="btn btn-sm btn-gradient "
                                        >
                                            Update
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </dialog>
                    )}
                </div>
                <div className="flex items-center gap-8">
                    <h2 className="primary-color text-xl font-semibold py-2">
                        Password: <span className="text-black ms-4">Change Password</span>
                    </h2>
                    <button className="btn btn-sm btn-gradient btn-outline" onClick={openPassModal}>
                        Change
                    </button>
                    {isPassModalOpen && (
                        <dialog open className="modal mobile-modal">
                            <div className="modal-box bg-white">
                                <button className="btn btn-sm btn-circle btn-outline btn-error absolute right-2 top-2" onClick={closePassModal}>
                                    ✕
                                </button>
                                <form method="dialog">
                                    <h3 className="font-bold primary-color text-lg">Change Password</h3>
                                    <label className="text-black font-semibold">
                                        Current Password:
                                        <input
                                            type="password"
                                            value={currentPassword}
                                            onChange={handleCurrentPasswordChange}
                                            className="border border-black p-2 w-full rounded-md text-black"
                                        />
                                    </label> <br />
                                    <label className="text-black font-semibold">
                                        New Password:
                                        <input
                                            type="password"
                                            value={newPassword}
                                            onChange={handleNewPasswordChange}
                                            className="border border-black p-2 w-full rounded-md text-black"
                                        />
                                    </label> <br />
                                    <label className="text-black font-semibold ">
                                        Confirm New Password:
                                        <input
                                            type="password"
                                            value={confirmNewPassword}
                                            onChange={handleConfirmNewPasswordChange}
                                            className="border border-black p-2 w-full rounded-md text-black"
                                        />
                                    </label> <br />
                                    <button
                                        type="button"
                                        onClick={handleUpdatePassword}
                                        className="btn btn-sm btn-gradient mt-2"
                                    >
                                        Update Password
                                    </button>
                                </form>
                            </div>
                        </dialog>
                    )}
                </div>
            </div>
        </div>
    );
};



export default ProfileSetting;