// components/Toast.js

const Toast = ({ message, onClose }) => {
  return (
    <>
      <div
        id="toast"
        className="show shadow-xl bg-gray-800 text-white rounded-md flex items-center justify-center"
      >
        <div id="desc">{message}</div>
      </div>
    </>
  )
}

export default Toast
