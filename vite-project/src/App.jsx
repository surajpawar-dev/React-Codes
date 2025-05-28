function App() {

  let fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];
  // let fruits = [];

  // if (fruits.length === 0) {
  //   fruits = ['No Fruits']
  // }

  return (
    <div className="bg-gray-100 h-full w-full flex flex-row items-center justify-center">
      <div className="max-w-2xl w-full p-6 bg-gray-50 rounded-lg shadow-lg items-center">
        <h1 className="text-4xl font-bold mb-4 text-center">List of Fruits</h1>
        {fruits.length === 0 && (
          <p className="text-red-500">No fruits available</p>
        )}
        {fruits.map(fruit => {
          return (
            <div key={fruit} className="bg-white p-4 rounded shadow-md mb-2">
              <h2 className="text-2xl font-semibold">{fruit}</h2>
              <p className="text-gray-600">This is a delicious {fruit}.</p>
            </div>
          )
        })}
      </div>

    </div>
  )
}
export default App