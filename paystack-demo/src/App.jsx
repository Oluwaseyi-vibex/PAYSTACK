import { usePaystackPayment } from 'react-paystack';

const config = {
  reference: (new Date()).getTime().toString(),
  email: "user@example.com",
  amount: 5000000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200 \\ ends 00 at the back as Kobo
  publicKey: import.meta.env.VITE_PUBLIC_KEY.toString(),
};
// you can call this function anything
const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  alert('Paystack Box is closed');
}

const App = () => {
  const initializePayment = usePaystackPayment(config);

  return (
    <div className='px-[20px] pt-[20px]'>
      <div className='text-bold font-[500] underline mb-[40px]'>Paystack Payment Demo</div>
      <button onClick={()=>{initializePayment(onSuccess, onClose)}} className='text-[#fff] cursor-pointer font-[700] text-[14px] bg-red-600 rounded-[20px] py-[10px] px-[30px]'>
        Pay Now
      </button>
    </div>
  )
}

export default App
