import { useEffect, useState } from "react"

const HooksScreen =()=>{
    const [counter,setConuter]= useState<number>(0);
    const [products,setProducts]= useState([]);

   
    useEffect(() => {
        const controllerRequst = new AbortController();
        const signl = controllerRequst.signal;
        (async()=>{
          try {
            const respones = await( await fetch('https://dummyjson.com/products', { signal: signl })).json();
            
            console.log(respones.products);
            setProducts(respones.products);
          } catch (e) {
            console.log(e);
          }
          

        })();
      
        
      
        return () => {
          console.log("راح نسكرو ذي صفحة باي باي شريكي هههه");
          controllerRequst.abort();
        };
      }, []);
      

    return (
        <div>
            <h1>Hooks Screen {counter}</h1>
            {products.length?( products.map(({id,title}:{id:number,title:string})=><p key={id}>{title}</p>)):(<h1>Loding ..</h1>)}
            <button onClick={()=>setConuter(p=>p+1)}>Add counter</button>
        </div>
    );
}
export default HooksScreen