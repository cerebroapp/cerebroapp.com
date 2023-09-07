const TeamSection = () => {
  return (
    <div className='bg-white pb-40 sm:pn-32'>
      <div className='mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3'>
        <div className='max-w-2xl'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            The Team
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            The cerebro-app is a big application that takes a lot of time. This is the main team that tries to contribute to the progress of the project.
          </p>
        </div>
        <ul role='list' className='grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2'>
          <li>
            <div className='flex items-center gap-x-6'>
              <img
                className='h-16 w-16 rounded-full'
                src='https://avatars.githubusercontent.com/u/594298?v=4'
                width={50}
                height={50}
              />
              <div>
                <h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900'>
                Alexandr Subbotin 
                </h3>
                <p className='text-sm font-semibold leading-6 text-indigo-600'>Owner / Founder</p>
              </div>
            </div>
          </li>
          <li>
            <div className='flex items-center gap-x-6'>
              <img
                className='h-16 w-16 rounded-full'
                src='https://avatars.githubusercontent.com/u/24482087?v=4'
                width={50}
                height={50}
              />
              <div>
                <h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900'>
                  Gustavo Pereira
                </h3>
                <p className='text-sm font-semibold leading-6 text-indigo-600'>Owner / Core-commiter</p>
              </div>
            </div>
          </li>
          <li>
            <div className='flex items-center gap-x-6'>
              <img
                className='h-16 w-16 rounded-full'
                src='https://avatars.githubusercontent.com/u/4465376?v=4'
                width={50}
                height={50}
              />
              <div>
                <h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900'>
                Christoph Flick 
                </h3>
                <p className='text-sm font-semibold leading-6 text-indigo-600'>Core-commiter</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TeamSection
