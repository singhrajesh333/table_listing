import React, { useState } from 'react';
import './search.css';

const Search = (props) =>{
    const post = props.data.items;
    const [searchTerm,setSearchTerm] = useState("");
   
    const [incr,setIncr] = useState(0);
    const [sort,setSort] = useState({
        value:props.data.items
      })

     
      
      const sortHandler = () =>{
        setSort({value:props.data.items.sort((a,b) =>{
          return(
              new Date(a.pubDate) - new Date(b.pubDate)
          )
      })})
      }
      const titleHandler = () =>{
        setSort({value:props.data.items.sort((a,b) =>{
            return a.title.localeCompare(b.title)
            })})
      }

    return(
        <div >
        <div className="header">
        <input 
        type="text"
        placeholder="search..."
        onChange={(event)=>{
            setSearchTerm(event.target.value)
        }}
        />
        </div>
        <div  className="container">
        <table className="styled-table">
<thead>
<tr>
<th>images</th>
<th onClick={titleHandler}>
title
</th>
<th onClick={sortHandler}>
Date
</th>
<th>description</th>
</tr>
</thead>

        
        {sort.value.filter((val) =>{
             if(searchTerm === ""){
                 return val
             }
             else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                 return val
             }
             else if(val.description.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
            }
            
        })
        
        
        .slice(incr,incr+6).map((post,key) =>{
             return(
                <tbody className="user" key={key}>
                <tr>
                <td>
                <a href={post.link} target="blank">
                <img src={post.thumbnail} width="100" height="100" alt='image'/>
                </a>
                
                </td>
                <td>{post.title}</td>
                <td>{post.pubDate} </td>
                <td>{post.description}</td>
                </tr>
                 </tbody>
             )
        })}
        </table>
        <div className="pagination">
        {(incr>0) ? <button onClick={() => setIncr(incr-6)}>previous</button> : null }
  
        <button onClick={() => setIncr(0)}>1</button>
        <button onClick={() => setIncr(3)}>2</button>
      
       {(post.length-5 > incr) ? <button onClick={() => setIncr(incr+6)}>next</button> : null }
       </div>
        </div>
        </div>
    )
}

export default Search;