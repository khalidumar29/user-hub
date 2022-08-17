import React from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
const Home = ({ users, setPages, pages }) => {
  const handlePrevious = () => {
    if (pages > 1) {
      setPages(pages - 1);
    }
  };
  const handleNext = () => {
    if (pages >= 1) {
      setPages(pages + 1);
    }
  };
  return (
    <div className='lg:mx-[12%] md:mx-[5%] mt-4'>
      <div
        className={
          users && "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5"
        }
      >
        {users ? (
          <>
            {users.map((user) => (
              <div
                key={user.id}
                className='card w-96 bg-base-100 shadow-xl image-full'
              >
                <figure>
                  <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
                </figure>
                <div className='card-body'>
                  <div class='avatar'>
                    <div class='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                      <img src={user.avatar} alt='' />
                    </div>
                  </div>
                  <h2 className='text-lg'>
                    {user.first_name} {user.last_name}
                  </h2>
                  <p className='text-[16px]'>{user.email}</p>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div class='flex justify-center items-center'>
            <div class='animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900'></div>
          </div>
        )}
      </div>
      {users && (
        <>
          {" "}
          <div className='flex justify-between py-3'>
            <button
              disabled={pages === 1}
              onClick={handlePrevious}
              className='btn btn-primary capitalize flex items-center gap-2'
            >
              <AiOutlineLeft /> previous
            </button>
            <button
              disabled={pages === 2}
              onClick={handleNext}
              className='btn btn-primary capitalize flex items-center gap-2'
            >
              Next <AiOutlineRight />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
