import dynamic from 'next/dynamic'

const Swap = dynamic(() => import('@/features/Swap'))

function SwapPage() {
  return (
    <div>
      <Swap />
    </div>
  )
}
export default SwapPage

export async function getStaticProps() {
  return {
    props: { title: 'Swap' }
  }
}
