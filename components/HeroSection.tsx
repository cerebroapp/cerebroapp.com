import Link from 'next/link'
import Image from 'next/image'
import SearchBar from './SearchBar'
import DownloadButton from './DownloadButton'
import { Links } from '../services/getReleasesLinks'

const HeroSection = ({ links }: { links: Links }) => {
  const { dmg, deb, exe } = links

  return (
    <div className='relative isolate px-6 lg:px-8 py-10'>
      <div className='mx-auto max-w-2xl'>
        <div className='text-center'>
          <Link href='/'>
            <Image src='/images/icon.png' height={120} width={120} />
          </Link>
          <SearchBar />
          <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
            cerebro-app
          </h1>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Is an open-source launcher to improve your productivity and efficiency. <br/> 
            Download now for free the latest version of the application and enjoy.
          </p>

        </div>
      </div>
      <section className='text-center space-y-2 mt-8' id='download'>
        {exe && (
          <DownloadButton
            link={exe}
            title='Download for Windows'
            img='/images/icons/win.svg'
            extension='exe'
          />
        )}
        {dmg && (
          <DownloadButton
            link={dmg}
            title='Download for Mac'
            img='/images/icons/mac.svg'
            extension='dmg'
          />
        )}
        {deb && (
          <div className='md:mt-5'>
            <DownloadButton
              link={deb}
              title='Download for Linux'
              img='/images/icons/linux.svg'
              extension='AppImage'
            />
          </div>
        )}
      </section>

    </div>
  )
}

export default HeroSection
