import React from 'react'

const Bool = () => {
  return (
<form dir="rtl">
  <div className="mb-4">
    <label
      className="block text-gray-700 font-medium mb-2"
      htmlFor="name"
    >
      Name
    </label>
    <input
      className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
      id="name"
      name="name"
      required
      type="text"
    />
  </div>
  <div className="mb-4">
    <label
      className="block text-gray-700 font-medium mb-2"
      htmlFor="age"
    >
      Age
    </label>
    <input
      className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
      id="age"
      name="age"
      required
      type="number"
    />
  </div>
  <div className="mb-4">
    <label
      className="block text-gray-700 font-medium mb-2"
      htmlFor="gender"
    >
      Gender
    </label>
    <select
      className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
      id="gender"
      name="gender"
      required
    >
      <option value="">
        Select gender
      </option>
      <option value="male">
        Male
      </option>
      <option value="female">
        Female
      </option>
      <option value="other">
        Other
      </option>
    </select>
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-medium mb-2">
      What is your favorite color?
    </label>
    <div className="flex flex-wrap -mx-2">
      <div className="px-2 w-1/3">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="color-red"
        >
          <input
            className="mr-2"
            defaultValue="red"
            id="color-red"
            name="color"
            type="radio"
          />
          Red
        </label>
      </div>
      <div className="px-2 w-1/3">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="color-blue"
        >
          <input
            className="mr-2"
            defaultValue="blue"
            id="color-blue"
            name="color"
            type="radio"
          />
          Blue
        </label>
      </div>
      <div className="px-2 w-1/3">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="color-green"
        >
          <input
            className="mr-2"
            defaultValue="green"
            id="color-green"
            name="color"
            type="radio"
          />
          Green
        </label>
      </div>
    </div>
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-medium mb-2">
      What is your favorite animal?
    </label>
    <div className="flex flex-wrap -mx-2">
      <div className="px-2 w-1/3">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="animal-cat"
        >
          <input
            className="mr-2"
            defaultValue="cat"
            id="animal-cat"
            name="animal-cat"
            type="checkbox"
          />
          Cat
        </label>
      </div>
      <div className="px-2 w-1/3">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="animal-dog"
        >
          <input
            className="mr-2"
            defaultValue="dog"
            id="animal-dog"
            name="animal-dog"
            type="checkbox"
          />
          Dog
        </label>
      </div>
      <div className="px-2 w-1/3">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="animal-bird"
        >
          <input
            className="mr-2"
            defaultValue="bird"
            id="animal-bird"
            name="animal-bird"
            type="checkbox"
          />
          Bird
        </label>
      </div>
    </div>
  </div>
  <div className="mb-4">
    <label
      className="block text-gray-700 font-medium mb-2"
      htmlFor="message"
    >
      Message
    </label>
    <textarea
      className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
      id="message"
      name="message"
      rows="5"
    />
  </div>
  <div>
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      type="submit"
    >
      Submit
    </button>
  </div>
</form>  )
}

export default Bool