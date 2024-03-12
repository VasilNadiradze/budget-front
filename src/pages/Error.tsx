import { FC } from 'react'
import img from '../assets/nf.jpg'
import { Link } from 'react-router-dom'

const Error: FC = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-10 bg-slate-900 text-white'>
      <img src={img} />
      <Link to={'/'}>მთავარი</Link>
    </div>
  )
}

export default Error