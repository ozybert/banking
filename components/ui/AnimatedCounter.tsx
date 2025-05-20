'use client'
import Countup from 'react-countup'
const AnimatedCounter = ({amount}:{amount: number}) => {
  return (
    <div className='w-full'>
        <Countup
            start={0}
            end={amount}
            duration={2.5}
            separator=","
            decimals={2}
            decimal="."
            prefix="$" 
        />
    </div>
  )
}

export default AnimatedCounter