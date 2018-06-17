import React from 'react'
import Composer from 'react-composer'
import { DataConsumer } from '../../context/DataProvider'
import { ArrayConsumer } from '../../context/ArrayProvider'
import Fifth from './Fifth'

export default () => {
  return (
    <Composer components={[
      <DataConsumer />,
      <ArrayConsumer />
    ]}>
    {([data, array]) => (
      <div>
        I'm forth and Me too .
        <Fifth data={data} array={array} />
      </div>
    )}
    </Composer>
  )
}
