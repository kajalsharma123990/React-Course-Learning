function Card() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://images.pexels.com/photos/415958/pexels-photo-415958.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xl font-medium font-mono tracking-widest uppercase text-indigo-500">
            Interlaken
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            Lorem ipsum dolor
          </h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          tempora ipsum soluta amet
        </p>
      </div>
      <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://images.pexels.com/photos/452544/pexels-photo-452544.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xl font-medium font-mono tracking-widest uppercase text-indigo-500">
            Zurich
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            Lorem ipsum dolor
          </h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          tempora ipsum soluta amet
        </p>
      </div>
      <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://images.pexels.com/photos/1105840/pexels-photo-1105840.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xl font-medium font-mono tracking-widest uppercase text-indigo-500">
            Bern
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            Lorem ipsum dolor
          </h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          tempora ipsum soluta amet
        </p>
      </div>
      <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://images.pexels.com/photos/1028185/pexels-photo-1028185.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xl font-medium font-mono tracking-widest uppercase text-indigo-500">
            Montreux
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            Lorem ipsum dolor
          </h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          tempora ipsum soluta amet
        </p>
      </div>
    </div>
  );
}

export default Card;
