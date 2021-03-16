import React,{useState, useEffect} from 'react'
import "./Datafetching.css";
import axios from 'axios'

function Datafetching() {
    const [posts,setPosts]= useState([])
    const [search, setSearch]= useState("")

    useEffect(() => {
       axios.get('https://nut-case.s3.amazonaws.com/coursessc.json')
        .then(res =>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])

    return (
        <div className="records">
             <h1>Career Labs Task </h1>
            <div className='search'>
         <p>
            <input className="button" type="text" placeholder="Search for Courses" onChange={event => {setSearch(event.target.value)}} ></input>
            {
                posts.filter((val)=>{
                    if (search == ""){
                        return null
                    }else if (val.Provider.toLowerCase().includes(search.toLowerCase()) ||
                        val["Child Subject"].toLowerCase().includes(search.toLowerCase()) ||
                        val["Course Name"].toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                }).map((val, key)=>{
                    return <div> <br/>
                    <h3>Course Name : { val["Course Name"]}</h3>
                    <p>Provider : {val.Provider}<br/>
                    Next Session Date : {val["Next Session Date"]}<br/>
                    Child Subject : {val["Child Subject"]}</p>
                    </div>
                })
            }

            </p></div>



            <li>
                {
                    posts.map(post=> <p key={post.CourseId}><h3><br/>Name : {post["Course Name"]}</h3>
                                                            <b>Provider : </b>{post.Provider}<br/>
                                                            <b>University Name: </b>{post["Universities/Institutions"]}<br/>
                                                            <b>Url : </b>{post["Url"]}<br/>
                                                            <b>Next Session Date : </b>{post["Next Session Date"]}<br/>
                                                            <b>Parent Subject : </b>{post["Parent Subject"]}<br/>
                                                            <b>Child Subject : </b>{post["Child Subject"]}<br/>
                                                            <b>Length : </b>{post["Length"]}<br/>
                                                            <b>Video(Url) : </b>{post["Video(Url)"]}<br/><br/></p>)
                }
                
                
            </li>
        </div>
    )
}

export default Datafetching
