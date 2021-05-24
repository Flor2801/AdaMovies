import { React } from "react";



const Section = ({ item, title }) => {

 const array = [{numero:0}, {numero:1}, {numero:2}, {numero:3}]   
 const corto = array.slice(0,2)
console.log(corto);


  return (
    <>
    
    <section>
    <Link ><p>{title}</p></Link>
      
      <div> 
      {item.map(tarjeta => (
         <p>{tarjeta.name}</p> 
      ))}
      </div>
      </section>
    </>
  );
};

export default Section;
