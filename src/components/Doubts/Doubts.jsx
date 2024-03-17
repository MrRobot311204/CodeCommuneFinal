import React, { useEffect, useState } from 'react'
import { db } from "../Config/Firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";
function Doubts() {
    const [doubts, setDoubt] = useState([]);

    const [newDoubtTitle, setDoubtTitle] = useState("")
    const [newLanguage, setNewLanguage] = useState("")
    const [description, setNewDescription] = useState("")

    const doubtCollectionRef = collection(db, "doubts")

    useEffect(() => {
        const getDoubtList = async () => {
            try {
                const data = await getDocs(doubtCollectionRef);
                const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                console.log(data);
                console.log(filteredData);
            } catch (error) {
                console.error(err);
            }
        };
        getDoubtList();
    }, []);

    const onSubmitDoubts = async (event) => {
        try {
            await addDoc(doubtCollectionRef, {
                question: newDoubtTitle,
                language: newLanguage,
                description: description,
            });
            setDoubtTitle("");
            setNewLanguage("");
            setNewDescription("");
            // event.preventDefault();
            alert("You have submitted your Doubt !")

        } catch (error) {
            console.error(err);
        }
        

    }

    return (
        <>
            <div class="bg-slate-900">
                {/* <h1 class="text-white text-6xl text-center mt-[200px]"> Welcome to the CodeCommune doubt solver </h1> */}

                <div class="main border-white border rounded-md w-full">

                    <div class="max-w-lg mx-auto mt-[100px]">
                        <div class="mb-5">
                            <label for="text" class="block mb-2 text-3xl font-medium text-gray-900 dark:text-white ">Enter your Doubt</label>
                            <input
                                onChange={(e) => setDoubtTitle(e.target.value)}
                                type="text" id="questions" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-[60px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter your doubt" required />
                        </div>


                        <div class="mb-5">
                            <label for="text" class="block mb-2 text-3xl font-medium text-gray-900 dark:text-white">Enter your coding language </label>
                            <input
                                onChange={(e) => setNewLanguage(e.target.value)}
                                type="text" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light " placeholder="eg. c++/python/java" required />
                        </div>

                        <div class="mb-5">
                            <label for="text" class="block mb-2 text-3xl font-medium text-gray-900 dark:text-white">Give a brief description of your Doubt </label>
                            <input
                                onChange={(e) => setNewDescription(e.target.value)}
                                type="text" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-[100px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div>

                            <form class="max-w-lg mx-auto">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload Your doubt </label>
                                <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
                                <div class="p-2 mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">Upload the image of your doubt  , so that our experts can look into this.</div>
                            </form>

                        </div>
                        <div class="flex items-center justify-center mt-4 text-2xl">
                            <button onClick={onSubmitDoubts} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-center items-centerd m-8">Submit </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Doubts
