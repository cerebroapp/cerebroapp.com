const StatsSection = () => {
  return (
    <div className='relative isolate overflow-hidden py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-4xl font-bold tracking-tight sm:text-6xl'>About</h2>
          <p className='mt-6 text-lg leading-8'>
            Cerebro app is a launcher type application developed in electron. Its main advantage is
            the support for multiple OS with the possibility of creating and installing plugins to
            suit your needs.
          </p>
        </div>
        <div className='mx-auto lg:max-w-none'>
          <dl className='mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4'>
            <div className='flex flex-col-reverse'>
              <dt className='text-base leading-7 text-gray-600'>Stars on GitHub</dt>
              <dd className='text-2xl font-bold leading-9 tracking-tight'>8k</dd>
            </div>
            <div className='flex flex-col-reverse'>
              <dt className='text-base leading-7 text-gray-600'>Forks</dt>
              <dd className='text-2xl font-bold leading-9 tracking-tight'>400+</dd>
            </div>
            <div className='flex flex-col-reverse'>
              <dt className='text-base leading-7 text-gray-600'>Open-source projet every</dt>
              <dd className='text-2xl font-bold leading-9 tracking-tight'>Free</dd>
            </div>
            <div className='flex flex-col-reverse'>
              <dt className='text-base leading-7 text-gray-600'>Oficial plugins</dt>
              <dd className='text-2xl font-bold leading-9 tracking-tight'>10+</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default StatsSection
