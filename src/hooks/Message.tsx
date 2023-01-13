import { toast, TypeOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Message = (text: string, typeNotify: TypeOptions) => toast(text, {
  type: typeNotify,
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
});
