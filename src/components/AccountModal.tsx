import React from 'react';

interface AccountModalProps {
    isOpen: boolean;
    onClose: () => void;
    userImage: any | string;
    userName: string;
    userEmail: string;
    onLogout: () => void;
}

const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose, userImage, userName, userEmail, onLogout }) => {
    if (!isOpen) return null;
    console.log("User Image URL: ", userImage);
    return (
        <div className="absolute mt-40 bg-white border rounded-lg p-5 shadow-lg dark:bg-gray-800 dark:border-zinc-700">
            <button onClick={onClose} className="absolute top-2 right-2 rounded-xl w-7 h-7 text-xl font-bold border hover:shadow-md dark:border-zinc-500 dark:hover:shadow-zinc-600">
                &times;
            </button>
            <div className="flex flex-col gap-2 items-center">
                <img src={userImage} alt="user image"  className='w-[4rem] h-[4rem] rounded-full' />
                <h2 className="text-lg font-semibold border-t pt-2 dark:text-zinc-50">{userName}</h2>
                <p className="text-sm text-gray-600 dark:text-zinc-400">{userEmail}</p>
                <button
                    onClick={onLogout}
                    className="mt-3 bg-mainColor text-white py-1 px-3 rounded-md hover:shadow-lg"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default AccountModal;




// import React from 'react';

// interface AccountModalProps {
//     isOpen: boolean;
//     onClose: () => void;
//     children: React.ReactNode;
// }

// const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose, children }) => {
//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//             <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
//             <div className="relative bg-white rounded-lg p-5 w-[90%] max-w-md">
//                 <button onClick={onClose} className="absolute top-2 right-2 text-xl font-bold">
//                     &times;
//                 </button>
//                 {children}
//             </div>
//         </div>
//     );
// };

// export default AccountModal;
