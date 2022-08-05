import React from 'react';

function Cast(props) {
  return (
    <>
      <div>
        <div className='flex flex-col items-center  text-center  '>
          <div className='mx-20'>
          <div className='w-28 h-28 '>
            <img
              src={props.image}
              alt=""
              className='w-full h-full rounded-full '
            />
          </div>
          <h1 className="text-xl  text-gray-800">{props.castName}</h1>
          <h5 className="text-sm text-gray-500">as {props.role}</h5>

        </div>
        </div>
      </div>
    </>
  )
}

export default Cast;