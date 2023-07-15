export default function topBar() {
  return (
    <div className="bg-darkBlue flex w-screen items-center px-4">
      <div className="flex items-center">
        <span className="mr-1 h-2 w-2 rounded-full bg-red-500"></span>
        <span className="mr-1 h-2 w-2 rounded-full bg-yellow-600"></span>
        <span className="h-2 w-2 rounded-full bg-green-700 "></span>
      </div>
      <p className="text-sm text-slate-500 ">remco stoeten</p>
    </div>
  )
}
