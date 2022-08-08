import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function PaymentModal({isOpen , setIsOpen, price}) {
 

  function closeModal() {
    setIsOpen(false)
  }

  const launchRazorPay = () => {
    let options = {
        key: "rzp_test_PeDUFsB8wjz4zK",
        amount: price*100,
        currency: "INR",
        name: "Booky My Show Clone",
        description: "for Buying and rental purposes",
        image:
        "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
        handler: () => {
            setIsOpen(false);
            alert("Payment DOne");
        },
        theme: {color: "#c4242d"},
    };

    let Razorpay = new window.Razorpay(options);
    Razorpay.open();
  }

  return (
    <>
      

      <Transition  appear show={isOpen} as={Fragment}>
        <Dialog as="div"
         className="fixed inset-0  overflow-y-auto  z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Please Make Payment
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Hello Please click on the below button to make a payment.
                    </p>
                  </div>

                  <div className=" mt-4">
                    <button
                      type="button"
                      className=" my-2 w-full inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={launchRazorPay}
                    >
                     Pay ₹{price}
                    </button>
                    <button
                      type="button"
                      className=" w-full inline-flex justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                     Cancel Payment
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
