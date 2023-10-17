import React from 'react'

const List = ({people}) => {
    return (
      <>
        {people?.map((person) => {
          const { id, name, age, image } = person;
          return (
            <article key={id} className="person flex  gap-5 w-[70%] py-5">
              <img src={image} className=' w-[70px] h-[70px] rounded-full overflow-hidden' alt={name} />
              <div>
                <h4 className='w-[200px] font-bold'>{name}</h4>
                <p className=' text-slate-500'>{age} years</p>
              </div>
            </article>
          );
        })}
      </>
    );

    
  
}

export default List