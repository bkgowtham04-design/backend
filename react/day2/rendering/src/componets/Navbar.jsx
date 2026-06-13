import React from 'react'

const Navbar = () => {

    const numbers = 2026

    const stringData = "Thalapathy Vijay CM Of"

    const bollean = false

    const name = true

    const majaa = null


  return (
   <>
   <div className='bg-amber-700 text-white flex flex-col text-center w-screen h-screen'>
    <h1 className='text-5xl mt-5 bg-blue-300 text-black p-8'>This is data</h1>
    <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consectetur suiiii id ipsam consequatur quas corrupti nam doloribus rerum. Quod dolore aliquid blanditiis obcaecati laborum ratione necessitatibus cupiditate nam pariatur aspernatur?
    Consequatur sapiente {majaa ?? "This Is MAJAAAAA"} omnis laborum aliquam {stringData} {numbers} perferendis a iure, error adipisci velit iste autem fugiat? Similique iusto maiores ratione nemo molestias vero maxime impedit deserunt, {stringData} {numbers} rem aut? Quis, a similique. Praesentium.
    Ad et vitae sit? Fugiat consequatur sunt {numbers} necessitatibus debitis assumenda {name && "My Name Is Gowtham"} suiiii totam quos? Ab corrupti optio, iste quas totam accusantium aliquid {stringData} {numbers} hic, est ipsam odio adipisci necessitatibus tenetur veniam eum dolores!
    Aut voluptatibus {stringData} {numbers} recusandae dolores impedit similique sit, dicta voluptate{stringData} {numbers} perspiciatis eligendi vitae totam adipisci quod ullam sed. Doloremque ullam, provident ex {stringData} {numbers} inventore quas quod nemo nulla officia harum officiis velit?
    Quam officia quis magnam voluptas {stringData} {numbers} natus qui ex at. Soluta magnam praesentium {stringData} {numbers} recusandae architecto rem, quisquam iusto! Et rerum, est animi, facere expedita vero harum, earum corporis sapiente necessitatibus nulla.
    Veniam error nam officia libero ullam neque possimus est placeat ea?{bollean ? "This is True":"This is False"} Reiciendis facilis, culpa totam beatae impedit laudantium corporis eaque quaerat necessitatibus? Soluta nihil, beatae quod ullam debitis ea eligendi.</p>
   </div>
   
   </>
  )
}

export default Navbar