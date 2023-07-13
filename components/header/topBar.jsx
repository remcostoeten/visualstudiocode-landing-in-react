export default function topBar() {
  return (
    <div className="bg-darkBlue w-screen flex items-center px-4">
      <div className="flex items-center">
        <span className="w-2 h-2 rounded-full bg-red-500 mr-1"></span>
        <span className="w-2 h-2 rounded-full bg-yellow-600 mr-1"></span>
        <span className="w-2 h-2 rounded-full bg-green-700 "></span>
      </div>
      <p className="text-sm text-slate-500 ">remco stoeten</p>
    </div>
  )
}
