import test from 'ava'
import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Zoom from '.'

configure({ adapter: new Adapter() })

test('component should render', (t) => {
  const component = shallow(
    <Zoom
      img="https://www.lifeofpix.com/wp-content/uploads/2018/06/20180120-P1201659-1600x1089.jpg"
      zoomScale={3}
      height={600}
      width={600}
      transitionTime={0.5}
    />
  )

  t.is(component.length, 1)
})
