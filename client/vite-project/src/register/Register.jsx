function Register() {
  return (
    <>
      <div className="p-16 border border-gray-300 rounded w-fit h-fit flex justify-center flex-col mx-auto mt-32 shadow-lg">
        <div className="text-4xl font-bold font-mono flex mx-auto ">
          Sign up
        </div>
        <form className="flex flex-col space-y-5 stretch mt-4 w-100">
          <div className="p-4 flex flex-col">
            <input
              className="w-full border-b border-gray-300 focus:border-gray-500 outline-none p-2"
              type="text"
              placeholder="Name"
            />
            <input
              className="w-full border-b border-gray-300 focus:border-gray-500 outline-none p-2"
              type="email"
              placeholder="Mail"
            />
            <input
              className="w-full border-b border-gray-300 focus:border-gray-500 outline-none p-2"
              type="password"
              placeholder="Password"
            />
          </div>
          <button className="p-2 border text-white bg-blue-500 font-bold cursor-pointer rounded">
            Sign Up
          </button>
          <div className="flex items-center gap-2 mx-auto">
            <input className="flex cursor-pointer " type="checkbox" /> I agree
            to terms and conditions
          </div>
          <p className="text-center">
            Already have an account?{" "}
            <a className="text-blue-500" href="/login">
              Login
            </a>
          </p>
        </form>
      </div>
      ;
    </>
  );
}

export default Register;
