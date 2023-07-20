// components/Toast.js

const Toast = ({ message, onClose }) => {
  return (
    <div className="fixed flex flex-col bottom-4 right-4 bg-gray-800 text-white p-4 rounded-md">
      {message}
      <button className="ml-4 text-white" onClick={onClose}>
        x
      </button>
    </div>
  )
}

export default Toast
