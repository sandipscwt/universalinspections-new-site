export const dynamic = "force-dynamic";

import React, { Suspense } from 'react'
// import HeroSection from '../_components/herosection'
import FinanceForm from './_components/financeForm'

const Page = () => {
  return (
    <>
      {/* <HeroSection /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <FinanceForm />
      </Suspense>
    </>
  )
}

export default Page
