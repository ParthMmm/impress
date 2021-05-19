import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { connect, useDispatch } from "react-redux";
import { fetchAccessories } from "../actions";
import axios from "axios";
import history from "../util/history";
function Create({ id, username, token, lubes, films }) {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  useEffect(() => {
    dispatch(fetchAccessories());
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    let formData = new FormData();
    formData.append("file", file);

    const res = await axios.post(
      `${process.env.REACT_APP_LOCAL_SERVER}user/upload_image?secret_token=${token}`,
      formData
    );

    const { url } = res.data;

    data.picture = url;
    data.userID = id;
    data.username = username;
    const res2 = await axios.post(
      `${process.env.REACT_APP_LOCAL_SERVER}user/create_post?secret_token=${token}`,
      data
    );
    console.log(res2.data);
    if (res2.status === 200) {
      console.log("success");
      history.push("/");
    }

    reset();
  };

  const fileHandler = (e) => {
    setFile(e.target.files[0]);
  };
  let lubeItems = [];
  lubes.map((lube) => lubeItems.push(lube));
  let lItems = lubeItems.sort().map((i) => {
    return <option key={i._id}>{i.name}</option>;
  });

  let filmItems = [];
  films.map((film) => filmItems.push(film));
  let fItems = filmItems.sort().map((i) => {
    return <option key={i._id}>{i.name}</option>;
  });
  return (
    <div>
      <div className="bg-white dark:bg-gray-800 font-sans min-h-screen antialiased pt-24 pb-5">
        <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
          <div className="flex flex-col bg-white p-10 rounded-lg shadow-2xl space-y-6  ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col pb-2">
                <input
                  {...register("title", { required: true })}
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title"
                  className=" placeholder-gray-500 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent p-2"
                ></input>
                <span className="text-red-700">
                  {" "}
                  {errors.title?.type === "required" && "Title required"}
                </span>
              </div>
              <div className="flex flex-col flex-grow  pb-2">
                <textarea
                  {...register("description", { required: true })}
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Description"
                  className="placeholder-gray-500 border border-transparent rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent p-2 "
                ></textarea>
                <span className="text-red-700">
                  {" "}
                  {errors.description?.type === "required" &&
                    "Description required"}
                </span>
              </div>
              <div className="relative inline-block w-full  items-center  pb-2">
                <select
                  {...register("switchType", { required: true })}
                  name="switchType"
                  id="switchType"
                  className=" w-full  border border-transparent rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent p-1 "
                >
                  <option value="" disabled selected>
                    Switch Type
                  </option>
                  <option>Linear</option>
                  <option>Tactile</option>
                  <option>Clicky</option>
                  <option>Clicky + Tactile</option>
                </select>
                <span className="text-red-700">
                  {" "}
                  {errors.switchType?.type === "required" &&
                    "Switch Type required"}
                </span>
              </div>
              <div className="relative inline-block w-full  items-center  pb-2">
                <select
                  {...register("lube", { required: true })}
                  name="lube"
                  id="lube"
                  className="placeholder-gray-500 w-full  border border-transparent rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent p-1 "
                  placeholder="Lube"
                >
                  <option value="" disabled selected>
                    Lube
                  </option>
                  <React.Fragment>{lItems}</React.Fragment>
                  {/* <option>Krytox 205 G0</option>
                  <option>Krytox GPL 105</option>
                  <option>Tribosys 3203</option>
                  <option>Tribosys 3204</option> */}
                </select>
                <span className="text-red-700">
                  {" "}
                  {errors.lube?.type === "required" && "Lube required"}
                </span>
              </div>
              <div className="relative inline-block w-full items-center pb-2">
                <select
                  {...register("film", { required: true })}
                  className="placeholder-gray-500 w-full border border-transparent rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent p-1"
                  placeholder="Switch Type"
                >
                  <option className="text-gray-400" value="" disabled selected>
                    Switch Film
                  </option>
                  <React.Fragment>{fItems}</React.Fragment>
                </select>
                <span className="text-red-700">
                  {" "}
                  {errors.film?.type === "required" && "Film required"}
                </span>
              </div>
              <div className="flex flex-col  ">
                <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue pt-2 rounded-lg shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                  <span className="mt-2 leading-normal">Select a file</span>
                  <input
                    {...register("picture", { required: true })}
                    type="file"
                    name="picture"
                    id="picture"
                    className="hidden"
                    onChange={fileHandler}
                  />
                  <img
                    className="pt-5"
                    src={file ? URL.createObjectURL(file) : null}
                    alt={file ? file.name : null}
                  ></img>
                </label>
                <span className="text-red-700">
                  {" "}
                  {errors.picture?.type === "required" && "Picture required"}
                </span>
              </div>

              <div className="flex flex-col pt-5 ">
                <button
                  {...register("userID")}
                  {...register("username")}
                  type="submit"
                  className="bg-blue-500 text-white font-bold px-5 py-2 rounded-lg shadow-md focus:outline-none shadow hover:bg-blue-700 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
function mapStateToProps({ user, auth, fetchData }) {
  return {
    id: user._id,
    username: user.username,
    token: auth.token,
    lubes: fetchData.lubes,
    films: fetchData.films,
  };
}

export default connect(mapStateToProps)(Create);
